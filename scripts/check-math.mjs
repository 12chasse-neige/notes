import { readdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { createMarkdownRenderer, resolveConfig } from 'vitepress'

const output = fileURLToPath(new URL('../docs/.vitepress/dist/', import.meta.url))
async function* pages(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) yield* pages(file)
    else if (entry.name.endsWith('.html')) yield file
  }
}

let pageCount = 0
let equationCount = 0
let failedPages = 0
try {
  const config = await resolveConfig(fileURLToPath(new URL('../docs/', import.meta.url)))
  const md = await createMarkdownRenderer(config.srcDir, config.markdown, config.site.base)
  let sourceErrors = 0
  for (const relativePath of config.pages) {
    const source = await readFile(path.join(config.srcDir, relativePath), 'utf8')
    for (const token of md.parse(source, {})) {
      const rawMath = token.children?.some(child =>
        child.type === 'text' && /\$\$[\s\S]*\\[a-zA-Z]+/.test(child.content)
      )
      if (rawMath) {
        sourceErrors++
        console.error(relativePath + ':' + (token.map[0] + 1) + ': Formula remains literal text; move display delimiters onto separate lines.')
      }
    }
  }

  for await (const file of pages(output)) {
    const html = await readFile(file, 'utf8')
    pageCount++
    equationCount += (html.match(/<mjx-container\b/g) ?? []).length
    const errors = new Set([
      ...Array.from(html.matchAll(/data-mjx-error="([^"]+)"/g), match => match[1]),
      ...Array.from(html.matchAll(/<mtext\b[^>]*mathcolor="red"[^>]*>([^<]+)<\/mtext>/g), match => 'Undefined command: ' + match[1])
    ])
    if (errors.size) {
      failedPages++
      console.error(path.relative(output, file) + ': ' + [...errors].join('; '))
    }
  }
  if (!pageCount || !equationCount) throw new Error('No rendered equations found. Run npm run docs:build first.')
  console.log(`Checked ${equationCount} equations across ${pageCount} pages; ${failedPages} pages with math errors; ${sourceErrors} unparsed source formulas.`)
  process.exitCode = failedPages || sourceErrors ? 1 : 0
} catch (error) {
  console.error(error.message)
  process.exitCode = 1
}
