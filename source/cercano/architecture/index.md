---
title: "Runtime architecture"
section: "Cercano"
description: "How Cercano clients, the agent service, sessions, tools, and model providers fit together."
---

Cercano separates the agent runtime from the interface used to control it. An
independent agent service owns execution, provider access, permissions, tools,
and conversation persistence. Thin clients connect to that service over gRPC.

<div class="architecture-flow" role="img" aria-label="Terminal and headless clients connect to the Cercano agent service, which connects to local and hosted models.">
<section><span>Clients</span><strong>Terminal UI</strong><strong>Headless commands</strong><strong>Integrations</strong></section>
<i aria-hidden="true"></i>
<section class="architecture-flow__core"><span>Runtime</span><strong>Cercano agent</strong><small>sessions · tools · permissions · state</small></section>
<i aria-hidden="true"></i>
<section><span>Inference</span><strong>Subscriptions</strong><strong>Hosted providers</strong><strong>Local models</strong></section>
</div>

## Why the separation matters

The terminal can remain fast and focused while the durable runtime manages
sessions, model access, and tool execution. Headless commands and other clients
can use the same infrastructure instead of reimplementing the agent.

Multiple conversations maintain separate execution state, including working
directory and active turn state. This helps keep projects and investigations
distinct while using one service.

## Try both client surfaces

Launch `cercano-cli` for the interactive terminal. For a bounded headless task:

```bash
cercano run "Explain the repository structure without editing files"
```

The client launches the agent service when needed. You can also start the
service explicitly with `cercano agent`.

## Isolation and lifecycle boundaries

- Conversation isolation is not filesystem sandboxing. Sessions with write
  tools can affect the same files; use separate worktrees for conflicting edits.
- Permissions apply regardless of which client submits a task.
- A separate process does not guarantee that in-flight work survives a service
  restart. Persisted conversation history is a different feature.
- Auto-launched services may exit after the last client disconnects, depending
  on configuration. An explicitly started service has a different lifecycle.

See [context and sessions](../context/), [terminal interface](../tui/), and
[models and providers](../models/).
