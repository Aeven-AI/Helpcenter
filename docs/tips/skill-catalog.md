---
title: The skill catalog
description: What is in Settings → Skills → Catalog — the humanizer, reverse engineering, document skills, research, security, motion design and developer workflows — and when each one is worth switching on.
---

# The skill catalog

A skill is a procedure Aeven follows the same way every time. The **Catalog** in **Settings → Skills** holds about a hundred ready-made ones that ship with Aeven. Switch one on and it joins your library; Aeven then uses it when the task calls for it, or you start it yourself by typing `/` and its name. [Skills](/docs/using/skills)

You do not need the catalog for everyday work — Aeven already writes, reads documents, searches and builds without it. A catalog skill adds a specialist's method on top: a checklist, a house style, a set of scripts that do one job very well.

## Writing

| Skill | Use it to |
| --- | --- |
| **humanizer** | Rewrite text that sounds machine-written so it reads like you, without changing what it says. Ask *"humanize this"* on a draft, an email, a post |
| **content-creator** | Write marketing content in a consistent brand voice, with SEO and social formats |
| **marketing-strategy-pmm** | Positioning, launch plans, ideal-customer profiles and competitor analysis |
| **seoagent** | A technical SEO audit, a keyword plan and content briefs for a site |

## Documents

| Skill | Use it to |
| --- | --- |
| **document-processing-docx** | Create and edit Word documents with tracked changes, comments and proper formatting |
| **document-processing-xlsx** | Build and fix spreadsheets with working formulas, formatting and charts |
| **document-processing-pptx** | Make slide decks and edit existing presentations |
| **document-processing-pdf** | Merge, split, fill forms in, extract tables from and create PDFs |
| **markitdown** | Turn almost any file — Office documents, PDFs, images, audio — into clean text |

## Finding out how software works

| Skill | Use it to |
| --- | --- |
| **reverse-engineering** | Work out what an app does from the shipped software itself: desktop and mobile apps, web bundles, firmware, databases, network captures |
| **leanrea** | The same with plain command-line tools only, for a quick look at a binary or an app bundle |

Use these on software you own or are allowed to examine — to check what an app sends, recover a lost file format, or understand a tool with no documentation.

## Motion and animation

| Skill | Use it to |
| --- | --- |
| **motion-design** | Plan a film properly: the brief, the beats, pacing, typography and continuity. Pairs with Aeven's Motion films |
| **huashu-art-motion** | Explain an idea with generative art in one of dozens of illustrated styles |
| **chat-motion-overlay** | Turn a chat transcript or screenshot into an animated chat scene |
| **motion-lab** | Pick one effect from a library of 160 documented web animations and fit it to your page |
| **animate**, **ui-animation**, **emilkowalski-motion** | Add tasteful movement to an interface — easing, springs, micro-interactions |
| **review-animations** | Get a strict review of animation code before it ships |
| **gsap-core**, **oil-motion** | Build web animation with GSAP, or scroll- and pointer-driven motion from video and image sequences |

## Research and science

| Skill | Use it to |
| --- | --- |
| **literature-review** | A systematic review across PubMed, arXiv, bioRxiv and Semantic Scholar |
| **citation-management** | Find, check and format citations |
| **scientific-writing**, **peer-review**, **scientific-critical-thinking** | Write a manuscript, review one, or judge how solid a study is |
| **statistical-analysis**, **scientific-visualization** | Run the right tests and draw publication-quality figures |
| **market-research-reports** | Long-form market reports in a consulting style |
| **research-grants** | Proposals for NSF, NIH, DOE and DARPA |
| **pubmed-database**, **biopython**, **alphafold-database**, **clinical-reports**, **scientific-slides**, **scientific-schematics** | Specialist tools for life-science work |

## Security and compliance

| Skill | Use it to |
| --- | --- |
| **security-threat-model**, **regulatory-threat-model** | Map what could go wrong in a system and what to do about it |
| **security-best-practices**, **api-security-best-practices** | Review code and APIs against known pitfalls |
| **supply-chain-guard** | Check a project's dependencies and build pipeline for known compromised packages |
| **cra-vulnerability-obligations**, **incident-reporting-navigator** | What the EU Cyber Resilience Act asks of your product, and who to notify after an incident, by when |

## Design and building

| Skill | Use it to |
| --- | --- |
| **frontend-design**, **ui-ux-pro-max** | Give a new interface a deliberate look: style, palette, type pairing |
| **figma-implement-design** | Turn a Figma design into matching code |
| **tailwind-patterns**, **tailwind-design-system** | Build with Tailwind and design tokens |
| **nextjs-app-router-patterns**, **web-development-react-best-practices**, **web-performance-optimization**, **fastapi-endpoint** | Web app structure, speed and APIs |
| **stripe-integration**, **plaid-fintech**, **salesforce-development**, **api-integration-specialist**, **mcp-builder** | Connect payments, banking, Salesforce, any API, or build your own MCP server |
| **vercel-deploy**, **github-actions-templates** | Put a site online and automate its builds |
| **systematic-debugging**, **verification-before-completion** | Find the real cause of a bug, and prove a fix before calling it done |

## Planning and operations

| Skill | Use it to |
| --- | --- |
| **abc-xyz-segmentation** | Sort a product range by value and demand variability, with a policy per group |
| **forecast-accuracy-review** | Judge how good a demand forecast really is |
| **safety-stock-review** | Size or audit safety stock |

## Developer workflows

The **aeven-stack** set — about thirty skills whose names start with `avn-` — gives a developer a complete working method: plan a change, write it test-first, review it, open and watch a pull request, ship. Start them by name: `/avn-pr` files a pull request, `/avn-review-loop` runs a fresh reviewer against the change until both agree it is right, and `/avn-ship` takes a change all the way to a merged pull request. `/aeven-stack` says which of them fits the job.

## Tips

- **Switch on only what you will use.** Every skill in your library is one more thing Aeven considers; a short library chooses faster.
- **Start one by name** with `/` when you want that exact method, for example `/humanizer`.
- **Let the model start it** by leaving **Model can start this skill** on, so Aeven picks it up when the task fits.
- **Look inside first.** Each skill's page shows the instructions and files it brings.
- **Bring your own.** Any repository with skills in the same `SKILL.md` layout can be imported. [Skills](/docs/using/skills#importing-your-own)

## Related

- [Skills](/docs/using/skills)
- [Everything Aeven can do](/docs/tips/everything-aeven-can-do)
- [Put features together](/docs/tips/combine-features)
