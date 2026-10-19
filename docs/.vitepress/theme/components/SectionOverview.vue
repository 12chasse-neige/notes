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
</script>

<template>
  <div class="section-overview">
    <p class="overview-meta">
      <span>{{ subjects.length }} subjects</span>
      <span class="meta-dot" aria-hidden="true">·</span>
      <span>{{ totalNotes }} notes</span>
    </p>

    <div class="subject-grid">
      <article
        v-for="subject in subjects"
        :key="subject.name"
        class="subject-card"
      >
        <div class="subject-head">
          <a class="subject-title" :href="withBase(subject.url)">
            {{ subject.name }}
          </a>
          <span
            class="subject-count"
            :aria-label="`${subject.count} ${subject.count === 1 ? 'note' : 'notes'}`"
          >
            {{ subject.count }}
          </span>
        </div>

        <ul class="note-list">
          <li v-for="note in previewNotes(subject)" :key="note.url">
            <a :href="withBase(note.url)" :title="note.title">
              <span class="note-dot" aria-hidden="true"></span>
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
  margin: 2rem 0 1rem;
}

.overview-meta {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0 0 1rem;
  color: var(--vp-c-text-3);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.meta-dot {
  opacity: 0.7;
}

.subject-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.subject-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 1.15rem 1.2rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.subject-card:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 12px 28px -20px rgba(37, 99, 235, 0.55);
}

.subject-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
}

.subject-title {
  color: var(--vp-c-text-1);
  font-size: 1.05rem;
  font-weight: 650;
  line-height: 1.4;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.subject-title:hover {
  color: var(--vp-c-brand-1);
}

.subject-count {
  flex: none;
  min-width: 1.7rem;
  padding: 0.1rem 0.45rem;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.76rem;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
}

.note-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 0.95rem 0 1.1rem;
  padding: 0;
  list-style: none;
}

.note-list a {
  display: flex;
  gap: 0.55rem;
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  line-height: 1.55;
  text-decoration: none;
}

.note-list a:hover {
  color: var(--vp-c-brand-1);
}

.note-dot {
  flex: none;
  width: 4px;
  height: 4px;
  margin-top: 0.6em;
  border-radius: 50%;
  background: var(--vp-c-divider);
  transition: background-color 0.2s ease;
}

.note-list a:hover .note-dot {
  background: var(--vp-c-brand-1);
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
  color: var(--vp-c-brand-1);
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
}

.more-arrow {
  transition: transform 0.2s ease;
}

.subject-more:hover .more-arrow {
  transform: translateX(3px);
}

.subject-card :is(a):focus-visible {
  border-radius: 4px;
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}

@media (max-width: 480px) {
  .subject-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .subject-card,
  .note-dot,
  .more-arrow {
    transition: none;
  }

  .subject-card:hover {
    transform: none;
  }
}
</style>
