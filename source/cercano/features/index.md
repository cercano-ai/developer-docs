---
title: "Cercano feature guide"
section: "Cercano"
description: "A guide to Cercano routing, delegation, context, metrics, terminal, sessions, and architecture."
---

Cercano is a local agent runtime and developer experience. It keeps model choice,
delegated work, context management, tools, sessions, and multiple client surfaces
inside one coherent system. This guide preserves the detailed product material
that does not belong on the shorter Cercano homepage.

<div class="feature-directory">
<a href="../models/"><strong>Models and providers</strong><span>Use subscriptions, API providers, hosted open-weight models, or local runtimes through one agent.</span></a>
<a href="../routing/"><strong>Model routing</strong><span>Route work by task, model quality, and destination so stronger models are used where they matter.</span></a>
<a href="../multimodal/"><strong>Images and audio</strong><span>Inspect attached images and invoke specialized image or audio models from the same workflow.</span></a>
<a href="../delegation/"><strong>Delegation and subagents</strong><span>Dispatch bounded work into separate contexts and inspect each agent without crowding the main conversation.</span></a>
<a href="../../extend/"><strong>Workflows and skills</strong><span>Use repeatable research, planning, debugging, verification, and extension workflows instead of one oversized prompt.</span></a>
<a href="../context/"><strong>Context and sessions</strong><span>Keep long jobs moving with background compaction, durable history, search, and resume.</span></a>
<a href="../metrics/"><strong>Token metrics</strong><span>See reported token use by provider, model, source, and time, including accounting coverage warnings.</span></a>
<a href="../tui/"><strong>Terminal interface</strong><span>Work with responsive layouts, visible tool activity, subagent tabs, context meters, settings, and tuned themes.</span></a>
<a href="../architecture/"><strong>Runtime architecture</strong><span>Understand how the agent service, terminal client, headless commands, conversations, providers, and tools fit together.</span></a>
</div>

## A few important boundaries

- Routing, model quality, execution destination, and tool permissions are
  separate decisions. A route name alone does not prove where work ran or what
  the agent could do.
- Local inference avoids provider inference charges, but still has hardware,
  electricity, model-quality, and setup tradeoffs.
- Persisted session history and the compacted context visible to a model are
  different things.
- Token metrics describe reported usage. They are not a billing ledger and do
  not turn an unreported counter into zero.
- Separate agent contexts are not filesystem sandboxes. Agents with write tools
  can still affect the same checkout.

Start with [installation](../../getting-started/install/) or the
[first-run guide](../../getting-started/first-run/).
