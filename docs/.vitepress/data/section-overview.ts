import { createContentLoader } from 'vitepress'

export interface NoteLink {
  title: string
  url: string
}

export interface SubjectOverview {
  name: string
  url: string
  hasIndex: boolean
  count: number
  notes: NoteLink[]
}

function smartSort(a: string, b: string): number {
  const chunksA = a.split(/(\d+)/).filter(Boolean)
  const chunksB = b.split(/(\d+)/).filter(Boolean)
  const length = Math.min(chunksA.length, chunksB.length)

  for (let i = 0; i < length; i++) {
    const partA = chunksA[i]
    const partB = chunksB[i]
    const numberA = Number.parseInt(partA, 10)
    const numberB = Number.parseInt(partB, 10)

    if (!Number.isNaN(numberA) && !Number.isNaN(numberB)) {
      if (numberA !== numberB) return numberA - numberB
    } else if (partA !== partB) {
      return partA.localeCompare(partB)
    }
  }

  return chunksA.length - chunksB.length
}

function decode(value: string) {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

function cleanTitle(value: string) {
  return value
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]*>/g, '')
    .replace(/[`*_~]/g, '')
    .replace(/[\u200b\ufeff]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function pageTitle(url: string, src?: string) {
  const heading = src?.match(/^#\s+(.+?)\s*#*\s*$/m)?.[1]
  if (heading) {
    const title = cleanTitle(heading)
    if (title) return title
  }

  const file = url.split('/').pop() ?? ''
  return cleanTitle(decode(file.replace(/\.html$/, ''))) || 'Untitled'
}

function stripSubjectPrefix(title: string, subject: string) {
  const escaped = subject.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const shortened = title
    .replace(new RegExp(`^${escaped}\\s*[:：\\-–—]?\\s*`, 'i'), '')
    .trim()
  return shortened || title
}

function isIndexPage(url: string) {
  return url.endsWith('/') || /(^|\/)index(?:\.html)?$/.test(url)
}

/**
 * Build a subject -> notes overview for one top-level notes section.
 *
 * The old loader globbed only `section/*.md`, so the overview lists on
 * /physics/, /maths/, and /coding/ were always empty. Walking the whole tree
 * also lets the index pages act as a real table of contents.
 */
export function createSectionOverviewLoader(section: string) {
  return createContentLoader(`${section}/**/*.md`, {
    includeSrc: true,
    transform(raw) {
      const groups = new Map<
        string,
        { name: string; indexUrl?: string; notes: NoteLink[] }
      >()

      for (const page of raw) {
        const segments = page.url.split('/').filter(Boolean)
        if (segments.length < 2) continue

        const subjectName = decode(segments[1])
        if (!subjectName || subjectName === 'index.html') continue

        const group = groups.get(subjectName) ?? { name: subjectName, notes: [] }

        if (isIndexPage(page.url)) {
          // A section index contributes its path but is not itself a note.
          if (segments.length === 2) group.indexUrl = page.url
        } else if (segments.length >= 3) {
          const title = pageTitle(page.url, page.src)
          if (!group.notes.some((note) => note.url === page.url)) {
            group.notes.push({ title, url: page.url })
          }
        }

        groups.set(subjectName, group)
      }

      return [...groups.values()]
        .filter((group) => group.notes.length > 0)
        .sort((a, b) => smartSort(a.name, b.name))
        .map((group) => {
          const notes = group.notes
            .map((note) => ({
              ...note,
              title: stripSubjectPrefix(note.title, group.name)
            }))
            .sort((a, b) => smartSort(a.title, b.title))
          return {
            name: group.name,
            url: group.indexUrl ?? notes[0].url,
            hasIndex: Boolean(group.indexUrl),
            count: notes.length,
            notes
          } satisfies SubjectOverview
        })
    }
  })
}
