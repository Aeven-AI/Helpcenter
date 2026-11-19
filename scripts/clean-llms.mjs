/* Strips Docusaurus heading-id suffixes (` {#on-aeven-web}`) from the Markdown copies and
 * llms-full.txt files docusaurus-plugin-llms writes into build/: the ids only matter to the
 * HTML pages, and in Markdown they read as stray text. Runs after `docusaurus build`.
 */
import {readdir, readFile, writeFile} from 'node:fs/promises'
import {join} from 'node:path'

const HEADING_ID = /^(#{1,6} .*?) \{#[^}\s]+\}[ \t]*$/gm

async function* agentFiles(dir) {
  for (const entry of await readdir(dir, {withFileTypes: true})) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) yield* agentFiles(path)
    else if (entry.name.endsWith('.md') || entry.name === 'llms-full.txt') yield path
  }
}

let cleaned = 0
for await (const path of agentFiles(new URL('../build', import.meta.url).pathname)) {
  const text = await readFile(path, 'utf8')
  const next = text.replace(HEADING_ID, '$1')
  if (next !== text) {
    await writeFile(path, next, 'utf8')
    cleaned += 1
  }
}
console.log(`clean-llms: removed heading ids from ${cleaned} files`)
