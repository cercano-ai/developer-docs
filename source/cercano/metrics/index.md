---
title: "Token metrics"
section: "Cercano"
description: "Inspect reported token use by provider, model, source, and time in Cercano."
---

The **Token Metrics** settings page shows reported token consumption over time,
with breakdowns by provider, model, and source. It distinguishes known counters
from missing usage and surfaces accounting-health warnings so incomplete data is
not silently presented as zero consumption.

<figure class="video-figure"><video controls playsinline preload="metadata" poster="../../assets/videos/metrics.jpg" aria-label="Token metrics in Cercano"><source src="../../assets/videos/metrics.mp4" type="video/mp4" />Your browser does not support embedded video.</video><figcaption>Inspect model and provider usage without leaving the terminal.</figcaption></figure>

## Why it matters

Cost control starts with visibility. Compare which models, providers, and work
sources consume tokens, then use that evidence to refine routing and delegation.
An efficient or local route can be useful, but its name alone does not prove that
it saved money or produced an equivalent result.

## Inspect usage

Open `/config`, select **Token Metrics**, choose a date range, and inspect the
provider, model, and source breakdowns. Read coverage warnings before comparing
workflows.

Use `/c`, or **Context** in settings, for the different question of how much of
the current conversation occupies the active context window. Current context
size is not cumulative billed usage.

## Accounting boundaries

- Metrics are reported usage figures, not billing-grade accounting.
- Unknown or unreported counters are not zero.
- Cache and reasoning categories can be subsets of other totals; do not add them
  indiscriminately to input and output tokens.
- Token counts, provider prices, cost estimates, and estimated savings are
  different quantities. Savings require an explicit comparison baseline.
- External usage reports can overlap internal attempts and should not simply be
  added together.

See [models and routing](../models/) and [delegation](../delegation/).
