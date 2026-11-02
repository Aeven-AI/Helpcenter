---
title: Skills
description: Procedures Aeven follows the same way every time — what ships, how to import your own, and who can start one.
---

# Skills

A skill is a written procedure: the steps of a job you do often, with the instructions and files it needs. Teach Aeven once and it runs the same way next time, instead of you explaining the format, the order and the exceptions again.

A skill is how to do something. A [bot](/docs/automation/automations) is when it runs on its own. A skill that uses an account needs that account [connected](/docs/connections/connected-apps).

## Where they are

**Settings → Skills** has two views: **Skills**, the ones you have, and **Catalog**, the ones that ship with Aeven. Type `/` in the message box to see what you can start by name.

Built-in skills come with Aeven and are always available. They are deliberately not in your list, because there is nothing to switch off.

## Skills that come with a connector

Most connectors bring their own skills: Gmail's knows how to search and draft mail, Drive's knows Docs, Sheets, Slides and comments, GitHub's knows repositories, issues and pull requests, and the chat connectors know their own tools. They appear inside the connector's details, are switched on with the connector, and cannot be enabled separately — disconnecting the connector removes them. A connector that exposes its tools directly, without bundled procedures, says so on its page.

The catalog also carries skills written for general work. Search it, look at how often one is installed, and switch on the ones you want; a switched-on catalog skill joins your library.

## Importing your own

**Settings → Skills → Import skill** takes:

- a GitHub URL, an npm package, or an `owner/repository` shorthand — Aeven downloads the archive and imports every skill it carries;
- a file: a `SKILL.md`, a `.skill` bundle, or a ZIP with exactly one skill in it.

Only import skills you trust. A skill is instructions Aeven will follow with your tools and your files, which is why the app asks you to confirm what you are bringing in.

After an import, the result tells you what arrived:

| What it says | What happened |
| --- | --- |
| Added | A new skill is in your library |
| Kept built in | Aeven already answers that name with its own or an earlier skill; the import did not replace it |
| Some referenced files were not in the repository | The skill arrived without files it names; it still works with what came |

## Skills installed by another agent

If Claude Code or Codex is installed on this computer, **Settings → Skills** lists the skills it finds there, grouped by agent. Switching one on copies it into your library; switching it off removes your copy and leaves the other agent's folder alone. A skill only appears when switching it on can actually install it.

## Who can start a skill

| Started by | When |
| --- | --- |
| You, typing `/name` | Always, for every skill in your library |
| The model, when it recognises the job | Only while **Model can start this skill** is on for that skill |

An import takes its first value from the skill's own setting, so a skill that asked not to be started automatically stays that way. Turning it off is the right choice for something expensive, or for a procedure you want to lead yourself.

## Looking inside one

Open a skill to see its **Source**, the files in its bundle, and its references. That is the honest answer to "what will this actually do" — read it before you switch on something you found on the internet.

## When a skill needs a program

Some skills depend on software on your computer. The first time you use one, Aeven installs what it needs and shows the progress; if that fails, it says which step failed and offers to try again on the skill's page. The rest of the conversation carries on meanwhile.

## Removing one

**Remove skill** deletes your copy of an imported skill, and the change applies from the next message. Built-in skills cannot be removed, and a connector's skills leave with the connector.

## Related

- [Connectors](/docs/connections/connected-apps)
- [What Aeven asks first](/docs/using/approvals)
- [Bots](/docs/automation/automations)
