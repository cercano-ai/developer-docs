---
title: "Terminal user interface"
section: "Cercano"
description: "Terminal user interface for Cercano and Cercloud."
---

## What it is

Cercano's terminal client combines rich response formatting, responsive layouts,
color themes, a live context meter, and visible tool and subagent activity.
Subagent tabs separate delegated investigations from the main conversation, so
you can inspect their progress without losing your place in the parent task.
Settings bring model selection, routing, permissions, and metrics into the same
interface instead of requiring a separate configuration workflow.

<figure class="video-figure"><video controls playsinline preload="metadata" poster="../../assets/videos/terminal-ui.jpg" aria-label="Cercano terminal interface and themes"><source src="../../assets/videos/terminal-ui.mp4" type="video/mp4" />Your browser does not support embedded video.</video><figcaption>A polished terminal interface with the palettes used across the Cercano sites.</figcaption></figure>

## Why it matters

Long coding sessions produce dense output: code, tables, tool results, and
parallel lines of investigation. Readable presentation helps you follow what
the agent is doing, spot decisions that need attention, and stay focused on the
work rather than deciphering a transcript. Information is organized around the
work: the main conversation for decisions, subagent tabs for delegated detail,
and settings for the controls you need. Themes let you adapt the interface to
your preferences.

## Try it

Start `cercano-cli`, then use:

- `/theme` to select or edit a theme.
- `/config` to explore settings and responsive layouts at different terminal widths.
- `/c` to open the active-conversation context viewer alongside the live meter.
- `/context` to read the project’s `.cercano/context.md` file.
- `/export trajectory [path]` to open trajectory export for the conversation.
- `/search TODO` to find matching text in the current conversation.
- `/help` for the current keymap and command list.

Ask the agent to compare a few project components in a table and inspect the
rendering in your normal terminal size. Then ask it to delegate a read-only code
search and switch to the subagent tab to follow that investigation.

## Controls and limitations

- **Layout and color rendering** depend on terminal dimensions and capabilities.
- Subagent tabs show independent task progress. Public dispatch returns an
  acceptance receipt; the parent can continue while the child runs. Closing a
  tab dismisses it, while `task_stop` explicitly stops execution. See
  [delegation and subagents](../delegation/).
- The interactive client and headless output are different presentations of
  the same agent; do not expect terminal interactions in a script.
- Interactive and headless clients expose different controls. Formatting claims
  are not a promise that every historical interface plan is implemented.

Continue to [context and sessions](../context/), [token metrics](../metrics/), or
the [complete feature guide](../features/).

