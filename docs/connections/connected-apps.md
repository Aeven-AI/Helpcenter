---
title: Connectors
description: Give Æven access to your mail, calendar, files, repositories, chats and business tools — one click for most services, a short form or a linked account for the rest.
---

# Connectors

A connector is access to an account you already have: a mailbox, a calendar, a drive, a repository, a team chat, a workspace, a store. Connected, it becomes something Æven can use inside a task — "summarise today's mail", "what is on my calendar tomorrow", "open a pull request for this", "add these notes to the Q3 page in Notion".

**Settings → Connectors** is where they live. The page beside it, [Skills](/docs/using/skills), holds the procedures that use them.

## Connecting an account

1. Open **Settings → Connectors**.
2. Choose the service and press **Sign in**.
3. Approve the access it asks for in the window that opens.
4. Back in Æven, the row shows the account it is linked to and is **On**.

One-click sign-in works for:

- **Google** — Gmail, Google Drive, Google Calendar
- **Microsoft** — Microsoft 365, Outlook, Outlook Calendar, OneDrive, SharePoint, Teams
- **Work tools** — GitHub, Slack, Notion, Vercel, Jira & Confluence (Atlassian), monday.com, Stripe

**Microsoft 365** is one sign-in for mail, calendar, OneDrive, SharePoint and Teams together. It, SharePoint and Teams need a work or school account: a personal Microsoft account will not link them. If your organisation has to approve Æven first, the row says so and links to the approval page for your administrator.

## Accounts that connect another way

| Service | How it links |
| --- | --- |
| Email accounts | Your address and the server details for receiving (IMAP or POP3) and, optionally, sending (SMTP) — for any mailbox, and the way to let Æven read Gmail |
| Salesforce | Your Salesforce administrator first sets up an app for Æven and turns on Salesforce's MCP server; the row lists exactly what they need. Then enter your org's **My Domain** and the app's **Consumer key**, and choose **Connect an org** |
| Shopify | Enter your store's myshopify.com address and choose **Connect a store**; Shopify then asks you to install the Æven app into that store. **Connect another store** adds the next one |
| WhatsApp | Link a phone number; the row shows the number once it is linked |
| Telegram | Your phone number, the code Telegram sends you, and your two-step password if you set one |
| Discord | Add a server; Æven's bot joins the servers you choose and answers there |
| Slack | Sign in and pick the workspace |

An account can be linked more than once — two mailboxes, two calendars, two stores — and each one is its own row.

## Your own MCP server

**Custom MCP** connects anything that speaks the Model Context Protocol. Give it a name, its address, and — if the server needs one — a token through **Use an access token instead** when there is no sign-in flow to go through. Æven checks the server before it saves it; a server it cannot reach says so, and you can remove it and add it again.

This is also the route to a service with no connector of its own, as long as that service publishes an MCP server.

## What each connector adds

| Connector | Æven can |
| --- | --- |
| Gmail | Send mail and manage labels. To read your mail, add Gmail as an email account too |
| Google Drive | Create and edit Docs, Sheets, Slides and Forms, and manage the files you open with Æven |
| Google Calendar | Check availability and manage events |
| Microsoft 365 | Everything the five Microsoft connectors below do, with one sign-in |
| Outlook | Read, search, draft, organise and send mail |
| Outlook Calendar | Manage calendars, events and invitations |
| OneDrive | Find, upload, organise and share files |
| SharePoint | Work with site libraries and lists |
| Teams | Read and send chats and channel messages |
| GitHub | Work with repositories, issues and pull requests |
| Slack | Find messages, files, channels and people; post, schedule and react |
| Notion | Search, read, create and update pages, databases and comments |
| Vercel | Inspect projects, deployments, build logs and domains |
| Jira & Confluence | Search, read, create and update Jira issues and Confluence pages |
| monday.com | Read and update boards, items and updates |
| Stripe | Look up customers, payments, invoices and subscriptions, and create or change them |
| Salesforce | Search, read, create and update records in your org |
| Shopify | Manage products, inventory, orders, customers and discounts |
| Discord | Read servers and channels; post, reply, react, upload, open threads |
| Telegram | Read, search and send messages, media, polls and group changes |
| WhatsApp | Read, search and send messages, media and group changes |
| Email accounts | Read, search, organise and send the mail in the accounts you add |
| Custom MCP | Whatever that server's tools do |

Connected accounts are also what [bots](/docs/automation/automations) use, and some can wake one: new mail in an email account, a calendar event in Google Calendar, Outlook Calendar or Microsoft 365, or activity on GitHub.

## What asks before it acts

Reading an account runs on its own. Anything that changes something — sending, editing, deleting, forwarding, reacting, pinning, muting, scheduling, marking as read, or any group and channel change — asks you first. On Discord every administration and moderation call asks separately, naming exactly what it will change.

For Notion, Vercel, Jira & Confluence, monday.com, Stripe, Salesforce and Shopify, Æven goes by what the service itself marks as reading: those calls run on their own, and every other call asks.

Allowing for the task covers that account and that operation, so a batch of similar changes asks once rather than forty times. A bot's own connectors are the exception: confirming the bot approved them, so its runs act on them without asking. [What Æven asks first](/docs/using/approvals)

## When a connector stops working

| What you see | What to do |
| --- | --- |
| Sign-in expired | Turn the connector on again and sign in — the row says what it needs |
| Not reachable | The server is down or the address changed. Remove it and add it again |
| Access revoked at the provider | Link the account again, here or from the provider's own security page |
| Administrator approval | Your organisation has to approve Æven before you can connect. After approval, sign in again |

[Fix a problem](/docs/help/troubleshooting) covers the rest.

## Removing access

Open the connector, choose the account, and disconnect it. Æven revokes what the provider lets it revoke and keeps no further access; the next task that needs that service has to ask again. Revoking from the provider's security page has the same effect, and the row then shows the account as needing to be linked again.

## What leaves your computer

Connector content is other people's data: message text, file names, member lists, records and calendars reach the model that answers, the same as a file you attach. The [Privacy Policy](/docs/privacy) says what that means.
