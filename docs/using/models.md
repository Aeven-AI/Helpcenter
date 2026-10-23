---
title: Choose a model
description: Pick which AI model answers, what the difference means in practice, and what to do when one is unavailable.
---

# Choose a model

Aeven is not tied to one AI model. A model is the engine that reads your request and writes the answer; Aeven decides how to compose itself around it, and you decide which one answers.

## Start with the Aeven models

The Aeven models are included with the app and need no setup: they answer as soon as you are signed in, and your plan's credits pay for what you use. They are the recommended default — they are tuned for how Aeven works, with its tools, approvals and long conversations, so a task that uses several steps and a few files behaves the way the rest of these pages describe.

If a model is all you want from Aeven, you never have to open this page's next section.

## Where the choice lives

The model is set in the message box, not in a settings screen — it belongs to what you are about to ask. The control shows the model answering right now:

![The model control in the composer, open: Model and Effort](/img/app/model-menu.png)

*Model, and how hard it should think.*

- **Model** picks who answers. The change applies to your next message; a conversation you already started keeps its model until you change it there.
- **Effort** is how much reasoning the model spends before it answers. Higher is slower and better on hard questions; lower is faster for small ones.

**Settings → Models** is where a model is connected rather than chosen: your own key, an endpoint, or a local address, as below.

The name of the model answering is visible in the conversation, so you can tell which one produced a result you liked.

## Your own provider

Your own key is a first-class way to run Aeven, not a workaround. If your account is set up with your own API key, an OpenAI-compatible endpoint, or a model you subscribe to elsewhere, **Settings → Models** takes the key or the address and the model name. Saving is enough; no restart is needed.

Running a model on your own machine counts as your own provider too: point Aeven at its local address and it answers from there. The conversations, memory and connections stay where they were — they belong to Aeven, not to the model.

## When a model is unavailable

A message that fails usually reports why: a key that expired, a plan limit reached, or a service outage. [Fix a problem](/docs/help/troubleshooting) lists the common cases and what to do.

## Related

- [Plans and credits](/docs/account/plans-and-credits)
- [What Aeven remembers](/docs/using/memory)
