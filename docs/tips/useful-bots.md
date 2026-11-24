---
title: Bots worth setting up
description: Bots that earn their place — morning briefs, meeting prep, inbox triage, weekly reports, release announcements, watchers, teams of bots — with the request to create each one and how to make any bot more useful.
---

# Bots worth setting up

A bot is a request that runs again on its own. The good ones replace something you do every week anyway, deliver the result where you will see it, and stay quiet when there is nothing to say. Each example below is what you type in the composer on the **Bots** page; Æven asks what it is missing, shows the task, what wakes it, its connectors and permissions, and saves nothing until you confirm. [Bots](/docs/automation/automations)

**Runs on** says where each one lives. Bots that only need the web and your connected accounts run in **Æven Cloud** and keep working while your computer is off. Bots that need your files, your browser or your apps run on **your computer** while Æven is open there.

## Start the day

**Morning brief** — Æven Cloud

> Every weekday at 7:30, brief me on today's meetings, the mail that needs an answer from me, and anything due this week. Keep it under ten lines and send it to me on Telegram.

**Meeting prep** — Æven Cloud

> Thirty minutes before each meeting with an outside guest, look up who is coming, what we last discussed with them by mail, and anything new about their company. Send me five bullets on Slack.

This one wakes on your calendar instead of a clock, so it follows meetings that move.

**Birthdays and dates** — Æven Cloud

> Every Monday at 8, list the birthdays, anniversaries and deadlines coming up in the next two weeks from what you know about the people in my life and work. Skip the message if there are none.

## Keep the inbox in check

**Triage** — Æven Cloud

> Whenever new mail arrives in my work inbox, label newsletters and receipts, star anything from a client, and draft replies to the ones I can answer in two sentences. Never send.

It wakes only when mail arrives, so a quiet day costs nothing.

**Invoices into one sheet** — Æven Cloud

> On the first of every month, find last month's invoices and receipts in Gmail, save the attachments to the Finance folder in Google Drive, and add date, supplier and amount to the Expenses sheet.

## Run the week

**Friday report** — Æven Cloud

> Every Friday at 16:00, collect what we merged and closed in GitHub this week, plus the decisions in #product on Slack, and write a one-page weekly update as a Google Doc. Post the link in #team.

**Team digest** — Æven Cloud

> Every evening at 18:00, summarise the busiest threads in #support and #sales on Slack: what was asked, what is still open, who is waiting on whom. Post it to me as a direct message.

**Monday plan** — Æven Cloud

> Every Monday at 7:00, look at this week's calendar and my open tasks, flag the days that are overbooked, and suggest which meetings could move. Send it to me on Slack.

## Watch for change

**Price or page watcher** — Æven Cloud

> Every morning at 9, check the product page for the Sony WH-1000XM6 at our three usual shops. Tell me on Telegram only if a price drops below €300.

**Competitor news** — Æven Cloud

> Every Wednesday, search for news, launches and pricing changes from our four competitors since last week. Three bullets per competitor, sources linked, emailed to me.

**A portal behind your sign-in** — your computer

> Every Monday, in my own Chrome, open the supplier portal and download any new invoices to the Invoices folder.

This one needs your browser, so it runs on your computer while Æven is open there.

## Look after your files

**Downloads clean-up** — your computer

> Every Sunday evening, sort my Downloads folder: move documents, images and installers into subfolders by type and month, and list anything bigger than 1 GB without deleting it.

**Backup check** — your computer

> Every night at 23:00, check that the Projects folder was copied to the backup drive today and tell me only if it was not.

## Woken by something that happens

**Release announcer** — Æven Cloud

> When a release is published in our app repository on GitHub, write a short announcement from its notes and post it in our Discord #announcements channel and our Telegram channel.

The bot's page then shows the payload URL and secret to add as a webhook in the repository's settings. "When a release is published" matters: without it the bot also wakes for every draft and edit before publication.

**New lead** — Æven Cloud

> When the website form posts a new lead, research the company, check whether we have mailed them before, and post a short profile with a suggested first message in #sales.

A bot with an **inbound trigger** has a private address and a key; anything that posts to it starts a run. Use it for forms, monitoring alerts, or another service that should hand work to Æven.

## A team of bots

**Research, write, review** — Æven Cloud

> Set up a board: a researcher bot that collects this week's news on our market every Thursday, a writer bot that turns it into a newsletter draft in Notion, and a reviewer bot that checks the draft against our style guide and sends it back to the writer if it needs changes. Keep the board under 200,000 tokens a day.

Each bot keeps its own connectors and permissions, hands work only to the bots you connected it to, and the board card shows the latest chain. [Boards](/docs/automation/automations#boards)

## How to make any bot more useful

- **Say what "done" looks like.** "Under ten lines", "one page", "three bullets per competitor" — a bot without a format writes essays.
- **Say where the result goes.** A message to you on Telegram or Slack, a Google Doc, a file in a folder, a channel. A result left only in the run's conversation is easy to miss.
- **Say what to do when there is nothing new.** "Skip the message if there are none" keeps a bot from becoming noise; the run is filed as **Nothing new**, and a string of them folds into one row.
- **Say when to stop.** "Stop once the parcel is delivered" lets a bot pause itself when its job is done.
- **Wake it on the event, not the clock.** "When new mail arrives", "thirty minutes before each meeting" or "when a release is published" runs exactly when there is something to do, instead of checking every hour.
- **Give it only the connectors and permissions it needs.** A bot acts on its own connectors without asking and never asks in the middle of the night, so read them, not only the task. "Never send", "drafts only" and "do not delete" are worth writing into the request.
- **Try it once with Run now** before trusting the schedule, then type any change into **Change this bot…** on the bot's page.
- **Check Runs on.** A bot that needs your files or browser runs only while Æven is open on your computer; keep **Run in the background** on. To move a bot, open it and choose **Choose where it runs**.
- **Start from Ideas.** The **Bots** page has ideas grouped as For your role, Start the day, Plan the week, Stay informed, Work and money and Everyday life, and **Ideas for you** suggests bots from what Æven already knows about you.

## Related

- [Bots](/docs/automation/automations)
- [Put features together](/docs/tips/combine-features)
- [Connectors](/docs/connections/connected-apps)
