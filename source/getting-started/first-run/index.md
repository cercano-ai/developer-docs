---
title: "First run"
section: "Getting started"
description: "First run for Cercano and Cercloud."
---

Start with the [installation guide](../install/). Packaged installations and development launchers have different startup paths; these steps cover the packaged terminal client.

## Launch the terminal client

```sh
cercano-cli
```

The client launches the agent when first used. The macOS packages do not install a login service. You do not need to start the agent binary separately for this personal-use path.

## Configure a model source

Cercano ships no models and no credentials. Follow the setup prompts and configure at least one of:

- A cloud provider with the appropriate API credentials or supported subscription sign-in.
- A local model, downloaded on demand. Allow time and disk space for the download.

Provider-specific subscription eligibility and limits apply. See the [models and providers guide](../../cercano/models/). The packaged installation does not bundle a local llama/model runtime.

If your organization manages Cercano, follow [Connect to Cercloud](../connect/) for the pilot requirements and host-owned authentication flow. Organization policy does not establish that provider credentials are distributed to the client.

## Find the controls

Use `/help` for the current command list, `/config` for settings, and `/theme` to select a theme. The [TUI guide](../../cercano/tui/) describes context and subagent views.

## Check command versions

```sh
cercano --version
cercano-cli --version
```

Configuration and conversation history for the packaged client live in `~/.config/cercano/`, outside the Homebrew installation. Enterprise host state has a separate path; see the connection guide rather than moving or deleting either directory.

Sources: [macOS installation](https://github.com/cercano-ai/Cercano/blob/main/docs/installation-macos.md), [terminal UI guide](https://github.com/cercano-ai/Cercano/blob/main/docs/agent/features/advanced-terminal-ui.md).

