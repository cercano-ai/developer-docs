---
title: "Models and providers"
section: "Cercano"
description: "Models and providers for Cercano and Cercloud."
---

## What it is

Cercano can connect to OpenAI-compatible Chat Completions endpoints using a
configured base URL, credentials, and model. That includes compatible hosted
open-weight services and self-hosted inference servers, not just OpenAI itself.
Profiles connect these endpoints to Cercano's routing system.

### Frontier subscriptions and open models together

Cercano also has provider-specific subscription sign-in paths for ChatGPT and
Claude, separate from API-key access to compatible endpoints. You can use a
frontier provider for the main conversation and route suitable delegated work
to local or hosted open-weight models—or use those models on their own.

Subscription sign-in is not a universal replacement for API credentials. Account
eligibility, usage limits, provider terms, and third-party-client support apply;
availability can change. An implemented sign-in path is not a promise of provider
endorsement or unlimited access. Check the options presented in `/config` → **Cloud** and the
provider-specific controls available in your installed version.

## Why it matters

Choose inference based on capability, price, and where you want work to run—not
on whether your coding agent has a bespoke integration with a particular vendor.
Change providers or try new open-weight models while keeping the same terminal,
sessions, tools, and delegation workflow. Combining frontier and open models
lets you reserve your frontier allowance or API budget for work that benefits
from it instead of using the same inference route for every task.

## Try it

Open `/config` → **Cloud**. Configure a Chat Completions profile with your provider's base URL,
credentials, and a tool-capable model. Assign the profile to the desired cloud
destination in **Routing**, save the settings, and test a small read-only task.
`/cloud` lists profiles; `/cloud use <name>` selects the active profile and
`/cloud key <name> <api-key>` updates a key. It is not the profile editor.

## Route work deliberately

Cercano separates three choices: what kind of task is being performed, how much
model capability it needs, and where it runs. Task classes such as
reconnaissance, investigation, mechanical development, and implementation have
saved quality and destination settings.

Primary, Secondary, and Local are independent destinations. Each cloud
destination has its own model profile and optional backups. Redirects change
initial placement; backups respond to failures. Check the reported final route
instead of inferring destination, privacy, or cost from a task's default.

Open `/config`, select **Routing**, and compare the assignments for
**Reconnaissance** and **Implementation**. Adjust destination and quality
independently, save the changes, then run a delegated read-only task and inspect
its reported route.

## Run local models

Cercano integrates a managed `llama-server` runtime for open-weight models.
Ollama and an optional managed `mistral.rs` sidecar are also supported. Runtime
setup, model selection, and process lifecycle sit inside the agent experience
rather than requiring a separate inference service assembled from scratch.

Open `/config` and inspect **Runtime** and **Local Models**. Choose a supported
runtime and a model appropriate for your hardware, allow any required download
to complete, then assign suitable work to Local in **Routing**.

Local execution still has model downloads, disk, memory, compute, and quality
tradeoffs. It avoids hosted per-token charges for the inference that actually
runs locally; it does not make hardware, electricity, tools, downloads, or
other configured routes free.

## Controls and limitations

- Compatibility is not universal certification. Providers differ in tool
  calling, streaming, context limits, image support, and usage reporting.
- Image input for compatible Chat Completions/Responses models requires
  confirmed model vision capability; a compatible wire format alone is not enough.
- A model that handles plain chat may still be unsuitable for an agent's tool loop.
- Hosted endpoints receive the content routed to them and have their own
  pricing and data policies. An open-weight model does not imply local inference.
- OpenAI Responses and subscription sign-in are distinct provider paths; support
  for Chat Completions does not imply identical behavior across those paths.
- Quality selects a model within a destination. It does not grant tools or
  override placement policy.
- Secondary is a separate destination, not merely Primary's implicit backup.

See [delegation and subagents](../delegation/), [token metrics](../metrics/), and
the [complete feature guide](../features/).

