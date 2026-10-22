<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { withBase } from 'vitepress'

interface Project {
  title: string
  desc: string
  link: string
  tags?: string[]
}

const props = defineProps<{
  projects: Project[]
}>()

const INITIAL_COUNT = 8
const expanded = ref(false)

const visibleProjects = computed(() =>
  expanded.value ? props.projects : props.projects.slice(0, INITIAL_COUNT)
)

const hiddenCount = computed(() =>
  Math.max(props.projects.length - INITIAL_COUNT, 0)
)

function category(link: string) {
  if (link.includes('/physics/')) {
    return { label: 'Physics', accent: 'var(--gold)', soft: 'var(--gold-soft)' }
  }
  if (link.includes('/maths/')) {
    return { label: 'Mathematics', accent: 'var(--teal)', soft: 'var(--teal-soft)' }
  }
  if (link.includes('/coding/')) {
    return { label: 'Coding', accent: 'var(--rose)', soft: 'var(--rose-soft)' }
  }
  return { label: 'Note', accent: 'var(--gold)', soft: 'var(--gold-soft)' }
}

function ordinal(index: number) {
  return String(index + 1).padStart(2, '0')
}

async function toggle() {
  expanded.value = !expanded.value
  await nextTick()
  window.dispatchEvent(new Event('home:reveal'))
}
</script>

<template>
  <section id="recent" class="home-section home-recent" aria-labelledby="recent-title">
    <header class="home-section__head">
      <div>
        <p class="home-eyebrow">Programme notes</p>
        <h2 id="recent-title" class="home-title">
          Recent notes
          <em>&amp; projects</em>
        </h2>
      </div>
      <p class="home-lead">
        The newest pages in the notebook, summarised automatically. A quick way to
        find the thought that was being chased most recently.
      </p>
    </header>

    <div class="projects-grid">
      <a
        v-for="(project, index) in visibleProjects"
        :key="project.link"
        class="project-card"
        :class="{ 'is-featured': index === 0 }"
        :href="withBase(project.link)"
        :style="{
          '--card-accent': category(project.link).accent,
          '--card-soft': category(project.link).soft,
          '--reveal-delay': `${Math.min(index, 5) * 65}ms`
        }"
        data-glow
        data-reveal
      >
        <span class="project-card__top">
          <span class="project-card__meta">
            <span class="project-card__index">{{ ordinal(index) }}</span>
            <span class="project-card__category">
              <span class="project-card__dot" aria-hidden="true" />
              {{ category(project.link).label }}
            </span>
          </span>
          <span class="project-card__arrow" aria-hidden="true">↗</span>
        </span>

        <span class="project-card__body">
          <span class="project-card__title">{{ project.title }}</span>
          <span class="project-card__description">{{ project.desc }}</span>
        </span>

        <span class="project-card__foot">
          <span v-if="project.tags?.length" class="project-card__tags">
            <span
              v-for="tag in project.tags.slice(0, 3)"
              :key="tag"
              class="project-card__tag"
            >
              {{ tag }}
            </span>
          </span>
          <span class="project-card__read">
            Read note
            <span aria-hidden="true">→</span>
          </span>
        </span>
      </a>
    </div>

    <div class="recent-footer">
      <p class="recent-count">
        Showing {{ visibleProjects.length }} of {{ projects.length }} entries
      </p>
      <button
        v-if="hiddenCount > 0"
        class="recent-toggle"
        type="button"
        :aria-expanded="expanded"
        @click="toggle"
      >
        <span class="recent-toggle__icon" aria-hidden="true">
          {{ expanded ? '−' : '+' }}
        </span>
        {{ expanded ? 'Show fewer entries' : `Show all ${projects.length} entries` }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.home-recent {
  padding-top: clamp(4.5rem, 7vw, 6.5rem);
  padding-bottom: clamp(4.5rem, 8vw, 8rem);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.1rem;
}

.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 228px;
  overflow: hidden;
  border: 0;
  border-radius: var(--radius-sm);
  background-color: var(--paper-0);
  background-image: linear-gradient(
    var(--shade-angle, 125deg),
    var(--card-soft),
    transparent 60%,
    color-mix(in srgb, var(--card-accent) 4%, transparent)
  );  background-blend-mode: soft-light;
  color: var(--ink-1);
  padding: 1.3rem 1.35rem 1.15rem;
  text-decoration: none;
  box-shadow: var(--shadow-s);
  transition:
    transform 0.45s var(--ease-out),
    box-shadow 0.45s var(--ease-out);
}

