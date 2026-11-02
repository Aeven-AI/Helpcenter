---
title: Connectors
description: Give Aeven access to your mail, calendar, files, repositories and chats — one click for the big providers, a token or a linked account for the rest.
---

# Connectors

A connector is access to an account you already have: a mailbox, a calendar, a drive, a repository, a team chat. Connected, it becomes something Aeven can use inside a task — "summarise today's mail", "what is on my calendar tomorrow", "open a pull request for this".

**Settings → Connectors** is where they live. The page beside it, [Skills](/docs/using/skills), holds the procedures that use them.

## Connecting an account

1. Open **Settings → Connectors**.
2. Choose the service and press **Sign in**.
3. Approve the access it asks for in the window that opens.
4. Back in Aeven, the row shows the account it is linked to and is **On**.

One-click sign-in works for Gmail, Google Drive, Google Calendar, Outlook, Outlook Calendar, OneDrive, SharePoint, Teams, GitHub and Slack. SharePoint and Teams are work accounts: a personal Microsoft account will not link them.

## Accounts that connect another way

| Service | How it links |
| --- | --- |
| Email accounts | Your address and the server details for receiving (IMAP or POP3) and, optionally, sending (SMTP) — for a mailbox with no one-click connector |
| WhatsApp | Link a phone number; the row shows the number once it is linked |
| Telegram | Your phone number, the code Telegram sends you, and your two-step password if you set one |
| Discord | Add a server; Aeven's bot joins the servers you choose and answers there |
| Slack | Sign in and pick the workspace |

An account can be linked more than once — two mailboxes, two calendars — and each one is its own row.

## Your own MCP server

**Custom MCP** connects anything that speaks the Model Context Protocol. Give it a name, its address, and — if the server needs one — a token through **Use an access token instead** when there is no sign-in flow to go through. Aeven checks the server before it saves it; a server it cannot reach says so, and you can remove it and add it again.

This is also the route to a service in the catalog that has no one-click sign-in yet.

## The catalog

The **Catalog** lists widely used services Aeven can reach — Canva, Notion, Slack, Figma, Linear, Jira and Confluence, Dropbox, Box, Asana, HubSpot, Salesforce, Stripe. A catalog entry is not a connection: it tells you the service works and how to get it connected, usually through a custom MCP server with a token from that provider. A few carry their own caveats — Figma may need the provider to approve a new client, Linear's preset endpoint is read-only, and Stripe wants an Agent API key.

## What each connector adds

| Connector | Aeven can |
| --- | --- |
| Gmail | Read, search, draft and organise mail, and send it |
| Google Drive | Find and manage files, Docs, Sheets, Slides, Forms and comments |
| Google Calendar | Check availability and manage events |
| Outlook | Read, search, draft, organise and send mail |
| Outlook Calendar | Manage calendars, events and invitations |
| OneDrive | Find, upload, organise and share files |
| SharePoint | Work with site libraries and lists |
| Teams | Read and send chats and channel messages |
| GitHub | Work with repositories, issues and pull requests |
| Slack | Find messages, files, channels and people; post, schedule and react |
| Discord | Read servers and channels; post, reply, react, upload, open threads |
| Telegram | Read, search and send messages, media, polls and group changes |
| WhatsApp | Read, search and send messages, media and group changes |
| Email accounts | Read and search the mail in the accounts you add |
| Custom MCP | Whatever that server's tools do |

## What asks before it acts

Reading an account runs on its own. Anything that changes something — sending, editing, deleting, forwarding, reacting, pinning, muting, scheduling, marking as read, or any group and channel change — asks you first. On Discord every administration and moderation call asks separately, naming exactly what it will change.

Allowing for the task covers that account and that operation, so a batch of similar changes asks once rather than forty times. [What Aeven asks first](/docs/using/approvals)

## When a connector stops working

| What you see | What to do |
| --- | --- |
| Sign-in expired | Turn the connector on again and sign in — the row says what it needs |
| Not reachable | The server is down or the address changed. Remove it and add it again |
| Access revoked at the provider | Link the account again, here or from the provider's own security page |

[Fix a problem](/docs/help/troubleshooting) covers the rest.

## Removing access

Open the connector, choose the account, and disconnect it. Aeven revokes what the provider lets it revoke and keeps no further access; the next task that needs that service has to ask again. Revoking from the provider's security page has the same effect, and the row then shows the account as needing to be linked again.

## What leaves your computer

Connector content is other people's data: message text, file names, member lists and calendars reach the model that answers, the same as a file you attach. The [Privacy Policy](/docs/privacy) says what that means.
