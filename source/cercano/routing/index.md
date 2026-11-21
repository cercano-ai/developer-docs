---
title: "Model routing"
section: "Cercano"
description: "Route Cercano work by task, model quality, and execution destination."
---

Cercano does not force every task through the same model. Its routing system
separates three decisions: the kind of work being performed, the amount of
model capability it needs, and where inference runs.

## Why it matters

Routine reconnaissance, mechanical changes, and difficult implementation work
do not need the same model. Routing lets you reserve stronger or more expensive
models for work that benefits from them and send bounded tasks to economical
hosted or local models.

Savings depend on the models, providers, and workload you choose. A route is a
decision rule, not a guarantee that a particular task will be cheaper.

## Task, quality, and destination

Cercano saves routing choices for task classes such as reconnaissance,
investigation, mechanical development, and implementation. Each task class can
select a quality tier and an execution destination independently.

- **Quality** selects a model tier within a destination.
- **Destination** selects Primary, Secondary, or Local infrastructure.
- **Redirects** can change initial placement.
- **Backups** handle failures inside a configured destination chain.

Primary, Secondary, and Local are separate destinations. Local is not an alias
for a small model, and Secondary is not automatically Primary's fallback.

## Configure routing

Open `/config`, choose **Routing**, and compare the saved assignments for
**Reconnaissance** and **Implementation**. Adjust quality and destination
separately, save the configuration, then run a delegated read-only task. Inspect
the reported final route to confirm where it actually ran.

## Understand the tradeoffs

- Model quality, cost, and latency vary by provider and workload.
- A task configured as Local can still be redirected by policy or configuration.
- Quality selection does not grant tools or override placement restrictions.
- A route name does not prove privacy or execution location; inspect the final
  destination.
- Delegated quality tiers also carry cumulative token caps. These are token
  ceilings, not dollar budgets.

See [models and providers](../models/), [delegation and subagents](../delegation/),
and [token metrics](../metrics/).
