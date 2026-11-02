/* The site's first decision: which language to show. Every page lives under a language
 * segment (/en/, /cn/, /es/), and the root has none, so the root answers with the
 * visitor's own language and falls back to English.
 *
 * Docusaurus builds one directory per locale, so nothing lands at the root; this writes it
 * after the build. The page is a redirect and nothing else: it keeps the stored choice,
 * asks the browser when there is none, and carries a no-JavaScript fallback.
 */

const LANGUAGES = ['en', 'cn', 'es']
const SUBTAGS = {en: 'en', zh: 'cn', es: 'es'}
const DEFAULT = 'en'

function page() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>Aeven Help center</title>
    <link rel="alternate" hreflang="en" href="/en/" />
    <link rel="alternate" hreflang="zh-Hans" href="/cn/" />
    <link rel="alternate" hreflang="es" href="/es/" />
    <link rel="alternate" hreflang="x-default" href="/en/" />
    <meta http-equiv="refresh" content="0; url=/en/" />
    <style>
      html { background: #ffffff; }
      @media (prefers-color-scheme: dark) { html { background: #111111; } }
    </style>
  </head>
  <body>
    <script>
      (function () {
        var languages = ${JSON.stringify(LANGUAGES)}
        var subtags = ${JSON.stringify(SUBTAGS)}
        var stored = null
        try {
          stored = window.localStorage.getItem('aeven:language')
        } catch (error) {
          /* Private mode: the browser's own answer is still good enough. */
        }
        var pick = languages.indexOf(stored) >= 0 ? stored : null
        if (pick === null) {
          var requested =
            navigator.languages && navigator.languages.length
              ? navigator.languages
              : [navigator.language || '']
          for (var index = 0; index < requested.length && pick === null; index += 1) {
            var subtag = String(requested[index]).toLowerCase().split('-')[0]
            pick = subtags[subtag] || null
          }
        }
        window.location.replace('/' + (pick || '${DEFAULT}') + '/' + window.location.search)
      })()
    </script>
  </body>
</html>
`
}

/* The page a host serves for a path the site does not have. A path without a language
 * segment is usually an old address from before the languages had segments — /docs/… rather
 * than /en/docs/… — so it is answered in the visitor's language; a path that does carry one
 * gets the choices, because the page really is missing. */
function notFoundPage() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>Not found — Aeven Help center</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        color: #111111;
        background: #ffffff;
      }
      a { color: inherit; }
      @media (prefers-color-scheme: dark) {
        body { color: #ffffff; background: #111111; }
      }
    </style>
  </head>
  <body>
    <p>This page is not here.</p>
    <p><a href="/en/">English</a> · <a href="/cn/">中文</a> · <a href="/es/">Español</a></p>
    <script>
      (function () {
        var languages = ${JSON.stringify(LANGUAGES)}
        var subtags = ${JSON.stringify(SUBTAGS)}
        var path = window.location.pathname
        for (var index = 0; index < languages.length; index += 1) {
          if (path === '/' + languages[index] || path.indexOf('/' + languages[index] + '/') === 0) {
            return
          }
        }
        var stored = null
        try {
          stored = window.localStorage.getItem('aeven:language')
        } catch (error) {
          /* Private mode: the browser's own answer is still good enough. */
        }
        var pick = languages.indexOf(stored) >= 0 ? stored : null
        if (pick === null) {
          var requested =
            navigator.languages && navigator.languages.length
              ? navigator.languages
              : [navigator.language || '']
          for (var other = 0; other < requested.length && pick === null; other += 1) {
            var subtag = String(requested[other]).toLowerCase().split('-')[0]
            pick = subtags[subtag] || null
          }
        }
        window.location.replace(
          '/' + (pick || '${DEFAULT}') + path + window.location.search,
        )
      })()
    </script>
  </body>
</html>
`
}

/** Writes the root redirect page into the built site. */
module.exports = function rootRedirect() {
  return {
    name: 'aeven-root-redirect',
    /* Docusaurus calls this once per locale, with that locale's own directory, so the
       parent of a locale directory is the site root. With `--locale` the directory is the
       root already. */
    async postBuild({outDir}) {
      const {writeFile} = await import('node:fs/promises')
      const {basename, join, resolve} = await import('node:path')
      const root = LANGUAGES.includes(basename(outDir)) ? resolve(outDir, '..') : outDir
      await writeFile(join(root, 'index.html'), page(), 'utf8')
      await writeFile(join(root, '404.html'), notFoundPage(), 'utf8')
    },
  }
}
