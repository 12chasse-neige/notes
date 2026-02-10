import { defineConfig } from 'vitepress'
import markdownItMathjax3 from 'markdown-it-mathjax3'
import { generateSidebar } from 'vitepress-sidebar'
// import { resolve } from 'path'

// --------------------------------------------------------------------------
// 0. Debugging Info
// --------------------------------------------------------------------------
// console.log('🚀 Script running in:', process.cwd())
// This should print your 'notes' folder path.
// If it prints 'docs', the paths below need adjustment.

// --------------------------------------------------------------------------
// 1. Custom Natural Sort Logic (Regex Based)
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

function applySmartSort(items: any[]) {
  if (!Array.isArray(items)) return
  items.sort((a, b) => {
    const textA = a.text || ''
    const textB = b.text || ''
    return smartSort(textA, textB)
  })
  items.forEach(item => {
    if (item.items && Array.isArray(item.items)) {
      applySmartSort(item.items)
    }
  })
}

// --------------------------------------------------------------------------
// 2. Sidebar Generation (Fixing Paths)
// --------------------------------------------------------------------------
const rawSidebar = generateSidebar([
  {
    // [!code focus] FIX: Remove documentRootPath and use full relative path
    // This assumes you run 'npm run docs:dev' from the 'notes' folder
    scanStartPath: 'docs/physics',
    resolvePath: '/physics/',

    useTitleFromFileHeading: false,
    // [!code focus] Try 'excludeFiles' instead of 'excludePattern' for better compatibility
    excludePattern: ['index.md', 'posts.data.ts'],

    collapsed: true,
    sortMenusByName: false,
  },
  {
    scanStartPath: 'docs/maths',
    resolvePath: '/maths/',
    useTitleFromFileHeading: false,
    excludePattern: ['index.md', 'posts.data.ts'],
    collapsed: true,
    sortMenusByName: false,
  },
  {
    scanStartPath: 'docs/coding',
    resolvePath: '/coding/',
    useTitleFromFileHeading: false,
    excludePattern: ['index.md', 'posts.data.ts'],
    collapsed: true,
    sortMenusByName: false,
  }
])

// --------------------------------------------------------------------------
// 3. Execute Manual Sorting & Debugging
// --------------------------------------------------------------------------
try {
  for (const path in rawSidebar) {
    const group = (rawSidebar as any)[path]
    applySmartSort(group)
    // [Debug] Check if items are found
    const count = Array.isArray(group) ? group.length : 0
    console.log(`Group ${path}: Found ${count} root items.`)
  }
} catch (e) {
  console.error('Sorting failed:', e)
}

// --------------------------------------------------------------------------
// 4. Helper for "Next Page" Button
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
  title: "Chasse_neige",
  description: "Notes on Physics, Math, and Programming",

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  transformPageData(pageData) {
    if (pageData.relativePath !== 'index.md' && pageData.relativePath.endsWith('index.md')) {
      const dirName = pageData.relativePath.split('/')[0]
      const sidebarKey = `/${dirName}/`
      const group = (rawSidebar as any)[sidebarKey]

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
  },

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Physics', link: '/physics/' },
      { text: 'Math', link: '/maths/' },
      { text: 'Coding', link: '/coding/' },
    ],

    sidebar: rawSidebar,

    outline: {
      level: [2, 6],
      label: 'On this page'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/12chasse-neige' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2026 Chasse_neige'
    }
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
      // [!code focus:start]
      // 2. Inject a Custom "Auto-Align" Patch
      // This hook iterates over all tokens after parsing but before rendering.
      // It finds math blocks with double backslashes (\\) and wraps them in 'aligned'
      // if they aren't already wrapped in an environment.
      md.core.ruler.push('patch_math_newlines', (state) => {
        state.tokens.forEach((token) => {
          // Check if the token is a display math block ($$ ... $$)
          if (token.type === 'math_block') {
            const content = token.content.trim()

            // Condition:
            // 1. Contains double backslashes '\\' (indicating a line break)
            // 2. Does NOT already start with '\begin' (to avoid breaking matrices/cases)
            if (content.includes('\\\\') && !content.includes('\\begin')) {
              // Automatically wrap the content in the 'aligned' environment
              token.content = `\\begin{gather}\n${content}\n\\end{gather}`
            }
          }
        })
      })
      // [!code focus:end]
    }
  }
})