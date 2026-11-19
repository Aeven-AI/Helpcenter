/* What a crawler reads at the site root. Docusaurus writes one sitemap per locale
 * (/en/sitemap.xml, /cn/sitemap.xml, /es/sitemap.xml) and nothing at the root, so this writes
 * a sitemap index that names all three and a robots.txt that points at it. Cloudflare's
 * managed robots.txt adds its own rules in front of this file.
 */

const LANGUAGES = ['en', 'cn', 'es']

function sitemapIndex(url) {
  const entries = LANGUAGES.map(
    (language) => `  <sitemap><loc>${url}/${language}/sitemap.xml</loc></sitemap>`,
  ).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>
`
}

function robots(url) {
  return `User-agent: *
Allow: /

Sitemap: ${url}/sitemap.xml
`
}

/** Writes the root sitemap index and robots.txt into the built site. */
module.exports = function rootCrawl(context) {
  const url = context.siteConfig.url
  return {
    name: 'aeven-root-crawl',
    /* Called once per locale with that locale's directory; its parent is the site root. */
    async postBuild({outDir}) {
      const {writeFile} = await import('node:fs/promises')
      const {basename, join, resolve} = await import('node:path')
      const root = LANGUAGES.includes(basename(outDir)) ? resolve(outDir, '..') : outDir
      await writeFile(join(root, 'sitemap.xml'), sitemapIndex(url), 'utf8')
      await writeFile(join(root, 'robots.txt'), robots(url), 'utf8')
    },
  }
}