.project-card:hover {
  box-shadow: var(--shade-x, 0px) var(--shade-y, 18px) 36px -20px rgba(39, 32, 21, .35);
  transform: translateY(-4px);
}

.project-card:focus-visible {
  outline: 2px solid var(--card-accent);
  outline-offset: 3px;
}

.project-card.is-featured {
  grid-column: span 2;
  min-height: 262px;
}

.project-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}

.project-card__meta {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  min-width: 0;
}

.project-card__index {
  color: var(--card-accent);
  font-family: var(--font-mono);
  font-size: 9.5px;
  letter-spacing: 0.1em;
  line-height: 1;
}

.project-card__category {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--ink-3);
  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 650;
  letter-spacing: 0.14em;
  line-height: 1;
  text-transform: uppercase;
}

.project-card__dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--card-accent);
}

.project-card__arrow {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border: 0;
  border-radius: 50%;
  background: var(--card-soft);
  color: var(--ink-3);
  font-family: var(--font-sans);
  font-size: 11px;
  line-height: 1;
  transition:
    color 0.3s var(--ease-out),
    background-color 0.3s var(--ease-out),
    transform 0.3s var(--ease-out);
}

.project-card:hover .project-card__arrow {
  background: var(--card-accent);
  color: var(--paper-0);
  transform: translate(2px, -2px) rotate(4deg);
}

.project-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 1.6rem;
}

.project-card__title {
  color: var(--ink-1);
  font-family: var(--font-display);
  font-size: 1.36rem;
  font-weight: 600;
  letter-spacing: -0.012em;
  line-height: 1.2;
  text-wrap: balance;
  transition: color 0.3s var(--ease-out);
}

.project-card.is-featured .project-card__title {
  max-width: 22ch;
  font-size: clamp(1.65rem, 2.4vw, 2rem);
  font-weight: 500;
  line-height: 1.08;
}

.project-card:hover .project-card__title {
  color: color-mix(in srgb, var(--card-accent) 72%, var(--ink-1));
}

.project-card__description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 0.65rem;
  color: var(--ink-2);
  font-family: var(--font-serif);
  font-size: 0.89rem;
  line-height: 1.65;
}

.project-card.is-featured .project-card__description {
  max-width: 48ch;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  font-size: 0.97rem;
  line-height: 1.7;
}

.project-card__foot {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.8rem;
  margin-top: 1.4rem;
  padding-top: 0.9rem;
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.55rem;
  min-width: 0;
  color: var(--ink-3);
  font-family: var(--font-sans);
  font-size: 9.5px;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.5;
}

.project-card__tag {
  max-width: 13rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-card__tag + .project-card__tag::before {
  color: var(--line-strong);
  content: '· ';
}

.project-card__read {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: 0.35rem;
  color: var(--card-accent);
  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.project-card__read span {
  font-size: 11px;
  transition: transform 0.3s var(--ease-out);
}

.project-card:hover .project-card__read span {
  transform: translateX(2px);
}

/* Footer controls --------------------------------------------------------- */
.recent-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  margin-top: 2rem;
  padding-top: 1.4rem;
}

.recent-count {
  margin: 0;
  color: var(--ink-3);
  font-family: var(--font-sans);
  font-size: 9.5px;
  font-weight: 600;
  letter-spacing: 0.15em;
  line-height: 1.5;
  text-transform: uppercase;
}

.recent-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  min-height: 42px;
  padding: 0 1.15rem;
  border: 0;
  border-radius: 3px;
  background: var(--gold-soft);
  color: var(--ink-1);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.16em;
  line-height: 1;
  text-transform: uppercase;
  transition:
    background-color 0.3s var(--ease-out),
    color 0.3s var(--ease-out);
}

.recent-toggle:hover {
  background: color-mix(in srgb, var(--gold) 20%, transparent);
}

.recent-toggle__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: var(--gold-soft);
  color: var(--gold);
  font-family: var(--font-serif);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0;
}

@media (max-width: 1080px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .project-card.is-featured {
    grid-column: span 2;
  }
}

@media (max-width: 700px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-card,
  .project-card.is-featured {
    grid-column: auto;
    min-height: 210px;
  }

  .project-card.is-featured .project-card__title {
    font-size: 1.6rem;
  }

  .project-card.is-featured .project-card__description {
    -webkit-line-clamp: 3;
    line-clamp: 3;
  }

  .recent-footer {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-card,
  .project-card__arrow,
  .project-card__title,
  .project-card__read span,
  .recent-toggle {
    transition: none;
  }

  .project-card:hover {
    transform: none;
  }
}
</style>
