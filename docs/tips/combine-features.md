---
title: Put features together
description: The real strength of Aeven is chaining — mail into a film into a team chat, a phone screen into a bug report. Ready-to-use requests that combine several features in one go.
---

# Put features together

Each feature on its own saves a few minutes. Chained together they replace an afternoon. You do not need to split the work into steps: describe the whole job in one message, and Aeven reads, makes, checks and delivers in order. It stops to ask before anything goes out in your name.

Every example below is a request you can paste and adapt. The arrows show which features it strings together.

## A film from a client's email, shared with the team

> Read the latest email from Northwind about their spring campaign. Make a 30-second Motion film that presents the three key points, with their logo from the attachment. Then post the MP4 to #marketing in Slack and to our Telegram team group with a two-line summary.

**Mail → attachments → Motion → Slack and Telegram.** Aeven finds the email, takes the logo from it, writes and plays the film in the conversation, renders the MP4, and drafts both posts. You see each post before it is sent. Watch the film first and ask for changes — "shorter", "bigger numbers", "Dutch captions" — before you say go.

## Prepare tomorrow's meetings

> Look at my calendar for tomorrow. For each meeting with someone outside the company, gather the last mail thread with them and what you remember about them, and write a one-page brief per meeting in a Google Doc.

**Calendar → mail → memory → Docs.** Memory is what makes this good: it brings in the context of earlier conversations — who decided what, what they care about, a birthday coming up.

## A bug on a phone, filed with proof

> Open our app in the iPhone simulator, sign up with a test address, and go to Settings. If the avatar upload fails, take screenshots of each step and open a GitHub issue in our app repository with the steps and screenshots.

**Phones and simulators → screenshots → GitHub.** Works the same with an Android emulator.

## Research into a deck

> Research the five biggest competitors of our product: pricing, positioning, latest launches. Put the findings in a spreadsheet with sources, chart the price comparison, and build a ten-slide deck from it. Draft an email to Sam with the deck attached.

**Web search → helpers in parallel → spreadsheet and chart → slides → mail draft.** For a large research job, Aeven splits it over several helpers that work at once; the [jobs list](/docs/using/background-jobs) shows them.

## Through a website only you can open

> In my own Chrome, go to the supplier portal, download every invoice from October, save them in the Invoices folder, and make a spreadsheet with date, number and amount.

**Your browser → files → spreadsheet.** The extension works in your browser with your sign-ins, so Aeven reaches sites that have no connector. It asks before it submits a form or confirms anything.

## A program with no connector

> Open my accounting app, export the profit and loss report for Q3 as PDF, then summarise the three biggest changes against Q2 and draft a message to my accountant on WhatsApp.

**Computer use → PDF reading → analysis → WhatsApp.** Computer use operates any app on your computer by its windows — the route for desktop programs with no connector or website.

## Catch up on a busy group

> Summarise what happened in the family WhatsApp group this week, list anything someone asked me directly, and draft short replies I can send.

**WhatsApp or Telegram → summary → drafts.** Nothing is sent until you approve each reply.

## Write it, then make it sound like you

> Draft a reply to Anna's complaint about the late delivery: apologise, explain the carrier delay, offer free shipping on the next order. Then run it through the humanizer so it reads like me, and save it as a Gmail draft.

**Mail → writing → humanizer skill → draft.** The [humanizer](/docs/tips/skill-catalog) strips the tells that make text sound machine-written without changing what it says.

## Find out how something works

> This folder has an Electron app I installed. Work out what it sends to its servers and where it stores my data. Write it up as a short report.

**Files → reverse-engineering skill → report.** The reverse-engineering skills read shipped software itself — app bundles, binaries, databases, network captures — when there is no source code to read.

## Make it run on its own

Any of the requests above can become a bot: when a run went well, say *"make this a bot that runs every Monday at 8"*. Aeven turns the conversation into a scheduled task, shows you what it will do and which accounts it may use, and waits for your yes. [Bots worth setting up](/docs/tips/useful-bots)

## Tips that make chains work

- **Say where the result goes.** "Save it in the Reports folder", "post it in #team", "as a Google Doc" — otherwise the result stays in the conversation.
- **Name the accounts when you have several.** "From my work Gmail", "in the Acme Slack".
- **Ask for a check step.** "Show me the film before posting" or "list the invoices before you build the sheet" puts a pause exactly where you want it.
- **Correct as you go.** A chain is still a conversation: change one link — "use the second logo", "skip Telegram" — and Aeven redoes only what depends on it.
- **Keep what worked.** "Remember that Northwind wants Dutch captions" saves it for next time, and Aeven learns procedures that went well on its own.

## Related

- [Everything Aeven can do](/docs/tips/everything-aeven-can-do)
- [Connectors](/docs/connections/connected-apps)
- [What Aeven asks first](/docs/using/approvals)
