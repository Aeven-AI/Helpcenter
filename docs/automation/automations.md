---
title: Bots
description: A task that runs itself — on a schedule, when mail or a meeting comes up, on GitHub activity, or when another bot hands it work — how to create one, what it may do, and how to stop it.
---

# Bots

A bot is a task that runs again on its own: a morning brief, an inbox triage, a meeting prep, a weekly wrap-up, a check on a page you care about. You describe it once, in words; it wakes on a schedule or on something that happens, leaves a conversation with the result, and tells you when it last ran and when it runs next.

## Creating one

Open **Bots** in the sidebar. The page lists your bots, your boards, and **Ideas**; the composer at the bottom reads **Describe a new bot**. Pick an idea — it fills the composer so you can change it before sending — or describe the routine yourself: *"every weekday morning, brief me on today's calendar and the mail that needs me"*.

Æven does the rest as a short conversation: it asks what it is missing (which folder, which account, what time, which timezone), then shows the **task**, what **wakes** it, the **connectors** it may use and the **permissions** it intends to use. Nothing is saved until you confirm, and you can change any of them in that conversation before saying yes.

**Ideas** are working requests you can adapt, grouped as For your role, Start the day, Plan the week, Stay informed, Work and money, and Everyday life. **For your role** has a ready bot for marketing, sales, support, recruiting, finance, a chief of staff, engineering and content creators. **Ideas for you** suggests bots from what Æven already knows about your work and routines; with little memory to go on, it asks a few questions first.

Bots get much more out of connected accounts. Ideas that need mail, calendar or GitHub are marked, and **Connect accounts** takes you straight there. [Connectors](/docs/connections/connected-apps)

## What wakes a bot

A bot can have more than one way to wake up — a weekly schedule and a webhook, say. Its card shows each one.

| Wakes | How it works |
| --- | --- |
| A schedule | At the times you chose; see the table below |
| New email | When mail arrives in an email account you added, optionally only from a sender or about a subject. The first check only notes what is already there |
| A calendar event | A set time before or after each event starts, or at its start. It can be limited to events whose title contains a word, with a given person, with or without an outside guest, or that you accepted. Works with Google Calendar, Outlook Calendar and Microsoft 365 |
| GitHub activity | When a repository sends an event — a new issue, a pull request, a published release. It can be narrowed to some events, some actions and one repository |
| An inbound trigger | When another service posts to the bot's private address with its key |
| Another bot | When a bot you connected it to hands it a task |

A meeting that moves wakes its bot at the new time, and never twice for the same meeting.

### Schedules

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

Any of them can carry an end date, after which the bot stops by itself. A schedule can also start each run up to 30 minutes late — the card then says *starting up to … later* — so several bots due at the same minute do not all start at once.

### While it is running

If a bot is woken while a run is still going, it does one of three things, shown under **While it is running** on its page: the new wake-up is **skipped** (the default), **waits its turn**, or **runs alongside it**. Ask for a different one in the bot's conversation.

## What a run looks like

Each run is an ordinary conversation, collected under **Runs** in the sidebar (**View options → Show runs**). Read it, follow what it did, and reply in it if you want something more — a run is not a dead log.

Files the bot produced stay in the folder it was given. The bot's card shows **Next run** — or **When woken** for a bot with no schedule — and **Last result**, and its **Runs** list keeps each attempt with what it reached:

| State | Meaning |
| --- | --- |
| Queued | Waiting for its turn |
| Running | Working now |
| Finished | Done, with the result in its conversation |
| Nothing new | It looked and found nothing worth reporting |
| Didn't finish | It stopped on an error, or reported that the task could not be done; the run names why |
| Skipped | It did not run — the computer was off, or the schedule no longer applied |
| Stopped | You stopped it |

Runs with nothing new stay out of your way: **Last result** shows the last run that did something, and several in a row fold into one row such as *5 runs with nothing new*. A run that changed a file, or met an action it was not allowed to take, is never filed as nothing new.

A bot can also stop itself when its task says to — *"check the parcel tracking every morning and stop once it is delivered"*. Its card then reads, for example, **Paused by its 08:00 run**, and **Resume** starts it again.

## What a bot may do

Exactly what you confirmed when you created it: which folder it works in, which connectors it may use, and what kind of action it may take.

