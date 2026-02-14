import { defineConfig } from 'vitepress'
import markdownItMathjax3 from 'markdown-it-mathjax3'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

// --------------------------------------------------------------------------
// 0. Environment & Path Setup
// --------------------------------------------------------------------------
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DOCS_ROOT = path.resolve(__dirname, '..')

// Debug Log: Check where the script is running
console.log(`[Config] Docs Root: ${DOCS_ROOT}`)

// --------------------------------------------------------------------------
// 1. Natural Sort Logic
// --------------------------------------------------------------------------
function smartSort(textA: string, textB: string): number {
  const chunksA = textA.split(/(\d+)/).filter(Boolean)
  const chunksB = textB.split(/(\d+)/).filter(Boolean)
  const len = Math.min(chunksA.length, chunksB.length)

  for (let i = 0; i < len; i++) {
    const chunkA = chunksA[i]
    const chunkB = chunksB[i]
    const numA = parseInt(chunkA, 10)
    const numB = parseInt(chunkB, 10)

    if (!isNaN(numA) && !isNaN(numB)) {
      if (numA !== numB) return numA - numB
    } else {
      if (chunkA !== chunkB) return chunkA.localeCompare(chunkB)
    }
  }
  return chunksA.length - chunksB.length
}

// --------------------------------------------------------------------------
// 2. Recursive Sidebar Generator
// --------------------------------------------------------------------------
function getRecursiveSidebarItems(dirPath: string, urlPrefix: string) {
  let items: any[] = []

  if (!fs.existsSync(dirPath)) return []

  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  // A. Process Files
  entries
    .filter(e => e.isFile() && e.name.endsWith('.md') && e.name !== 'index.md' && !e.name.startsWith('.'))
    .forEach(e => {
      items.push({
        text: e.name.replace('.md', ''),
        // Fix: Use encodeURI to handle spaces in filenames correctly for links
        link: path.join(urlPrefix, e.name).replace(/\\/g, '/')
      })
    })

  // B. Process Sub-directories
  entries
    .filter(e => e.isDirectory() && !e.name.startsWith('.'))
    .forEach(e => {
      const subDirPath = path.join(dirPath, e.name)
      const subUrlPrefix = path.join(urlPrefix, e.name).replace(/\\/g, '/') + '/'

      const subItems = getRecursiveSidebarItems(subDirPath, subUrlPrefix)

      if (subItems.length > 0) {
        items.push({
          text: e.name,
          items: subItems,
          collapsed: true
        })
      }
    })

  // Sort combined results
  items.sort((a, b) => smartSort(a.text, b.text))
  return items
}

