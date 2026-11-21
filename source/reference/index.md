---
title: "Configuration and CLI reference"
section: "Reference"
description: "Configuration and CLI reference for Cercano and Cercloud."
---

This first draft links to authoritative reference material instead of presenting an incomplete command or configuration schema as exhaustive.

## Configuration

- [Agent setup and commands](https://github.com/cercano-ai/Cercano/blob/main/docs/agent/README.md).
- [Cloud routing, profiles, and accounts](https://github.com/cercano-ai/Cercano/blob/main/docs/cloud-routing.md).
- [Managed routing](https://github.com/cercano-ai/Cercano/blob/main/docs/enterprise-managed-routing.md).
- [Policy configuration and publication](../cercloud/model-policy/).

Packaged configuration and conversations use `~/.config/cercano/`. Managed host state includes `~/.cercano/enterprise/`; these are different scopes. Use their respective guides rather than treating the paths as interchangeable.

## CLI lookup

```sh
cercano --version
cercano-cli --version
```

Inside the terminal client, `/help` shows the current keymap and commands. See the [TUI guide](../cercano/tui/) for common controls and the [enterprise connection guide](../getting-started/connect/) for host-owned commands, preconditions, and source-build examples.

## Reference gaps

A versioned CLI command export, complete configuration key schema, environment-variable catalog, and stable public extension API require a dedicated validation pass before being reproduced here.