- **Its connectors.** A bot uses only the accounts it was given. Inside those it acts without asking — confirming the bot approved them — so a bot that posts to Slack posts. Any other account is refused, and the run says so.
- **Everything else.** Work outside those permissions is not done, and the run says what it left out rather than asking you at three in the morning.
- **Saved approvals.** When you allow something for a bot, it is saved on the bot's page under **Saved approvals**, with the date it runs out — 30 days later. After that the bot asks again. **Revoke** takes one back at once.

That is why the confirmation step matters more here than anywhere else — read the connectors and permissions, not only the task.

## Controlling one

On the **Bots** page, each card has **Run now**, **Pause** or **Resume**, and **More** with **Edit** and **Delete**. Select a card to open the bot's own page: its schedule, next run, last result, the whole task, its runs, and an **Advanced** card.

- **Run now** — start it immediately, without waiting for what wakes it. **Stop** ends a run in progress.
- **Pause** and **Resume** — stop future runs and keep everything else.
- **Edit** — opens the bot's page with its composer, which reads **Change this bot…**. Type only the change — *"move it to 7:00 and skip weekends"* — and Æven shows the new version before saving.
- **Delete** — stop it for good. A run in progress finishes, its history is kept, and files it already wrote stay in your folder.

**Overview** and **Runs** at the top switch between your bots and every bot's runs. **Clear runs** empties the finished runs from the list and archives their conversations out of the sidebar. A run still in progress is kept, and clearing cannot be undone.

## Retrying a run that failed

**Retry** runs the same task again. Read the failed run first: it may already have changed something outside Æven, and running the same steps twice can double the effect.

## Starting one from outside

Both live in the bot's **Advanced** card.

**Inbound trigger.** **Create webhook** gives the bot a private address and a key. Anything that can post to that address with the key starts one run, which makes a bot reachable from a form, a monitoring alert or another service. Treat the key like a password: **New key** replaces it and refuses requests still using the old one, and **Remove webhook** refuses every request until you create a new one.

**GitHub.** A bot that wakes on GitHub activity shows a **Payload URL** and a **Secret**. In the repository's settings, add a webhook with that payload URL, content type `application/json`, and that secret. Say which events and actions matter when you create the bot — *"when a release is published"* wakes it once per release, not for every draft edit before it.

## Boards: bots that work together {#boards}

A board groups bots that hand each other work and share one budget — a researcher that hands findings to a writer, a writer that hands a draft to a reviewer.

Choose **New board** under **Boards**. Æven asks which bots belong on it, which bot hands work to which, whether the sender waits for the result, and what the budget is, and shows you the board before saving it.

- **Handing work on.** A bot can hand a task only to a bot you connected it to. When the sender waits, the result comes back to it as a new run. A bot can also wait for several senders — starting once all of them have handed it a task, or as soon as the first one does.
- **Budget.** A board can cap how many of its runs go at once and how many tokens it uses per day. A run that would go over is refused, and the board says which limit stopped it.
- **Latest chain.** The board card shows the most recent chain of handoffs, each as **Waiting**, **Running**, **Done**, **Didn't finish**, **Released** or **Refused**, with the tokens it used. Stopping one run stops the rest of its chain.

**Delete board** removes the board only; its bots keep running on their own.

## Where a bot runs

Each bot shows **Runs on**. A bot that needs nothing from your computer — only the web and your connected accounts — runs in **Æven Cloud**, so it keeps working while your computer is off. A bot that uses your files, your browser or your apps runs on **your computer**, and its page says which of those it needs.

To change it, open the bot and choose **Choose where it runs** in **Advanced**. **Where this bot runs** lists Æven Cloud and each of your computers, with whether it is online and when it was last seen; a place the bot cannot use says what it needs.

## While Æven is closed {#while-aeven-is-closed}

A bot that runs on your computer needs Æven running there. With **Settings → General → Run in the background** on — the default — closing the window does not stop it; quitting does. A computer that is asleep at the scheduled time runs the bot when it wakes, and a schedule that came due while Æven was closed is picked up then rather than lost. If you are signed out, the schedules stay but nothing runs, and the Bots page says so until you sign back in.

## Related

- [Bots worth setting up](/docs/tips/useful-bots)
- [Connectors](/docs/connections/connected-apps)
- [Skills](/docs/using/skills)
- [What Æven asks first](/docs/using/approvals)
- [Your data](/docs/account/your-data)
