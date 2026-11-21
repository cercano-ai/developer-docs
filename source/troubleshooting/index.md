---
title: "Troubleshooting"
section: "Support"
description: "Troubleshooting for Cercano and Cercloud."
---

## The wrong binary runs after an upgrade

```sh
which -a cercano cercano-cli
cercano --version
cercano-cli --version
```

A development launcher earlier on your PATH takes precedence over Homebrew. Package installation and activation of a running agent are separate. Save your work and arrange a controlled restart. The split Homebrew formulas have no post-install restart hooks.

An older monolithic installation may conflict with split component links. Do not force overwrites or remove user data to bypass migration conflicts. Consult the [installation guide](../getting-started/install/).

## A managed host is connected but blocked

Use the [connection guide](../getting-started/connect/) to inspect `enterprise status` and request `enterprise sync` on the running host. Saved credentials do not imply a usable verified policy. Cached policies expire; a restart requires fresh online verification. Older hosts may require an update.

Logging out leaves the host managed and blocked. Returning to personal settings requires the separate explicit `enterprise standalone` action, with its documented preconditions.

## Models or assigned skills are missing

Check the host’s allowed routes and pinned skill assignments using the commands in the connection guide. Inspection requires a usable managed bundle. Personal and repository skill directory discovery is not implied by the managed catalog.

## Escalation

Record versions and the bounded status/synchronization code. Do not paste credentials into a report. A production support destination and diagnostic collection policy still need an owner before public launch.

