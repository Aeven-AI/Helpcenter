# Deploying the help center

`https://helpcenter.aeven.io` serves a static Docusaurus build. Nothing is running behind it
— nginx reads the files off disk — so a release is a copy, not a restart.

## Where it lives

| | |
| --- | --- |
| Host | `node1.aeven.io` (Oracle, Ubuntu), public IP `51.170.181.97` |
| Checkout | `/datadrive/apps/helpcenter` — a clone of `Aeven-AI/Helpcenter` |
| Served from | `/datadrive/apps/helpcenter/build` |
| nginx vhost | `/etc/nginx/sites-available/helpcenter.aeven.io.conf`, copied from `deploy/nginx/` here |
| Certificate | the `*.aeven.io` Let's Encrypt wildcard, `/etc/ssl/virtualmin/179268677992436/` |
| Key | `~/Projects/Nodejs/Aeven/aeven/keys/oci/aeven_console_pair` |

The IP is an ephemeral Oracle address: if the instance is ever stopped and started it
changes, and this table is the first thing to re-check.

## Releasing

```sh
./scripts/deploy.sh
```

It builds locally, rsyncs `build/` over the old build, and checks that the site answers
200. Override the target with `AEVEN_HOST=…` and the key with `AEVEN_KEY=…`.

The script is the route that works: this Mac reaches `51.170.181.97` on 22, and the box has
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

Then load `/docs/getting-started/why-aeven` and the footer's legal links in a browser —
those are the pages a build breaks first, because `onBrokenLinks: 'throw'` only catches
paths, not a wrong base URL.

## Changing the vhost

Edit `deploy/nginx/helpcenter.aeven.io.conf`, copy it to the box, then:

```sh
sudo nginx -t && sudo systemctl reload nginx
```

`nginx -t` before the reload is not optional: this box also serves `aeven.io` from the
same nginx, and a bad file takes both down.

## Two things not to do

- **Do not delete old files by hand.** `rsync --delete` already keeps the directory exactly
  equal to the build, and hashed bundles under `/assets/` are the only thing a browser
  mid-session still needs.
- **Do not point `helpcenter.aeven.io` at a Node process.** The site is static; adding a
  proxy layer only creates something else to keep alive.
