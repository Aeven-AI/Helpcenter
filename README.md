# Help center

The help center for people who use Aeven: how to install it, ask for work, approve what it wants to do, and manage an account. It is a Docusaurus site and is deliberately separate from the engineering documentation in the Aeven repository.

## Run it

```sh
pnpm install
pnpm start        # http://127.0.0.1:3050
```

```sh
pnpm build        # production build into build/
pnpm serve        # preview the production build on http://127.0.0.1:3051
pnpm typecheck
```

Node 20 or newer.

## Writing rules

These pages are for readers who do not want to learn how Aeven is built.

- One task per page, starting from the screen the reader is on and ending with something they can see.
- Name controls exactly as the app labels them, in bold, and link to the page that owns the concept.
- No commands, configuration files, API keys, package names, or architecture. When an exact instruction belongs to engineering, link to the Aeven repository instead.
- Two pages may not both own the same fact. Link to the owner.

## Where things live

```
docs/            the pages, grouped by the sidebar order
src/pages/       the home page
src/css/         tokens.css (Aeven's design values) and custom.css (the site's mapping of them)
static/fonts/    the self-hosted Google Sans Flex and Code cuts, with their licences
static/img/      the Aeven mark and the favicon
sidebars.ts      the navigation
docusaurus.config.ts
```

## Look and feel

The site paints with Aeven's own design values, copied from the Aeven client's theme sheets: the neutral ink/surface ramp, 20px capsule controls, 30px surface panels, the Google Sans Flex and Code type ladder, weight 500 for emphasis, and easeOutQuint motion at 0.4s. Panes are separated by fill, never by an outline. They live in `src/css/tokens.css` and are mapped onto Docusaurus in `src/css/custom.css`. Change a token here only when it changes in the Aeven client.

The visual idea is the product's own: a light well, with the page a reader reads set on a white surface.
