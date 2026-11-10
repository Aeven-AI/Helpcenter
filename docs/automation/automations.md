---
title: Bots
description: A task that runs itself on a schedule — how to create one, when it runs, what it may do, and how to stop it.
---

# Bots

A bot is a task that runs again on its own: a morning brief, an inbox triage, a weekly wrap-up, a check on a page you care about. You describe it once, in words; it runs on schedule, leaves a conversation with the result, and tells you when it last ran and when it runs next.

## Creating one

Open **Bots** in the sidebar and choose **New**. Then either pick an idea, or describe the routine in the composer — *"every weekday morning, brief me on today's calendar and the mail that needs me"*.

Aeven does the rest as a short conversation: it asks what it is missing (which folder, which account, what time, which timezone), then shows the **task**, the **schedule** and the **permissions** it intends to use. Nothing is saved until you confirm, and you can change any of the three in that conversation before saying yes.

**Ideas** are working requests you can adapt, grouped as Start the day, Plan the week, Stay informed, Work and money, and Everyday life. **Ideas for you** suggests bots from what Aeven already knows about your work and routines; with little memory to go on, it asks a few questions first.

Bots get much more out of connected accounts. Ideas that need mail, calendar or GitHub are marked, and **Connect accounts** takes you straight there. [Connectors](/docs/connections/connected-apps)

## When it runs

| Schedule you can choose | Runs |
| --- | --- |
| Daily at a time | Every day at that time |
| Weekdays at a time | Monday to Friday |
| Every named weekday | Once a week |
| Once, on a date | A single run |
| Every so many minutes | At that interval |
| Every so many hours, at a given minute past | Aligned to the clock |
| On chosen days of the month | Those dates |
| On the first, second, third or fourth named weekday of the month | That weekday each month |
| Every year on a date | Once a year |
| A custom schedule | A cron expression you write |

Any of them can carry an end date, after which the bot stops by itself.

## What a run looks like

Each run is an ordinary conversation, opened for you in the sidebar. Read it, follow what it did, and reply in it if you want something more — a run is not a dead log.

Files the bot produced stay in the folder it was given. The bot's own row shows **Next run** and **Last result**, and its **Runs** list keeps each attempt with what it reached:

| State | Meaning |
| --- | --- |
| Queued | Waiting for its turn |
| Running | Working now |
| Finished | Done, with the result in its conversation |
| Didn't finish | It stopped on an error; the conversation names why |
| Skipped | It did not run — the computer was off, or the schedule no longer applied |
| Stopped | You stopped it |

## What a bot may do

Exactly what you confirmed when you created it: which folder it works in, which accounts it may use, and what kind of action it may take. Work outside those permissions is not done, and the run says what it left out rather than asking you at three in the morning. That is why the confirmation step matters more here than anywhere else — read the permissions, not only the task.

## Controlling one

Open a bot to:

- **Run now** — start it immediately, without waiting for the schedule.
- **Pause** and **Resume** — stop future runs and keep everything else.
- **Adjust** — change the task, the schedule or the permissions, again as a conversation that shows you the change before saving.
- **Delete** — stop it for good. A run in progress finishes, its history is kept, and files it already wrote stay in your folder.

**Clear runs** empties the finished runs from the list and archives their conversations out of the sidebar. A run still in progress is kept, and clearing cannot be undone.

## Retrying a run that failed

**Retry** runs the same task again. Read the failed run first: it may already have changed something outside Aeven, and running the same steps twice can double the effect.

## Starting one from outside

A bot can carry an **inbound trigger** — a private address and a key. Anything that can post to that address with the key starts one run, which makes a bot reachable from a form, a monitoring alert or another service. Treat the key like a password: **New key** replaces it and refuses requests still using the old one, and removing the trigger refuses every request until you create a new one.

## Where a bot runs

Each bot card shows **Runs on**. A bot that needs nothing from your computer — only the web and your connected accounts — runs in **Aeven Cloud**, so it keeps working while your computer is off. A bot that uses your files, your browser or your apps runs on **your computer**, and the card says which of those it needs. To keep a bot that could run in the cloud on your own machine, open it and choose **Only run on my computer**; **Allow Aeven Cloud** undoes that.

## While Aeven is closed

A bot that runs on your computer needs Aeven running there. With **Settings → General → Run in the background** on — the default — closing the window does not stop it; quitting does. A computer that is asleep at the scheduled time runs the bot when it wakes, and a schedule that came due while Aeven was closed is picked up then rather than lost. If you are signed out, the schedules stay but nothing runs, and the Bots page says so until you sign back in.

## Related

- [Bots worth setting up](/docs/tips/useful-bots)
- [Connectors](/docs/connections/connected-apps)
- [Skills](/docs/using/skills)
- [What Aeven asks first](/docs/using/approvals)
- [Your data](/docs/account/your-data)
