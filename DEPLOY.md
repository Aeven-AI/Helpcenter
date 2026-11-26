# Deploying the help center

`https://helpcenter.aeven.io` serves a static Docusaurus build. Nothing is running behind it
— nginx reads the files off disk — so a release is a copy, not a restart.

## Where it lives

| | |
| --- | --- |
| Host | `pink.aeven.io` (AWS us-west-2, Ubuntu), Elastic IP `34.212.56.101` |
| Checkout | `/datadrive/apps/helpcenter` — a clone of `Aeven-AI/Helpcenter` |
| Served from | `/datadrive/apps/helpcenter/build` |
| nginx vhost | `/etc/nginx/sites-available/helpcenter.aeven.io.conf`, copied from `deploy/nginx/` here |
| Certificate | the `*.aeven.io` Let's Encrypt wildcard, `/etc/ssl/virtualmin/179268677992436/` |
| Key | `~/Projects/Nodejs/Aeven/aeven/keys/oci/aeven_console_pair` |

The script connects by hostname, so a move to another server only needs the `pink.aeven.io` DNS record and the key to follow.

## Releasing

```sh
./scripts/deploy.sh
```

It builds locally, rsyncs `build/` over the old build, and checks that the site answers
200. Override the target with `AEVEN_HOST=…` and the key with `AEVEN_KEY=…`.

The script is the route that works: this Mac reaches `pink.aeven.io` on 22, and the box has
no GitHub credentials of its own, so building locally and copying avoids handing it a token
every release.

If you would rather build on the box, pull with a token the way `servers/node` does:

```sh
cd /datadrive/apps/helpcenter
git fetch "https://x-access-token:<token>@github.com/Aeven-AI/Helpcenter.git" main
git reset --hard FETCH_HEAD
pnpm install --frozen-lockfile
./node_modules/.bin/docusaurus build   # `pnpm build` trips pnpm's ignored-build-scripts check on this box
```

## Checking it landed

```sh
curl -s -o /dev/null -w '%{http_code}\n' https://helpcenter.aeven.io/
curl -s https://helpcenter.aeven.io/ | grep -o '<title>[^<]*</title>'
```

Then load `/en/docs/getting-started/why-aeven` and the footer's legal links in a browser —
those are the pages a build breaks first, because `onBrokenLinks: 'throw'` only catches
paths, not a wrong base URL.

## Changing the vhost

Edit `deploy/nginx/helpcenter.aeven.io.conf`, copy it to the box, then:

```sh
sudo nginx -t && sudo systemctl reload nginx
```

`nginx -t` before the reload is not optional: this box also serves `aeven.io` from the
same nginx, and a bad file takes both down.

## Old addresses

The vhost answers two kinds of old address with a permanent redirect, so search engines move their index instead of collecting 404s:

| Old address | Goes to |
| --- | --- |
| `help.aeven.io/<path>` | `helpcenter.aeven.io/<path>` |
| `helpcenter.aeven.io/docs/…` and `help.aeven.io/docs/…` | `/<language>/docs/…` on `helpcenter.aeven.io` |

`<language>` comes from the request's `Accept-Language` (`zh-*` → `cn`, `es-*` → `es`, otherwise `en`) through the `$helpcenter_language` map at the top of the vhost. `aeven.io.conf` on the same box uses that map for the help center's addresses from when it lived on aeven.io, so keep the map in this file when editing it.

The site URL in `docusaurus.config.ts` must stay `https://helpcenter.aeven.io`: it is written into every canonical link, hreflang alternate and sitemap entry.

## Files for AI agents

The build writes `/llms.txt` (naming the three locales), `/<locale>/llms.txt`, `/<locale>/llms-full.txt` and a Markdown copy of every page at its address plus `.md` (`docusaurus-plugin-llms`, then `scripts/clean-llms.mjs`). The vhost serves `.md` as UTF-8 `text/markdown` with a `Link: rel="canonical"` header naming the HTML page, and a request whose `Accept` header names `text/markdown` gets the Markdown copy of the page it asked for (`Vary: Accept`). Check it with:

```sh
curl -sH 'Accept: text/markdown' https://helpcenter.aeven.io/en/docs/using/memory | head -3
```

## Two things not to do

- **Do not delete old files by hand.** `rsync --delete` already keeps the directory exactly
  equal to the build, and hashed bundles under `/assets/` are the only thing a browser
  mid-session still needs.
- **Do not point `helpcenter.aeven.io` at a Node process.** The site is static; adding a
  proxy layer only creates something else to keep alive.
