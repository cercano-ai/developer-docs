# Documentation gaps and conflicts

Inspected local repository snapshots on 2026-11-20 (America/Los_Angeles); exact revisions, dirty state, and source file hashes are in source-snapshot.json. These are local source findings, not verification of a live service or current public release.

| Finding | Evidence | Draft resolution / required owner |
| --- | --- | --- |
| Central gateway narrative exceeds current default architecture | Cercloud/README.md “control plane” vs “Where inference runs”; cercano-enterprise/docs/inference-audit.md | Describe signed policy enforcement at host, proxy as roadmap. Product + runtime owner reconcile gateway claims. |
| Identity and trust claims exceed V1 | Cercloud/product/identity-and-auth.md, product/trust-layer.md vs enterprise implementation-status.md | Google Workspace pilot only; LDAP/directory sync/SCIM deferred; no certification promise. Product + identity owner confirm SAML and trust availability. |
| Admin screen status contradicts itself | membership-administration.md says later; administration-console.md introduction says being built, ending and console-demo.md say implemented | Use console-demo.md and implementation-status.md for observed disposable interface scope. Enterprise docs owner remove stale introductions. |
| Client merge status stale | Cercano/docs/enterprise-implementation-status.md says awaiting review; enterprise implementation-status.md and inference-audit.md record merged chain | Do not equate merge with packaged release. Runtime + release owner confirm shipped versions and live acceptance. |
| Provider key distribution ambiguous | Cercloud/README.md implies central provisioning; Cercano/docs/enterprise-connection.md preserves existing provider store | Do not promise automatic key delivery. Runtime + security owner specify supported credential flow. |
| Split Homebrew packaging invalidates older quick starts | Cercano/docs/installation-macos.md vs old single-formula usage | Carry current three-formula command, Tap Trust caveat, fixture caveat, no restart hooks, unvalidated monolith migration. Release owner sign off before public onboarding. |
| State path scopes differ | installation-macos.md uses ~/.config/cercano; enterprise-connection.md uses ~/.cercano/enterprise | Show both with scopes; do not invent migration or delete instructions. Runtime owner validate full path matrix. |
| Skill authoring is not host discovery | reference/agent-skills-guide.md vs enterprise-connection.md | Managed catalog combines built-in and assigned enterprise skills; no personal/repository directory discovery claim. Runtime owner unify authoring/discovery docs. |
| Hosted persistence and collaboration not operational docs | Cercloud/product/hosted-collaboration.md | Identify as direction; need supported hosting, onboarding, lifecycle, context and access contract. |
| Budgets, quotas, showback/chargeback not established by pilot | Cercloud/README.md vs enterprise implementation-status.md | No enforcement recipe; local Cercano metrics separate. Product + enterprise owner define scope. |
| IDE/plugin parity unclear | Cercano/docs/acp.md and historical IDE/plugin specifications | Source link only; need supported editor/version/install matrix and stable plugin distribution contract. |
| Public reference incomplete | agent/README.md, cloud-routing.md and managed routing guide | Need versioned CLI/config/env schema and API ownership. |
| Launch and support ownership missing | enterprise V1 acceptance and deployment guides | Confirm production service origin, support destination, compatibility policy, live Google/Keychain/packaged restart acceptance before launch. |

No internal business or investment material is migrated to the site. Product briefs inform taxonomy only; no market, pricing, regulatory, or certification claims are reproduced.
