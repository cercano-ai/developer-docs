---
title: "Workflows, skills, and integrations"
section: "Extend Cercano"
description: "Use Cercano workflows, skills, agents, and current integration surfaces."
---

Cercano gives the agent repeatable ways to research, delegate, plan, debug,
verify, and make design decisions. Skills and integrations add reusable
knowledge and tools without turning every request into one enormous prompt.

## Built-in workflows

| Workflow | What it brings to the work |
|---|---|
| Research | Search, source gathering, and synthesis for investigating a question. |
| Delegation | Bounded tasks with separate working context and scoped tool access. |
| Planning and execution | Reviewed plans when warranted, explicit approval boundaries, and visible progress. |
| Debugging | Reproduce a failing case, inspect evidence, test a hypothesis, fix, and verify. |
| Design decisions | Compare real alternatives by cost, risk, benefit, and side effects. |
| Verification | Match checks to the change instead of treating plausible output as proof. |

Ask for the outcome in plain language; you do not need to memorize protocol names:

> Research the maintained options for this dependency. Cite the sources and
> compare compatibility and maintenance risks. Do not change the project yet.

> Diagnose this failing test. Reproduce the smallest failing case and show
> evidence for the cause before applying a fix.

> Compare the viable approaches to this migration in a decision matrix. Explain
> the tradeoffs and wait for my choice before implementing it.

Formal planning and autonomous execution have their own approval boundaries.
An ordinary prose outline is not the same thing as entering a formal planning
mode, and a formal plan is not required for every bounded edit.

## Delegated and persistent work

[Delegation and subagents](../cercano/delegation/) explains bounded tasks,
separate contexts, tool grants, and task lifecycle. Persistent hosted agents are
part of the Cercloud organizational experience; persistence of a saved local
conversation is not by itself an always-on hosted worker.

## Skills

A skill packages reusable instructions and domain knowledge so an agent can load
the right process when it needs it. Cercano distinguishes built-in skills from
personal, repository, and Cercloud-managed skills. Their discovery, trust, and
versioning rules are not interchangeable.

[Managed shared skills](../cercloud/shared-skills/) are namespaced, assigned, and
pinned to exact versions by an organization. A managed text skill does not run
scripts, install files, grant tools, or replace the permission policy.

## Editors and compatible contexts

The agent runtime is separate from the terminal interface. Headless commands and
editor integrations can use the same core while presenting different controls.
Feature parity, installation, and lifecycle behavior should be checked for the
specific client rather than inferred from the terminal guide.

## Plugins and integration boundaries

Cercloud's platform scope includes plugins, workflows, shared context, and
specialized capabilities. A stable public plugin distribution contract and a
complete hosted-extension onboarding guide are still documentation gaps. The
presence of integration code in a repository does not establish support across
every client or enterprise-managed deployment.

Return to the [Cercano feature guide](../cercano/features/) or learn how
[Cercano and Cercloud fit together](../getting-started/).
