# Proposed information architecture

The 22-page site implements the navigation shell, representative product documentation, and the detailed Cercano feature material migrated out of the static marketing site. Nested items below that do not have their own local page are covered by a section in the parent hub and linked to repository evidence, or explicitly marked as a gap. No empty destination or invented setup guide is presented as finished documentation.

- Documentation home — choose one of five tasks.
- Getting started
  - What Cercano and Cercloud are
  - Install Cercano (macOS guide adapted; Linux / Windows source links)
  - First run
  - Connect to Cercloud (current macOS pilot guide)
- Cercano
  - Feature guide
  - TUI (adapted)
  - IDE integrations (source entry; editor-specific migration pending)
  - Persistent agents (availability gap)
  - Models and providers (adapted)
  - Delegation and subagents (adapted, with product demonstration)
  - Skills, agents, plugins, workflows (adapted extension guide)
  - Context and sessions (adapted, with product demonstration)
  - Token metrics (adapted, with product demonstration)
  - Runtime architecture (adapted)
- Cercloud
  - Organization setup / identity and access (curated guide with operator sources)
  - Teams and permissions (curated from implementation status / console)
  - Model policy and routing (adapted)
  - Managed shared skills (adapted)
  - Budgets and cost governance (scope gap, distinct from local usage metrics)
  - Auditability and compliance (current limits and source entries)
  - Deployment and architecture (operator source entries)
- Administration — operator deployment, recovery, live acceptance, ownership
- Configuration and CLI reference — authoritative source links; schema migration pending
- Troubleshooting — package paths / upgrades and managed-host state
- Releases — canonical releases and implementation status
- About this draft — conflicts, scope, ownership

Recommended next content migration: operator-reviewed organization onboarding; versioned configuration and CLI export; editor-by-editor integration instructions; only then documentation for hosted persistence and central budgets after availability is established.
