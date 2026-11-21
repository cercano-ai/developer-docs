---
title: "Delegation and subagents"
section: "Cercano"
description: "Delegate bounded work to subagents with separate contexts and scoped tools."
---

Cercano can dispatch a bounded task to a subagent with its own working context
and an explicit set of tools. The subagent performs its read, edit, and test loop
separately and returns a focused result instead of filling the main conversation
with every intermediate file read and tool response.

<figure class="video-figure"><video controls playsinline preload="metadata" poster="../../assets/videos/delegation.jpg" aria-label="Delegation and subagent tabs in Cercano"><source src="../../assets/videos/delegation.mp4" type="video/mp4" />Your browser does not support embedded video.</video><figcaption>Dispatch bounded work, then inspect each agent in its own terminal tab.</figcaption></figure>

## Why delegate

Reserve the main context for decisions and difficult reasoning. Code searches,
extraction, verification, and well-specified edits can run in an appropriate
separate context. The main agent works from the concise result instead of
carrying the investigation's raw material through every later request.

Delegation can also make model use more deliberate. Saved task routing can send
bounded work to an efficient hosted model or a local runtime while keeping
difficult reasoning on a stronger route. The final destination is determined by
the active routing and placement policy; a delegated task is not automatically
local or inexpensive.

## Try it

Ask in plain language:

> Delegate a read-only search for this project's configuration loader. Return
> the call path and relevant file references, then explain the findings. Do not
> modify files.

The agent decides when delegation is useful; this prompt requests it explicitly.
The terminal reports the route and granted tools and gives the child its own tab.

## Task lifecycle

Public dispatch returns an acceptance receipt with a task and child identifier,
not the completed result. Use the task controls exposed by the current client to
inspect progress, wait for a result, or stop execution. Dismissing a tab or
canceling a wait does not itself stop the underlying task.

Independent tasks are independent of the launching turn, not of the host
process. A host restart interrupts unfinished tasks rather than replaying them.

## Controls and limitations

- Tool grants bound what a subagent can call. Write-capable grants remain subject
  to the active permission and approval policy.
- A separate context is not a filesystem sandbox. Granted edits affect real files.
- Subagent output can be incomplete or wrong and still needs review.
- The cost of additional inference and verification can outweigh delegation on
  small tasks.
- Closing the terminal client can stop work when an auto-launched host exits
  after its final client disconnects.

See [models and routing](../models/), [context and sessions](../context/), and
[workflows and skills](../../extend/).
