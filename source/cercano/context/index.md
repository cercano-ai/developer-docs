---
title: "Context and sessions"
section: "Cercano"
description: "Keep long-running Cercano work moving with background compaction, saved sessions, search, and resume."
---

Cercano separates durable conversation history from the compacted context sent
to a model. That distinction lets long-running work remain searchable and ready
to resume while the active model context stays focused on current decisions.

<figure class="video-figure"><video controls playsinline preload="metadata" poster="../../assets/videos/sessions.jpg" aria-label="Searching and resuming a Cercano session"><source src="../../assets/videos/sessions.mp4" type="video/mp4" />Your browser does not support embedded video.</video><figcaption>Find a previous session and continue from the terminal.</figcaption></figure>

## Background compaction

Rolling background compaction digests older conversation turns into layered
summaries while retaining recent working context. Automatic compaction runs
asynchronously, so request assembly does not pause for a summarizer before the
agent can continue.

Cercano includes a map-reduce compaction technique: it summarizes bounded
segments of older raw history and then merges their structured summaries. That
avoids repeatedly feeding an entire long transcript into one summarization
request. Map-reduce is an implemented technique, not a claim that every
compaction operation uses the same algorithm.

Compaction is lossy. It preserves a useful working representation, not every
detail of every past turn. Stored history and model-visible context are
different resources.

## Saved sessions

Conversation turns and tool-call history are persisted to SQLite. Generated
titles make sessions recognizable, the history picker returns to prior work,
and conversation search locates details in the current session. You can also
name a session explicitly.

Common commands include:

- `/history` — choose a previous conversation.
- `/resume <id>` — resume a known conversation.
- `/rename Refactor sprint` — give the current session a useful title.
- `/search configuration` — search the current conversation.
- `/c` — open the active-conversation context viewer.
- `/compact` — start incremental background compaction.
- `/context-regen` — rebuild compacted context from stored turns.
- `/clear-compacted-context` — remove summaries and rehydrate from stored turns.

## Retention and recovery boundaries

Persistence is not an indefinite archive. The default aging policy retains raw
bodies for 90 days and inactive conversations for 180 days. Retention is
configurable, including a keep-forever option. Export important work before its
retention window expires.

Resuming a conversation does not restore the filesystem, a shell process, or a
running command. Files and external systems may have changed since the session
was saved.

See the [terminal interface](../tui/) and [runtime architecture](../architecture/).
