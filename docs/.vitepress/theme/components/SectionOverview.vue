<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

interface NoteLink {
  title: string
  url: string
}

interface SubjectOverview {
  name: string
  url: string
  hasIndex: boolean
  count: number
  notes: NoteLink[]
}

const props = defineProps<{
  subjects: SubjectOverview[]
}>()

const totalNotes = computed(() =>
  props.subjects.reduce((total, subject) => total + subject.count, 0)
)

function previewNotes(subject: SubjectOverview) {
  return subject.notes.slice(0, 4)
}

const ROMAN = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
  'X',
  'XI',
  'XII',
  'XIII',
  'XIV',
  'XV'
]

function numeral(index: number) {
  return ROMAN[index] ?? String(index + 1).padStart(2, '0')
}
</script>

<template>
  <div class="section-overview">
    <p class="overview-meta">
      <span class="overview-meta__star" aria-hidden="true">✦</span>
      <span>{{ subjects.length }} {{ subjects.length === 1 ? 'subject' : 'subjects' }}</span>
      <span class="meta-dot" aria-hidden="true">·</span>
      <span>{{ totalNotes }} {{ totalNotes === 1 ? 'note' : 'notes' }}</span>
      <span class="overview-meta__rule" aria-hidden="true" />
    </p>

    <div class="subject-grid">
      <article
        v-for="(subject, index) in subjects"
        :key="subject.name"
        class="subject-card"
        :style="{ '--reveal-delay': `${Math.min(index, 8) * 55}ms` }"
        data-glow
        data-reveal
      >
        <div class="subject-head">
          <span class="subject-index" aria-hidden="true">{{ numeral(index) }}</span>
          <span
            class="subject-count"
            :aria-label="`${subject.count} ${subject.count === 1 ? 'note' : 'notes'}`"
          >
            {{ subject.count }}
          </span>
        </div>

        <a class="subject-title" :href="withBase(subject.url)">
          {{ subject.name }}
        </a>

        <ul class="note-list">
          <li v-for="note in previewNotes(subject)" :key="note.url">
            <a :href="withBase(note.url)" :title="note.title">
              <span class="note-marker" aria-hidden="true" />
              <span class="note-title">{{ note.title }}</span>
            </a>
          </li>
        </ul>

        <a class="subject-more" :href="withBase(subject.url)">
          {{ subject.hasIndex ? 'Open subject' : 'Start reading' }}
          <span class="more-arrow" aria-hidden="true">→</span>
        </a>

      </article>
    </div>
  </div>
</template>

<style scoped>
.section-overview {
  margin: 2.6rem 0 1rem;
}

.overview-meta {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin: 0 0 1.5rem;
  color: var(--ink-3);
  font-family: var(--font-sans);
  font-size: 9.5px;
  font-weight: 650;
  letter-spacing: 0.16em;
  line-height: 1.5;
  text-transform: uppercase;
}

.overview-meta__star {
  color: var(--section-accent);
  font-family: var(--font-serif);
  font-size: 9px;
  letter-spacing: 0;
}

.overview-meta__rule {
  flex: 1;
  height: 1px;
  margin-left: 0.5rem;
  background: linear-gradient(90deg, var(--line), transparent);
}

.meta-dot {
  color: var(--line-strong);
}

.subject-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.05rem;
}

.subject-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 300px;
  overflow: hidden;
  padding: 1.25rem 1.3rem 1.15rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background-color: var(--paper-0);
  background-image: linear-gradient(
    var(--shade-angle, 125deg),
    var(--section-soft),
    transparent 60%,
    color-mix(in srgb, var(--section-accent) 4%, transparent)
  );  transition:
    transform 0.45s var(--ease-out),
    border-color 0.4s var(--ease-out),
    box-shadow 0.45s var(--ease-out);
}

.subject-card::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, var(--section-accent), transparent 70%);
  content: '';
  transform: scaleX(0.16);
  transform-origin: left center;
  transition: transform 0.65s var(--ease-out);
}

.subject-card:hover {
  border-color: color-mix(in srgb, var(--section-accent) 40%, var(--line));
  box-shadow: var(--shade-x, 0px) var(--shade-y, 18px) 36px -20px rgba(39, 32, 21, .35);
  transform: translateY(-4px);
}

.subject-card:hover::before {
  transform: scaleX(1);
}

.subject-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
}

.subject-index {
  color: var(--section-accent);
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 1;
}

.subject-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 25px;
  height: 25px;
  padding: 0 0.4rem;
  border: 1px solid var(--line);
  border-radius: 50%;
  color: var(--ink-2);
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1;
}

.subject-title {
  display: block;
  margin-top: 1.15rem;
  color: var(--ink-1);
  font-family: var(--font-display);
  font-size: 1.55rem;
  font-weight: 600;
  letter-spacing: -0.018em;
  line-height: 1.18;
  overflow-wrap: anywhere;
  text-decoration: none;
  transition: color 0.25s var(--ease-out);
}

.subject-title:hover {
  color: var(--section-accent);
}

.note-list {
  display: flex;
  flex-direction: column;
  gap: 0.18rem;
  margin: 1.1rem 0 1.2rem;
  padding: 0;
  list-style: none;
}

.note-list > li {
  margin: 0;
  padding: 0;
  line-height: inherit;
}

.note-list > li::before {
  display: none;
}

.note-list a {
  display: flex;
  gap: 0.55rem;
  align-items: baseline;
  padding: 0.18rem 0;
  color: var(--ink-2);
  font-family: var(--font-serif);
  font-size: 0.85rem;
  line-height: 1.5;
  text-decoration: none;
  transition: color 0.2s var(--ease-out);
}

.note-list a:hover {
  color: var(--section-accent);
}

.note-marker {
  flex: none;
  width: 3px;
  height: 3px;
  margin-top: 0.58em;
  background: var(--section-accent);
  opacity: 0.5;
  transform: rotate(45deg);
  transition:
    background-color 0.2s var(--ease-out),
    opacity 0.2s var(--ease-out);
}

.note-list a:hover .note-marker {
  opacity: 1;
}

.note-title {
  min-width: 0;
  overflow-wrap: anywhere;
}

.subject-more {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: auto;
  padding-top: 0.85rem;
  border-top: 1px solid var(--line);
  color: var(--section-accent);
  font-family: var(--font-sans);
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.13em;
  line-height: 1.5;
  text-decoration: none;
  text-transform: uppercase;
}

.more-arrow {
  font-size: 11px;
  transition: transform 0.25s var(--ease-out);
}

.subject-more:hover .more-arrow {
  transform: translateX(3px);
}


.subject-card :is(a):focus-visible {
  border-radius: 3px;
  outline: 2px solid var(--section-accent);
  outline-offset: 3px;
}

@media (max-width: 1100px) {
  .subject-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .subject-grid {
    grid-template-columns: 1fr;
  }

  .subject-card {
    min-height: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .subject-card,
  .subject-card::before,
  .subject-more,
  .more-arrow {
    transition: none;
  }

  .subject-card:hover {
    transform: none;
  }
}
</style>
