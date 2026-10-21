<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()

const sectionLabels: Record<string, string> = {
  physics: 'Physics',
  maths: 'Mathematics',
  coding: 'Coding'
}

const trail = computed(() => {
  const relative = page.value.relativePath.replace(/\.md$/, '')
  const segments = relative.split('/').filter(Boolean)
  const section = segments[0] ?? ''
  const subject = segments[1] ?? ''

  return {
    section: sectionLabels[section] ?? 'Notes',
    subject:
      !subject || subject === 'index'
        ? 'Index'
        : decodeURIComponent(subject.replace(/-/g, ' '))
  }
})
</script>

<template>
  <div class="doc-masthead">
    <span class="doc-masthead__mark" aria-hidden="true">✦</span>
    <span class="doc-masthead__section">{{ trail.section }}</span>
    <span class="doc-masthead__sep" aria-hidden="true">/</span>
    <span class="doc-masthead__subject">{{ trail.subject }}</span>
    <span class="doc-masthead__rule" aria-hidden="true" />
    <span class="doc-masthead__year">MMXXVI</span>
  </div>
</template>

<style scoped>
.doc-masthead {
  display: flex;
  align-items: center;
  gap: 9px;
  min-height: 22px;
  margin: 0 0 1.15rem;
  color: var(--ink-3);
  font-family: var(--font-sans);
  font-size: 9.5px;
  font-weight: 650;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  animation: doc-masthead-in 0.8s var(--ease-out) both;
}

.doc-masthead__mark {
  color: var(--section-accent);
  font-family: var(--font-serif);
  font-size: 11px;
  letter-spacing: 0;
}

.doc-masthead__section {
  color: var(--ink-2);
}

.doc-masthead__sep {
  color: var(--line-strong);
  margin: 0 1px;
}

.doc-masthead__subject {
  max-width: 42ch;
  overflow: hidden;
  color: var(--ink-3);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.doc-masthead__rule {
  flex: 1;
  height: 1px;
  min-width: 16px;
  margin-left: 6px;
  background: linear-gradient(90deg, var(--line), transparent);
}

.doc-masthead__year {
  flex: none;
  color: var(--gold);
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.12em;
}

@keyframes doc-masthead-in {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 767px) {
  .doc-masthead {
    margin-bottom: 0.9rem;
  }

  .doc-masthead__rule {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .doc-masthead {
    animation: none;
  }
}
</style>
