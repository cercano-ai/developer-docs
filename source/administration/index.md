---
title: "Operator administration"
section: "Administration"
description: "Operator administration for Cercano and Cercloud."
---

Service operation and organization administration have different responsibilities. Operators configure the service, database, signing keys, and sign-in application; organization administrators manage their members and policy.

## Deploy and recover the service

Use the authoritative guides in the enterprise repository:

- [Deployment](https://github.com/cercano-ai/cercano-enterprise/blob/main/docs/deployment.md) — configuration, migrations, proxy requirements, health checks, retention, and rollback.
- [Recovery](https://github.com/cercano-ai/cercano-enterprise/blob/main/docs/recovery.md) — backup and restore operations.
- [Google sign-in](https://github.com/cercano-ai/cercano-enterprise/blob/main/docs/google-sign-in.md) — operator-owned OAuth setup.
- [V1 acceptance](https://github.com/cercano-ai/cercano-enterprise/blob/main/docs/v1-acceptance.md) — live acceptance requirements.

## Manage the organization

Start with [Administer Cercloud](../cercloud/). The local console demo uses disposable organizations and fixture sign-in. It must not be used as a production deployment recipe.

## Ownership to resolve

A production service origin, support contact, incident response owner, and customer-facing release/support policy have not been established by this draft. The website’s GitHub Pages publication is separate from deploying the Cercloud service.

