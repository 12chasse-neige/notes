<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import StaffDivider from './StaffDivider.vue'

interface CollectionStat {
  id: string
  subjects: number
  notes: number
}

const props = defineProps<{
  collections: CollectionStat[]
}>()

const presentation = {
  physics: {
    label: 'Physics',
    index: 'I',
    glyph: '∮',
    link: '/physics/',
    accent: 'var(--gold)',
    soft: 'var(--gold-soft)',
    description:
      'Mechanics, relativity, quanta — from the laboratory bench to the edge of the observable.'
  },
  maths: {
    label: 'Mathematics',
    index: 'II',
    glyph: '∑',
    link: '/maths/',
    accent: 'var(--teal)',
    soft: 'var(--teal-soft)',
    description:
      'Analysis, algebra, and the quiet structures that hold every physical theory together.'
  },
  coding: {
    label: 'Coding',
    index: 'III',
    glyph: '⌘',
    link: '/coding/',
    accent: 'var(--rose)',
    soft: 'var(--rose-soft)',
    description:
      'Languages, tools, and the craft of turning an idea into something that runs.'
  }
} as const

const cards = computed(() =>
  props.collections
    .filter((collection) => collection.id in presentation)
    .map((collection) => ({
      ...collection,
      ...presentation[collection.id as keyof typeof presentation]
    }))
)
</script>

<template>
  <section id="collections" class="home-section home-collections" aria-labelledby="collections-title">
    <StaffDivider class="home-collections__staff" />

    <header class="home-section__head">
      <div>
        <p class="home-eyebrow">The repertoire</p>
        <h2 id="collections-title" class="home-title">
          Three movements,
          <em>one notebook</em>
        </h2>
      </div>
      <p class="home-lead">
        Choose a movement. Each collection gathers lecture notes, worked problems,
        and the occasional long detour into a beautiful idea.
      </p>
    </header>

    <div class="collections-grid">
      <a
        v-for="(card, index) in cards"
        :key="card.id"
        class="collection-card"
        :href="withBase(card.link)"
        :style="{
          '--card-accent': card.accent,
          '--card-soft': card.soft,
          '--reveal-delay': `${index * 90}ms`
        }"
        data-glow
        data-reveal
      >
        <span class="collection-card__top">
          <span class="collection-card__index">{{ card.index }}</span>
          <span class="collection-card__glyph" aria-hidden="true">{{ card.glyph }}</span>
        </span>

        <span class="collection-card__body">
          <span class="collection-card__title">{{ card.label }}</span>
          <span class="collection-card__description">{{ card.description }}</span>
        </span>

        <span class="collection-card__foot">
          <span class="collection-card__stats">
            <span>
              <strong>{{ card.subjects }}</strong>
              {{ card.subjects === 1 ? 'subject' : 'subjects' }}
            </span>
            <span class="collection-card__dot" aria-hidden="true">·</span>
            <span>
              <strong>{{ card.notes }}</strong>
              {{ card.notes === 1 ? 'note' : 'notes' }}
            </span>
          </span>
          <span class="collection-card__enter">
            Enter
            <span aria-hidden="true">→</span>
          </span>
        </span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.home-collections {
  scroll-margin-top: var(--vp-nav-height);
}

.home-collections__staff {
  margin-bottom: clamp(2.6rem, 4.5vw, 4rem);
}

.collections-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.15rem;
}

.collection-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 348px;
  overflow: hidden;
  border: 0;
  border-radius: var(--radius-sm);
  background-color: var(--paper-0);
  background-image: linear-gradient(
    var(--shade-angle, 125deg),
    var(--card-soft),
    transparent 60%,
    color-mix(in srgb, var(--card-accent) 4%, transparent)
  );  color: var(--ink-1);
  padding: 1.55rem 1.6rem 1.35rem;
  text-decoration: none;
  box-shadow: var(--shadow-s);
  transition:
    transform 0.5s var(--ease-out),
    box-shadow 0.5s var(--ease-out),
    background-color 0.4s var(--ease-out);
}

.collection-card:hover {
  box-shadow: var(--shade-x, 0px) var(--shade-y, 18px) 36px -20px rgba(39, 32, 21, .35);
  transform: translateY(-5px);
}

.collection-card:focus-visible {
  outline: 2px solid var(--card-accent);
  outline-offset: 3px;
}

.collection-card__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.collection-card__index {
  color: var(--card-accent);
  font-family: var(--font-display);
  font-size: 1.18rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 1;
}

.collection-card__glyph {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border: 0;
  border-radius: 50%;
  background: var(--card-soft);
  color: var(--card-accent);
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1;
  transition:
    background-color 0.4s var(--ease-out),
    transform 0.6s var(--ease-spring);
}

.collection-card:hover .collection-card__glyph {
  background: color-mix(in srgb, var(--card-accent) 16%, transparent);
  transform: rotate(-6deg);
}

.collection-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 2.2rem;
}

.collection-card__title {
  color: var(--ink-1);
  font-family: var(--font-display);
  font-size: clamp(2.1rem, 3vw, 2.65rem);
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1;
}

.collection-card__description {
  max-width: 22rem;
  margin-top: 0.95rem;
  color: var(--ink-2);
  font-family: var(--font-serif);
  font-size: 0.96rem;
  line-height: 1.72;
}

.collection-card__foot {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2.3rem;
  padding-top: 1rem;
}

.collection-card__stats {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35rem;
  color: var(--ink-3);
  font-family: var(--font-sans);
  font-size: 9.5px;
  font-weight: 600;
  letter-spacing: 0.13em;
  line-height: 1.5;
  text-transform: uppercase;
}

.collection-card__stats strong {
  color: var(--ink-2);
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0;
  margin-right: 0.1rem;
}

.collection-card__dot {
  color: var(--line-strong);
}

.collection-card__enter {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--card-accent);
  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  white-space: nowrap;
}

.collection-card__enter span {
  font-size: 12px;
  transition: transform 0.3s var(--ease-out);
}

.collection-card:hover .collection-card__enter span {
  transform: translateX(3px);
}

.collection-card__top,
.collection-card__body,
.collection-card__foot {
  position: relative;
  z-index: 1;
}

@media (max-width: 960px) {
  .collections-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .collection-card:last-child {
    grid-column: 1 / -1;
    min-height: 300px;
  }
}

@media (max-width: 640px) {
  .collections-grid {
    grid-template-columns: 1fr;
  }

  .collection-card,
  .collection-card:last-child {
    grid-column: auto;
    min-height: 300px;
  }

  .collection-card {
    padding: 1.35rem 1.3rem 1.2rem;
  }

  .collection-card__body {
    padding-top: 1.7rem;
  }

  .collection-card__foot {
    margin-top: 1.7rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .collection-card,
  .collection-card__glyph,
  .collection-card__enter span {
    transition: none;
  }

  .collection-card:hover {
    transform: none;
  }
}
</style>
