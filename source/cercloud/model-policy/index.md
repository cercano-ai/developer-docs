---
title: "Model policy and routing"
section: "Cercloud"
description: "Model policy and routing for Cercano and Cercloud."
---

> Source: [cercano-enterprise/docs/policy-publication.md](https://github.com/cercano-ai/cercano-enterprise/blob/main/docs/policy-publication.md). 


An administrator can save and validate a draft,
publish it, and restore an earlier configuration as a new revision. Developers
can register a host, fetch its signed policy, and download assigned text skills.
The administration console uses these APIs. The Cercano integration enforces
model restrictions in the running host and is on Cercano main; see the [client workflow demonstration](https://github.com/cercano-ai/cercano-enterprise/blob/main/docs/client-workflow-demo.md).

Each developer belongs to at most one team. Team management remains manual;
LDAP, SCIM and Google directory synchronization are not required.

## How publication works

One policy draft contains the organization configuration and its team rules.
Publication validates all of them and stores one immutable snapshot in a single
database transaction. This lets an administrator change the organization's
model ceiling and affected teams together, without an intermediate broken policy.

An independent document per team would reduce the size of each edit, but would
require coordinated publication when organization restrictions change. Storing
individual normalized route/default/assignment rows would simplify some SQL
queries but require more joins and a separate snapshot format. The agreed
immutable PostgreSQL snapshots keep publication atomic and match the existing
public policy contract. Text skill versions also stay in PostgreSQL; no new
service or dependency is introduced.

The configuration includes:

- `minimum_client_version`: a stable major.minor.patch version.
- `allowed_routes`: exact provider, endpoint, model and placement records.
- `task_defaults`: task defaults and an explicit ordered fallback list.
- `skills`: exact published skill IDs and versions.
- `teams`: a map from canonical lowercase team UUIDs to team rules.

Each team rule has `allowed_route_ids`, `task_defaults` and `skills`. Omit
`allowed_route_ids`, or set it to null, to inherit organization routes. Use an
empty array to deny every route. Team route IDs must refer to organization
routes. Team defaults replace defaults for the same task, and must remain valid
within the restricted route set. Teams cannot unlock a locked organization
default. Organization skills always apply; team skills add to them. Assigning
different versions of the same skill is an error, not a precedence rule.

Defaults and skills must be explicit arrays, including when empty. Organization
`teams` must be an explicit object. If a team restriction removes a route used
by an inherited default or fallback, publication fails until the draft is
corrected. A developer without a team receives the organization configuration.

## Save, validate and publish a policy

Use the authenticated browser session from Google sign-in. State-changing
requests require the exact configured Origin and application/json. From the
service's own browser page, for example:

```js
const org = 'YOUR_ORGANIZATION_UUID';
const base = `/v1/organizations/${org}`;
const configuration = {
  minimum_client_version: '1.0.0',
  allowed_routes: [{
    id: 'local-approved', provider: 'ollama',
    endpoint: 'http://127.0.0.1:11434', model: 'YOUR_APPROVED_MODEL',
    placement: 'local'
  }],
  task_defaults: [{
    task: 'chat', destination: 'local', quality: 'standard',
    route_id: 'local-approved', fallback_route_ids: [],
    allow_developer_override: false
  }],
  skills: [],
  teams: {}
};
const saved = await fetch(`${base}/policy/draft`, {
  method: 'PUT', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ expected_version: 0, configuration })
}).then(r => r.json());
// Check HTTP responses in a real caller; do not publish after a failed save.
await fetch(`${base}/policy/validate`, {
  method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ expected_version: saved.version })
});
await fetch(`${base}/policy/publish`, {
  method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ expected_version: saved.version })
});
```

Use expected_version 0 only for a new draft. Fetch the draft and pass its current
version for subsequent edits. A stale editor receives HTTP 409 and must reload;
it cannot silently overwrite another administrator's work. Invalid drafts can be
saved for editing, but cannot be published. Validation failures explain the
problem without exposing database internals or another company's resources.

## API reference

All paths below start with `/v1/organizations/{organizationID}`. Administration
operations require the administrator role. Lists currently return the latest
100 records; this first API slice does not yet provide a full history browser.

| Method and path | Purpose |
| --- | --- |
| GET /policy/draft | Read the saved draft and its edit version. |
| PUT /policy/draft | Save `{expected_version, configuration}`. |
| POST /policy/validate | Validate `{expected_version}` without publishing. |
| POST /policy/publish | Publish `{expected_version}` as a new revision. |
| GET /policy/versions | Read published configurations, newest first. |
| POST /policy/rollback | Publish `{revision, expected_version}` from an earlier version; also reset the draft and advance its edit version. |
| GET /skill-drafts/{slug} | Read a text skill draft. |
| PUT /skill-drafts/{slug} | Save `{expected_version, name, description, content}`. |
| POST /skill-drafts/{slug}/publish | Publish `{expected_version}` as the next immutable skill version. |
| GET /skill-versions/{skillID}/{version} | Read any published skill version as an administrator. |
| GET /audit | Read the most recent administrative records within the 30-day retention window. |
| POST /hosts | Register a host for the current member with `{display_name, client_version, platform}`. |
| GET /hosts/{hostID}/policy | Renew the signed policy for the current member's active host. |
| GET /skills/{skillID}/versions/{version} | Download a skill currently assigned to the current member. |

Skill slugs use lowercase letters, digits, underscores and hyphens, starting
with a letter or digit, up to 64 characters. The server creates the namespaced
ID `organization-uuid/slug`. URL-encode that entire ID as one path segment with
`encodeURIComponent`. Names can be up to 100 characters, descriptions 2,000
bytes, and skill content 256 KiB of UTF-8 text. The server calculates SHA-256 and
byte size from immutable content. Assignment input supplies only ID and version;
administrators cannot supply a different digest or content URL. Skill rollback
means publishing a new policy that assigns an older immutable skill version.

A composed policy is limited to 256 KiB, and an assigned skill bundle to 2 MiB.
These are decoded limits; JSON requests are separately bounded at 2 MiB to allow
escaped skill text. A removed assignment denies subsequent downloads. Downloads
are authenticated; knowing a skill ID is not permission to read it.

## Signing keys and leases

Configure a signing key before serving policy leases. Create a private file
outside the repository and database, using a persistent secret volume or secret
manager in deployment:

```sh
go run ./cmd/enterprise keygen --id pilot-1 --out /secure/path/policy-keys.json
export ENTERPRISE_POLICY_KEY_FILE=/secure/path/policy-keys.json
```

The command creates a new mode-0600 file and refuses to overwrite an existing
file. Startup rejects invalid keys and files accessible to other users. There
is no automatic ephemeral key generation: restarting must not change trust.
Without signing configuration, administration remains available but policy
lease requests return 503. No private key is stored in PostgreSQL or returned
by the HTTP API.

The key file is JSON with `active_key_id` and a `keys` array. Each entry has `id`
and an unpadded base64url `public_key`. Only the active entry has `private_seed`
(the 32-byte Ed25519 seed, also unpadded base64url). This file is a secret.

`GET /.well-known/cercano-policy-keys` returns only public Ed25519 JWKs. The
client obtains keys from its independently configured, trusted enterprise
HTTPS origin with normal TLS verification. Neither a URL nor an unknown public
key supplied alongside a policy establishes trust. The local development
loopback exception is not a production trust mechanism.

Rotate keys in stages: first publish both old and new public keys while signing
with the old private key; then deploy the new active private key while retaining
the old public key. Keep the old public key through the full 15-minute lease
window after the last old-key issuer stops, with an operational margin, before
removing it. Restart or redeploy every server instance after changing the key
file. The Cercano integration refreshes and verifies this key set.

Each signed policy binds the organization, member and host, with a fresh
15-minute lease. The signature covers the exact payload bytes and the public
contract's domain separator. An inactive member or host cannot renew. Admins
cannot fetch another member's host lease, even in the same organization.

Policy publication, rollback and membership changes increase the organization's
revision counter. A full policy response renews the lease without changing the
revision. Responses include an ETag covering the effective configuration, scope,
membership labels, signing key and public key set. A matching If-None-Match can
return an empty 304 only after the same authentication, membership and host
checks as a full response. A rename or key rotation also changes the validator.

A 304 never renews authorization. Clients retain the original signed expiry and
monotonic deadline. They omit the validator at sign-in, after restart or any
failed synchronization, and with fewer than two minutes left on the lease. This
obtains a fresh signed policy before expiry while avoiding identical downloads
during normal one-minute polling. Clients also reuse skill content by exact
version and digest. Clients without conditional polling still receive a fresh
signed lease on every GET.

## Audit retention and validation

Draft saves, publication, rollback, team creation, invitations, membership
updates and operator organization provisioning write an audit record in the
same database transaction as the change. A failed audit write rolls back the
change. Records contain actor, action, resource, revision, outcome and time;
no skill bodies, provider secrets or request bodies. Operator provisioning uses
an explicit `operator` actor label in the API. Rejected requests make no changes
and do not create successful-change records.

Run `enterprise prune-audit` daily as an operator job to delete records older
than 30 days. It reads ENTERPRISE_MIGRATION_DATABASE_URL and requires an account
with BYPASSRLS (or a superuser), plus DELETE permission, to cover all companies.
Never give that account to the web process. The web runtime cannot update or
delete audit history. Scheduling the job in the deployment environment remains
part of pilot setup; no deployment or scheduler is configured by these tests.

Automated checks use two organizations in a disposable PostgreSQL database.
They exercise API permissions, RLS, stale and concurrent draft writes, invalid
publication, skill digests, immutable versions, rollback, membership revisions,
deactivation, signed leases, assigned downloads, atomic audit failures and
retention. Signing tests cover tampering, wrong scope, expiry, key overlap and
private key handling. No customer accounts or Google credentials are used.

