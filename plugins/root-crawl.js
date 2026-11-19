/* What a crawler or agent reads at the site root. Docusaurus and docusaurus-plugin-llms write
 * one sitemap and one llms.txt per locale (/en/, /cn/, /es/) and nothing at the root, so this
 * writes a sitemap index and an llms.txt that name all three, and a robots.txt that points at
 * the sitemap and declares the content signals (search, AI answers and training all allowed).
 * Cloudflare's managed robots.txt adds its own rules in front of this file.
 */

const LANGUAGES = ['en', 'cn', 'es']

/** How each locale names itself in the root llms.txt. */
const LANGUAGE_NAMES = {en: 'English', cn: '中文 (Chinese)', es: 'Español (Spanish)'}

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

function llmsIndex(url) {
  const entries = LANGUAGES.map(
    (language) =>
      `- [${LANGUAGE_NAMES[language]}](${url}/${language}/llms.txt): every page, with the full text in [llms-full.txt](${url}/${language}/llms-full.txt)`,
  ).join('\n')
  return `# Æven Help center

> How to use Æven, the AI that works on your computer and in your connected apps. The help center is written in three languages; each has its own index of pages, and every page also has a Markdown copy at its address plus \`.md\`.

${entries}
`
}

function robots(url) {
  return `User-agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Allow: /

Sitemap: ${url}/sitemap.xml
`
}

/** Writes the root sitemap index, llms.txt and robots.txt into the built site. */
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
      await writeFile(join(root, 'llms.txt'), llmsIndex(url), 'utf8')
    },
  }
}