function generateScopedSidebar() {
  const sidebar: Record<string, any[]> = {}

  // [!code focus] AUTO-DISCOVERY: Scan DOCS_ROOT for any top-level folders
  // This fixes case-sensitivity issues on Linux/GitHub Actions
  const topLevelSections = fs.readdirSync(DOCS_ROOT, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.') && dirent.name !== '.vitepress')
    .map(dirent => dirent.name)

  console.log(`[Config] Found Top-level Sections: ${topLevelSections.join(', ')}`)

  topLevelSections.forEach(section => {
    const sectionAbsolutePath = path.join(DOCS_ROOT, section)

    // Get Subjects (e.g. 'Analytical Mechanics')
    const subjects = fs.readdirSync(sectionAbsolutePath).filter(f => {
      return fs.statSync(path.join(sectionAbsolutePath, f)).isDirectory()
    })
    subjects.sort(smartSort)

    const sectionMasterSidebar: any[] = []

    subjects.forEach(subjectName => {
      const subjectPath = path.join(sectionAbsolutePath, subjectName)
      const subjectRouteKey = `/${section}/${subjectName}/`

      const subjectItems = getRecursiveSidebarItems(subjectPath, subjectRouteKey)

      if (subjectItems.length > 0) {
        // 1. Sidebar for inside the Subject
        sidebar[subjectRouteKey] = [
          {
            text: subjectName,
            items: subjectItems,
            collapsed: false
          }
        ]

        // 2. Entry for the Section Master List
        sectionMasterSidebar.push({
          text: subjectName,
          items: subjectItems,
          collapsed: true
        })
      }
    })

    // 3. Register Section Master List
    if (sectionMasterSidebar.length > 0) {
      sidebar[`/${section}/`] = sectionMasterSidebar
    }
  })

  return sidebar
}

// Generate immediately
console.log('--- Generating Sidebar ---')
const mySidebar = generateScopedSidebar()
console.log(`--- Sidebar Generated with ${Object.keys(mySidebar).length} keys ---`)

// --------------------------------------------------------------------------
// 3. Next/Prev Helper
// --------------------------------------------------------------------------
function findFirstLink(items: any[]): { text: string, link: string } | null {
  if (!items || !Array.isArray(items)) return null
  for (const item of items) {
    if (item.link) return { text: item.text, link: item.link }
    if (item.items) {
      const found = findFirstLink(item.items)
      if (found) return found
    }
  }
  return null
}

export default defineConfig({
  base: '/notes/', // IMPORTANT: Matches your repo name
  title: 'Chasse_neige',
  description: 'Notes on Physics, Math, and Programming',

  head: [
    ['link', { rel: 'icon', href: '/notes/favicon.ico' }]
  ],

  transformPageData(pageData) {
    if (pageData.relativePath !== 'index.md' && pageData.relativePath.endsWith('index.md')) {
      const parts = pageData.relativePath.split('/')
      if (parts.length >= 2) {
        const section = parts[0]
        const subject = parts[1]

        let sidebarKey = `/${section}/${subject}/`

        // Fallback check
        if (!mySidebar[sidebarKey]) {
          sidebarKey = `/${section}/`
        }

        const group = mySidebar[sidebarKey]
        if (group) {
          const firstNote = findFirstLink(group)
          if (firstNote) {
            pageData.frontmatter.next = {
              text: firstNote.text,
              link: firstNote.link
            }
            pageData.frontmatter.prev = false
          }
        }
      }
    }
  },

  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Physics', link: '/physics/' },
      { text: 'Math', link: '/maths/' },
      { text: 'Coding', link: '/coding/' },
    ],
    sidebar: mySidebar,
    outline: { level: [2, 6], label: 'On this page' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/12chasse-neige' }],
    search: { provider: 'local' },
    footer: { message: 'Built with VitePress', copyright: 'Copyright © 2026 Chasse_neige' }
  },

  markdown: {
    math: true,
    breaks: false,
    config: (md) => {
      md.use(markdownItMathjax3, {
        tex: {
          processEscapes: true,
          processEnvironments: true,
          macros: {
            ket: ['{\\left| #1 \\right\\rangle}', 1],
            bra: ['{\\left\\langle #1 \\right|}', 1],
            braket: ['{\\left\\langle #1 \\middle| #2 \\right\\rangle}', 2],
            ketbra: ['{\\left| #1 \\right\\rangle \\left\\langle #2 \\right|}', 2],
            expval: ['{\\left\\langle #1 \\right\\rangle}', 1],
            Res: ['{\\mathrm{Res}}'],
            abs: ['{\\left| #1 \\right|}', 1],
            dv: ['{\\frac{d #1}{d #2}}', 2],
            pdv: ['{\\frac{\\partial #1}{\\partial #2}}', 2],
            mqty: ['{\\begin{matrix} #1 \\end{matrix}}', 1],
            pqty: ['{\\begin{pmatrix} #1 \\end{pmatrix}}', 1],
            bqty: ['{\\begin{bmatrix} #1 \\end{bmatrix}}', 1],
            comm: ['{\\left[ #1, #2 \\right]}', 2],
            dd: ['{\\mathrm{d} #1}', 1],
            exist: '{\\exists}',
            tr: '{\\text{tr}}',
            dag: '{\\dagger}',
            real: '{\\Re}',
            imag: '{\\Im}',
            order: ['{\\mathcal{O}\\left(#1\\right)}', 1],
          }
        }
      })
      md.core.ruler.push('patch_math_newlines', (state) => {
        state.tokens.forEach((token) => {
          if (token.type === 'math_block') {
            const content = token.content.trim()
            if (content.includes('\\\\') && !content.includes('\\begin')) {
              token.content = `\\begin{gather}\n${content}\n\\end{gather}`
            }
          }
        })
      })
    }
  }
})