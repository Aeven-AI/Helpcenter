---
title: Your data
description: Where your files, conversations, and connected accounts live, and how to remove them.
---

# Your data

Aeven works with your own files, in your own folders, on your own computer. This page says what is stored where.

## On your computer

- **Your files** stay where they are. Aeven reads and writes them in the folder you chose; it does not copy your folders elsewhere.
- **Conversations and settings** are kept in Aeven's own data folder on your computer, so earlier conversations are there when you reopen the app. A copy also syncs to your account, so they appear on your other devices.
- **Sign-in state** is kept on that computer, so you do not sign in again every launch.

## On your other devices

Sign in to the same account on a second computer and it shows the same memory, conversations, settings, and personalisation. Each change is encrypted on the device where it happens and sent to your account; the other devices pick it up, usually within a second while both are online.

A conversation keeps running on the device where Aeven last answered it, because the files it made and the jobs it started are there. With the desktop app open, a conversation you type at [chat.aeven.io](https://chat.aeven.io) runs on your computer; with no desktop on, Aeven answers on its servers, which appear as **Aeven Cloud**. **Options → Choose desktop** picks the desktop a conversation runs on. Files already made stay on the device that made them. [Your desktop from Aeven Web](/docs/using/desktop-from-web)

**Settings → Sync** lists the devices on your account, shows whether this one is up to date, and has **Sync this device**, which stops one computer from syncing without deleting what it already holds. **Remove** clears a device from that list; a computer that is still signed in and syncing adds itself again the next time it syncs.

The synced copy is stored encrypted on Aeven's servers, and Aeven holds the key that opens it. Aeven does not read your memory: access is limited to the people who run the service, and is logged. End-to-end protection, where the key stays on your own devices and only you can open what is synced, is being rolled out.

## On Aeven's servers

Your account, plan, and credit balance live with your Aeven account. The copy of your memory, conversations, settings, and personalisation that moves between your devices is stored there too, so a device that was offline can catch up. Connected services are reached through tokens issued by the provider when you sign in; those tokens are what make a connection work until you remove it.

A task's content is sent to the model that answers it in order to produce the answer. [Choose a model](/docs/using/models) says which model answers.

## Removing things

| To remove | Do this |
| --- | --- |
| A conversation | Delete it from the sidebar |
| A shared link | **Share → Manage** under any answer, then the bin beside the link — [Share a response](/docs/using/share-a-response) |
| A memory | Remove it in **Settings → Memory** |
| A connection | Remove it in **Settings → Connectors**, or revoke it at the provider |
| A skill you imported | **Remove skill** in **Settings → Skills** |
| Your account and its data | Use the account page's delete option, or contact us from [aeven.io](https://aeven.io) |

Deleting a bot stops future runs; files it already produced stay in your folder until you delete them.

## Related

- [What Aeven remembers](/docs/using/memory)
- [Connectors](/docs/connections/connected-apps)
- [Skills](/docs/using/skills)
