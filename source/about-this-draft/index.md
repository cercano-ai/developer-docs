---
title: "Scope and open questions"
section: "Documentation draft"
description: "Scope and open questions for Cercano and Cercloud."
---

This local draft combines existing technical guides with a proposed shared navigation. It is a documentation review artifact, not a production service or a release announcement.

## What is ready to review

The documentation shell, responsive navigation, full-text page search, local syntax highlighting, persistent Day/Night control, product overview, installation, first run, enterprise connection, TUI, providers, managed policy, and shared skills.

Other sections are source-backed entry points. Their links lead to current repository guides while full migration remains pending.

## Conflicts in the sources

- Cercloud’s product narrative includes central gateway, identity, cost, and trust capabilities beyond the pilot implementation. The current default keeps enforcement on the Cercano host; a central proxy is roadmap scope.
- Older membership and administration prose says the screen is forthcoming. The console demo and implementation status say it exists and has been tested with disposable data.
- Cercano’s enterprise status guide still says changes await merge; the enterprise repository records the merged client chain. Public release and live acceptance must still be confirmed separately.
- The platform narrative suggests centrally provisioned provider keys; native connection instructions keep provider credentials in their existing store. Credential distribution needs an explicit supported contract.
- Installation instructions now use split Homebrew packages. Old single-formula instructions and restart assumptions should not be carried forward.

## Missing public contracts

Hosted persistent-agent onboarding; editor-specific installation and parity; central budget enforcement; SAML/SCIM/LDAP setup; public plugin distribution; complete versioned configuration and CLI schemas; production service origin; support owner; live pilot acceptance; compatibility and release policy.

## Source ownership

Cercano owns runtime and client behavior. The enterprise implementation repository owns current control-plane operations. The Cercloud product repository describes platform direction. Owners should reconcile those layers before publishing.

The local repository’s `review/` folder contains the full source-to-page inventory, source revisions and file hashes, asset provenance, and publication notes.

