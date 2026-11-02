---
title: Work that keeps running
description: The jobs list — long commands, subagents and workflows that run while you carry on, and how to stop one.
---

# Work that keeps running

A task is rarely one step. Aeven runs commands, hands part of the work to a helper agent, and chains steps into a workflow — and none of that has to hold the conversation still. The **Jobs** list shows what is running right now and what has just finished.

## What appears there

| Kind | What it is |
| --- | --- |
| Bash | A command running on your computer |
| PowerShell | The same, on Windows |
| Subagent | A helper agent working on its own part of the task |
| Workflow | Several helpers working through phases together |

Each row is one job. Expand it for the command it runs, its output so far, its progress and, once it ends, its result.

## Watching one

A running job shows how long it has been going. While it runs you can keep asking, open another conversation, or leave it alone — the job reports back into the conversation that started it, which is where its result belongs.

## Stopping one

**Stop job** ends it immediately. A stopped job cannot be resumed; ask for the work again and it starts from the beginning. Aeven asks you to confirm, because a half-finished command can leave things behind.

## When it is done

The list keeps finished jobs with their outcome: **Done**, **Stopped** or **Failed**, how long each took, and when. **Clear** empties the finished section; the conversations they belonged to are untouched.

## Related

- [What Aeven asks first](/docs/using/approvals)
- [Fix a problem](/docs/help/troubleshooting)
