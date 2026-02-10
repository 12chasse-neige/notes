import { defineConfig } from 'vitepress'
import markdownItMathjax3 from 'markdown-it-mathjax3'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

// --------------------------------------------------------------------------
// 0. Fix Path Resolution for .mts (ESM)
// --------------------------------------------------------------------------
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DOCS_ROOT = path.resolve(__dirname, '..')

// --------------------------------------------------------------------------
// 1. Natural Sort Logic (Fixes 1, 10, 2 sorting)
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
// This function recursively scans a directory and builds the sidebar items tree
function getRecursiveSidebarItems(dirPath: string, urlPrefix: string) {
  let items: any[] = []

  if (!fs.existsSync(dirPath)) return []

  // Read all entries (files and folders)
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  // A. Process Files (.md)
  entries
    .filter(e => e.isFile() && e.name.endsWith('.md') && e.name !== 'index.md' && !e.name.startsWith('.'))
    .forEach(e => {
      items.push({
        text: e.name.replace('.md', ''),
        link: path.join(urlPrefix, e.name).replace(/\\/g, '/')
      })
    })

  // B. Process Sub-directories (Nested Folders)
  entries
    .filter(e => e.isDirectory() && !e.name.startsWith('.'))
    .forEach(e => {
      const subDirPath = path.join(dirPath, e.name)
      // Force forward slash for URL construction
      const subUrlPrefix = path.join(urlPrefix, e.name).replace(/\\/g, '/') + '/'

      // Recursively get items inside this sub-folder
      const subItems = getRecursiveSidebarItems(subDirPath, subUrlPrefix)

      // Only add the folder group if it contains valid items
      if (subItems.length > 0) {
        items.push({
          text: e.name,
          items: subItems,
          collapsed: true // Default nested folders to collapsed
        })
      }
    })

  // C. Sort files and folders together naturally
  items.sort((a, b) => smartSort(a.text, b.text))

  return items
}

function generateScopedSidebar() {
  const sidebar: Record<string, any[]> = {}
  const topLevelSections = ['physics', 'maths', 'coding']

  topLevelSections.forEach(section => {
    const sectionAbsolutePath = path.join(DOCS_ROOT, section)

    if (fs.existsSync(sectionAbsolutePath)) {
      // 1. Get Top-Level Subjects (e.g. 'Analytical Mechanics', 'General Relativity')
      const subjects = fs.readdirSync(sectionAbsolutePath).filter(f => {
        return fs.statSync(path.join(sectionAbsolutePath, f)).isDirectory()
      })

      // Sort subjects (Chapter 1, Chapter 2...)
      subjects.sort(smartSort)

      // This array will hold the config for the Section Home (e.g. /physics/index.md)
      const sectionMasterSidebar: any[] = []

      subjects.forEach(subjectName => {
        const subjectPath = path.join(sectionAbsolutePath, subjectName)
        const subjectRouteKey = `/${section}/${subjectName}/` // e.g. /physics/General Relativity/

        // 2. Build the FULL tree for this Subject (Recursive)
        const subjectItems = getRecursiveSidebarItems(subjectPath, subjectRouteKey)

        if (subjectItems.length > 0) {
          // A. Define the Sidebar for when user is INSIDE this subject
          // This allows navigation of nested folders like 'Gravitational Waves'
          // while staying inside 'General Relativity' context.
          sidebar[subjectRouteKey] = [
            {
              text: subjectName,
              items: subjectItems,
              collapsed: false // Expand the root of the subject
            }
          ]

          // B. Add to the Master Sidebar (for /physics/ root)
          sectionMasterSidebar.push({
            text: subjectName,
            items: subjectItems,
            collapsed: true // Collapse in the main list
          })
        }
      })

      // 3. Register the Master Sidebar for the section root
      if (sectionMasterSidebar.length > 0) {
        sidebar[`/${section}/`] = sectionMasterSidebar
      }
    }
  })

  return sidebar
}

const mySidebar = generateScopedSidebar()

// --------------------------------------------------------------------------
// 3. Next/Prev Button Helper (Recursive search)
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
  base: '/notes/',
  title: 'Chasse_neige',
  description: 'Notes on Physics, Math, and Programming',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  transformPageData(pageData) {
    if (pageData.relativePath !== 'index.md' && pageData.relativePath.endsWith('index.md')) {
      const parts = pageData.relativePath.split('/')
      if (parts.length >= 2) {
        const section = parts[0]
        const subject = parts[1]

        // Try to match the subject sidebar first
        let sidebarKey = `/${section}/${subject}/`

        // Fallback to section root
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