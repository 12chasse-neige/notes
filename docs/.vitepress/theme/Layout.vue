<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { onContentUpdated, useData } from 'vitepress'
import { nextTick, onMounted, onUnmounted } from 'vue'
import Comment from './components/Comment.vue'
import ProgressBar from './components/ProgressBar.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()

// Mark only the equations that actually overflow. This lets the stylesheet
// show a soft edge fade and a thin scrollbar for wide maths, without touching
// short inline formulas or adding tab stops to every formula on the page.
let frame = 0
let observer: ResizeObserver | undefined

function setMathScrollState(math: HTMLElement) {
  const atStart = math.scrollLeft <= 2
  const atEnd = math.scrollLeft + math.clientWidth >= math.scrollWidth - 2
  math.classList.toggle('is-at-start', atStart)
  math.classList.toggle('is-at-end', atEnd)
}

function measureMath() {
  for (const math of document.querySelectorAll<HTMLElement>('.vp-doc mjx-container')) {
    // A few pixels of rounding/glyph padding is not a real overflow.
    const scrollable = math.scrollWidth > math.clientWidth + 8
    math.classList.toggle('is-scrollable', scrollable)
    setMathScrollState(math)

    if (!math.hasAttribute('display')) {
      if (scrollable && !math.hasAttribute('tabindex')) {
        math.setAttribute('tabindex', '0')
        math.dataset.mathScrollTabindex = 'true'
      } else if (!scrollable && math.dataset.mathScrollTabindex) {
        math.removeAttribute('tabindex')
        delete math.dataset.mathScrollTabindex
      }
    }
  }
}

function scheduleMathMeasure() {
  if (typeof window === 'undefined') return
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(measureMath)
}

function observeDoc() {
  observer?.disconnect()
  const doc = document.querySelector('.vp-doc')
  if (doc && typeof ResizeObserver !== 'undefined') {
    observer = new ResizeObserver(scheduleMathMeasure)
    observer.observe(doc)
  }
  scheduleMathMeasure()
}

function onMathScroll(event: Event) {
  const target = event.target
  if (target instanceof HTMLElement && target.matches('mjx-container.is-scrollable')) {
    setMathScrollState(target)
  }
}

onContentUpdated(() => {
  nextTick(() => {
    observeDoc()
    if (document.fonts?.ready) {
      document.fonts.ready.then(scheduleMathMeasure)
    }
  })
})

onMounted(() => {
  window.addEventListener('resize', scheduleMathMeasure, { passive: true })
  document.addEventListener('scroll', onMathScroll, true)
  observeDoc()
})

onUnmounted(() => {
  cancelAnimationFrame(frame)
  observer?.disconnect()
  window.removeEventListener('resize', scheduleMathMeasure)
  document.removeEventListener('scroll', onMathScroll, true)
})
</script>

<template>
  <!-- Render Progress Bar on all pages -->
  <ProgressBar />

  <Layout>
    <!-- Inject Comment component after the document content -->
    <template #doc-after>
      <!-- Only show comments if 'comments' is not set to false in frontmatter -->
      <Comment v-if="frontmatter.comments !== false" />
    </template>
  </Layout>
</template>