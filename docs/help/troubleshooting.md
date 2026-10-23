---
title: Fix a problem
description: What to try when Aeven will not start, will not answer, or stops in the middle of a task.
---

# Fix a problem

Most problems fall into a handful of cases. Start with the symptom.

## A message fails immediately

| What you see | What to try |
| --- | --- |
| A sign-in or permission error | Sign out and back in from the account menu |
| A message about credits or a plan limit | Check [Plans and credits](/docs/account/plans-and-credits) |
| A model error naming the provider | Switch model in **Settings → Models**, then send again |
| A message about the network | Check your connection; if you are behind a proxy, set it before retrying |

## A task stops halfway

Read the last line of the conversation: it names what failed. Sending "continue" resumes from where it stopped. If the same step fails twice, the request is usually too broad — split it into two smaller ones.

## A connected app stopped working

Its access was revoked or expired. Open **Settings → Integrations**, link the account again, and retry the task. [Connect an account](/docs/connections/connected-apps).

## A file did not appear where you expected

Check the folder in the folder control — a task writes into the folder it was given. The conversation names every file it writes, so search the conversation for the name.

## A new version will not install

Aeven installs an update when you quit. Quit completely — from the application menu, not just by closing the window — and start it again. If it still reports the same version, **Check for Updates…** in the application menu reports what the updater found.

## Nothing here matches

Send what happened to [help@aeven.io](mailto:help@aeven.io): what you asked for, what you saw, and the time it happened. A screenshot of the conversation is usually enough for us to reproduce it.
