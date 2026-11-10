---
title: Bots worth setting up
description: Bots that earn their place — morning briefs, inbox triage, weekly reports, team digests, watchers — with the request to create each one and how to make any bot more useful.
---

# Bots worth setting up

A bot is a request that runs again on its own. The good ones replace something you do every week anyway, deliver the result where you will see it, and stay quiet when there is nothing to say. Each example below is what you type in **Bots → New**; Aeven asks what it is missing, shows the task, schedule and permissions, and saves nothing until you confirm. [Bots](/docs/automation/automations)

**Runs on** says where each one lives. Bots that only need the web and your connected accounts run in **Aeven Cloud** and keep working while your computer is off. Bots that need your files, your browser or your apps run on **your computer** while Aeven is open there.

## Start the day

**Morning brief** — Aeven Cloud

> Every weekday at 7:30, brief me on today's meetings, the mail that needs an answer from me, and anything due this week. Keep it under ten lines and send it to me on Telegram.

**Birthdays and dates** — Aeven Cloud

> Every Monday at 8, list the birthdays, anniversaries and deadlines coming up in the next two weeks from what you know about the people in my life and work. Skip the message if there are none.

## Keep the inbox in check

**Triage** — Aeven Cloud

> Every two hours on weekdays, go through new mail in my work Gmail. Label newsletters and receipts, star anything from a client, and draft replies to the ones I can answer in two sentences. Never send.

**Invoices into one sheet** — Aeven Cloud

> On the first of every month, find last month's invoices and receipts in Gmail, save the attachments to the Finance folder in Google Drive, and add date, supplier and amount to the Expenses sheet.

## Run the week

**Friday report** — Aeven Cloud

> Every Friday at 16:00, collect what we merged and closed in GitHub this week, plus the decisions in #product on Slack, and write a one-page weekly update as a Google Doc. Post the link in #team.

**Team digest** — Aeven Cloud

> Every evening at 18:00, summarise the busiest threads in #support and #sales on Slack: what was asked, what is still open, who is waiting on whom. Post it to me as a direct message.

**Monday plan** — Aeven Cloud

> Every Monday at 7:00, look at this week's calendar and my open tasks, flag the days that are overbooked, and suggest which meetings could move. Send it to me on Slack.

## Watch for change

**Price or page watcher** — Aeven Cloud

> Every morning at 9, check the product page for the Sony WH-1000XM6 at our three usual shops. Tell me on Telegram only if a price drops below €300.

**Competitor news** — Aeven Cloud

> Every Wednesday, search for news, launches and pricing changes from our four competitors since last week. Three bullets per competitor, sources linked, emailed to me.

**A portal behind your sign-in** — your computer

> Every Monday, in my own Chrome, open the supplier portal and download any new invoices to the Invoices folder.

This one needs your browser, so it runs on your computer while Aeven is open there.

## Look after your files

**Downloads clean-up** — your computer

> Every Sunday evening, sort my Downloads folder: move documents, images and installers into subfolders by type and month, and list anything bigger than 1 GB without deleting it.

**Backup check** — your computer

> Every night at 23:00, check that the Projects folder was copied to the backup drive today and tell me only if it was not.

## Started by something else

A bot with an **inbound trigger** has a private address and a key; anything that posts to it starts a run.

> When the website form posts a new lead, research the company, check whether we have mailed them before, and post a short profile with a suggested first message in #sales.

Use it for forms, monitoring alerts, or another service that should hand work to Aeven.

## How to make any bot more useful

- **Say what "done" looks like.** "Under ten lines", "one page", "three bullets per competitor" — a bot without a format writes essays.
- **Say where the result goes.** A message to you on Telegram or Slack, a Google Doc, a file in a folder, a channel. A result left only in the run's conversation is easy to miss.
- **Say what to do when there is nothing new.** "Skip the message if there are none" keeps a bot from becoming noise.
- **Give it only the permissions it needs.** A bot does exactly what you confirmed and never asks in the middle of the night, so read the permissions, not only the task. "Never send", "drafts only" and "do not delete" are worth writing into the request.
- **Try it once with Run now** before trusting the schedule, and adjust it in a conversation from the bot's page.
- **Check Runs on.** A bot that needs your files or browser runs only while Aeven is open on your computer; keep **Run in the background** on. To keep a cloud-able bot on your own machine anyway, choose **Only run on my computer**.
- **Start from Ideas.** **Bots → New** has ideas grouped as Start the day, Plan the week, Stay informed, Work and money and Everyday life, and **Ideas for you** suggests bots from what Aeven already knows about you.

## Related

- [Bots](/docs/automation/automations)
- [Put features together](/docs/tips/combine-features)
- [Connectors](/docs/connections/connected-apps)
