---
title: "Administer Cercloud"
section: "Cercloud"
description: "Administer Cercloud for Cercano and Cercloud."
---

The enterprise pilot implements organization membership, manual team assignment, approved model policies, shared skills, native authentication, device visibility, and administration audit records. Live sign-in and packaged-client acceptance are separate from automated test results.

## Organization setup and identity

The service operator provisions the organization and first administrator. The operator owns the Google sign-in application. Administrators share invitation links manually; automatic invitation email is not part of this slice.

Google Workspace sign-in is the documented V1 identity flow. LDAP, directory synchronization, and SCIM remain deferred. Do not treat product-level SAML or trust-layer narratives as setup instructions.

- [Provisioning and membership](https://github.com/cercano-ai/cercano-enterprise/blob/main/docs/membership-administration.md)
- [Google sign-in setup](https://github.com/cercano-ai/cercano-enterprise/blob/main/docs/google-sign-in.md)
- [Connect a Cercano host](../getting-started/connect/)

## Teams and permissions

An administrator can create teams, invite people, set roles, assign at most one team per developer, and deactivate members. The last active administrator cannot be removed. Team deletion is limited to unused teams so references retain their meaning.

The administration console’s five areas are People & teams, Model policy, Shared skills, Devices & sync, and Audit. Its [console walkthrough](https://github.com/cercano-ai/cercano-enterprise/blob/main/docs/console-demo.md) is a disposable local demonstration, not live customer setup.

## Model policy and routing

[Publish model policies](model-policy/) to define an organization ceiling, team restrictions, approved routes, task defaults, and ordered fallbacks. Policy rollback publishes a new revision; it does not mutate an old revision. [Shared skills](shared-skills/) are pinned to exact versions.

## Budgets and cost governance

Budgets, quotas, showback, and chargeback are in the product narrative. This review did not establish implemented central budget enforcement or administration APIs for them. No configuration recipe is provided. Cercano’s [local usage metrics](https://github.com/cercano-ai/Cercano/blob/main/docs/agent/features/advanced-metrics.md) are a separate capability.

## Auditability and compliance

Administration changes are recorded with their tenant transaction. A device acknowledgement reports an applied policy and skill manifest; it is neither device attestation nor proof of every inference request. A successful policy fetch alone does not advance the applied revision.

The default managed architecture checks requests on the Cercano host. The central inference proxy remains roadmap scope. No certification, universal inference audit, or compliance guarantee is asserted here.

- [Inference enforcement review](https://github.com/cercano-ai/cercano-enterprise/blob/main/docs/inference-audit.md)
- [Device visibility](https://github.com/cercano-ai/cercano-enterprise/blob/main/docs/administration-console.md)

## Deployment and architecture

[Operator administration](../administration/) links deployment, recovery, and acceptance guides. Verify implementation status and live acceptance before planning a production rollout.

Sources: [implementation status](https://github.com/cercano-ai/cercano-enterprise/blob/main/docs/implementation-status.md), [console demonstration](https://github.com/cercano-ai/cercano-enterprise/blob/main/docs/console-demo.md), [Cercloud product family](https://github.com/cercano-ai/Cercloud/blob/main/README.md).

