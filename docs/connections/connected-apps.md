---
title: Connectors
description: Give Æven access to your mail, calendar, files, repositories, chats, business tools and cloud accounts — one click for most services, a short form or a linked account for the rest.
---

# Connectors

A connector is access to an account you already have: a mailbox, a calendar, a drive, a repository, a team chat, a workspace, a store, a cloud account. Connected, it becomes something Æven can use inside a task — "summarise today's mail", "what is on my calendar tomorrow", "open a pull request for this", "add these notes to the Q3 page in Notion".

**Settings → Connectors** is where they live, under the headings **Communication**, **Productivity**, **Development tools**, **Sales and marketing**, **Commerce and shopping**, **Financial services** and, last, **Custom connectors**. **Search connectors** at the top narrows the list. The page beside it, [Skills](/docs/using/skills), holds the procedures that use them.

## Connecting an account

1. Open **Settings → Connectors**.
2. Choose the service and press **Sign in**.
3. Approve the access it asks for in the window that opens.
4. Back in Æven, the row shows the account it is linked to and is **On**.

One-click sign-in works for:

- **Google** — Gmail, Google Drive, Google Calendar, Google Tasks, Google Contacts, Google Meet, BigQuery, Compute Engine
- **Microsoft** — Microsoft 365, Outlook, Outlook Calendar, OneDrive, SharePoint, Teams
- **Work tools** — Slack, Notion, Calendly, Jira & Confluence (Atlassian), Monday, Stripe
- **Developer tools** — GitHub, Vercel, Cloudflare, AWS, Supabase

**Microsoft 365** is one sign-in for mail, calendar, OneDrive, SharePoint and Teams together. It, SharePoint and Teams need a work or school account: a personal Microsoft account will not link them. If your organisation has to approve Æven first, the row says so and links to the approval page for your administrator.

## Accounts that connect another way

| Service | How it links |
| --- | --- |
| Email accounts | Your address and the server details for receiving (IMAP or POP3) and, optionally, sending (SMTP) — for any mailbox, and the way to let Æven read Gmail |
| Salesforce | Your Salesforce administrator first sets up an app for Æven and turns on Salesforce's MCP server; the row lists exactly what they need. Then enter your org's **My Domain** and the app's **Consumer key**, and choose **Connect an org** |
| Shopify | Enter your store's myshopify.com address and choose **Connect a store**; Shopify then asks you to install the Æven app into that store. **Connect another store** adds the next one |
| Azure DevOps | Enter your organisation's name or its dev.azure.com address under **Organization** and choose **Connect an organization**; Microsoft then asks you to sign in with a work or school account |
| Oracle Cloud | Your OCI administrator first sets up an application for Æven in an Identity Domain; the row lists exactly what they need. Then enter the **MCP server URL**, the **Identity Domain URL**, and the application's **Client ID** and **Client secret**, and choose **Connect a tenancy** |
| WhatsApp | Link a phone number; the row shows the number once it is linked |
| Telegram | Your phone number, the code Telegram sends you, and your two-step password if you set one |
| Discord | Add a server; Æven's bot joins the servers you choose and answers there |
| Slack | Sign in and pick the workspace |

An account can be linked more than once — two mailboxes, two calendars, two stores — and each one is its own row.

## Your own MCP server

**Custom MCP**, under **Custom connectors** at the bottom of the page, connects anything that speaks the Model Context Protocol. Choose **Add server** and give it a name, its address, and — if the server needs one — a token through **Use an access token instead** when there is no sign-in flow to go through. Æven checks the server before it saves it; a server it cannot reach says so, and you can remove it and add it again.

This is also the route to a service with no connector of its own, as long as that service publishes an MCP server.

## What each connector adds

| Connector | Æven can |
| --- | --- |
| Gmail | Send mail and manage labels. To read your mail, add Gmail as an email account too |
| Google Drive | Create and edit Docs, Sheets, Slides and Forms, and manage the files you open with Æven |
| Google Calendar | Check availability and manage events |
| Google Tasks | Read, add and complete tasks in your Google Tasks lists |
| Google Contacts | Search, read and update the people in your Google Contacts |
| Google Meet | Create Meet links and read the records of your meetings |
| BigQuery | Explore datasets and tables and run SQL queries in your Google Cloud projects |
| Compute Engine | Inspect and manage virtual machines, disks and instance groups in your Google Cloud projects |
| Microsoft 365 | Everything the five Microsoft connectors below do, with one sign-in |
| Outlook | Read, search, draft, organise and send mail |
| Outlook Calendar | Manage calendars, events and invitations |
| OneDrive | Find, upload, organise and share files |
| SharePoint | Work with site libraries and lists |
| Teams | Read and send chats and channel messages |
| GitHub | Work with repositories, issues and pull requests |
| Slack | Find messages, files, channels and people; post, schedule and react |
| Notion | Search, read, create and update pages, databases and comments |
| Calendly | See your scheduled meetings and event types, share booking links, and book or cancel meetings |
| Jira & Confluence | Search, read, create and update Jira issues and Confluence pages |
| Monday | Read and update boards, items and updates |
| Vercel | Inspect projects, deployments, build logs and domains |
| Cloudflare | Inspect and manage your Cloudflare accounts, zones, DNS and Workers |
| AWS | Look up AWS documentation and work with the resources in your AWS account |
| Supabase | Query databases, run migrations, and manage projects, edge functions and storage |
| Azure DevOps | Work with repositories, pull requests, work items, pipelines and wikis in your organisation |
| Oracle Cloud | Query your Autonomous AI Database through your tenancy's managed MCP server |
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

For Notion, Calendly, Jira & Confluence, Monday, Vercel, Cloudflare, AWS, Supabase, BigQuery, Compute Engine, Azure DevOps, Oracle Cloud, Stripe, Salesforce and Shopify, Æven goes by what the service itself marks as reading: those calls run on their own, and every other call asks.

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
