<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { inBrowser, onContentUpdated, useData, withBase } from 'vitepress'
import { computed, nextTick, onMounted, onUnmounted, watchEffect } from 'vue'
import Comment from './components/Comment.vue'
import DocMasthead from './components/DocMasthead.vue'
import HomeHero from './components/HomeHero.vue'

const { Layout } = DefaultTheme
const { frontmatter, page } = useData()

const isHome = computed(() => frontmatter.value.layout === 'home')
const isDoc = computed(() => /^\/(physics|maths|coding)\//.test(page.value.relativePath ? `/${page.value.relativePath}` : ''))

/* --------------------------------------------------------------------------
   Mathematics: mark only the equations that actually overflow. This lets the
   stylesheet show a soft edge fade and a thin scrollbar for wide maths without
   touching short inline formulas or adding tab stops to every formula.
   -------------------------------------------------------------------------- */
let frame = 0
let documentObserver: ResizeObserver | undefined

function setMathScrollState(math: HTMLElement) {
  const atStart = math.scrollLeft <= 2
  const atEnd = math.scrollLeft + math.clientWidth >= math.scrollWidth - 2
  math.classList.toggle('is-at-start', atStart)
  math.classList.toggle('is-at-end', atEnd)
}

function setInlineMathScrollState(wrapper: HTMLElement) {
  const atStart = wrapper.scrollLeft <= 2
  const atEnd = wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 2
  wrapper.classList.toggle('is-at-start', atStart)
  wrapper.classList.toggle('is-at-end', atEnd)
}

function measureInlineMath(math: HTMLElement) {
  const wrapper = math.parentElement?.classList.contains('inline-math-scroll')
    ? math.parentElement
    : null
  const column = math.closest<HTMLElement>(
    'p, li, td, th, h1, h2, h3, h4, h5, h6, .custom-block, .vp-doc'
  )
  if (!column) return

  const style = getComputedStyle(column)
  const available = column.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight)
  const svg = math.querySelector('svg')
  const formulaWidth = Math.max(math.scrollWidth, svg?.getBoundingClientRect().width ?? 0)
  const scrollable = formulaWidth > available + 8

  // MathJax glyphs can overhang their own box (especially arrows and relation
  // signs). That is normal typography, not evidence of column overflow.
  if (!scrollable) {
    wrapper?.replaceWith(math)
    return
  }

  if (wrapper) {
    wrapper.classList.add('is-scrollable')
    wrapper.setAttribute('tabindex', '0')
    setInlineMathScrollState(wrapper)
    return
  }

  const scroller = document.createElement('span')
  scroller.className = 'inline-math-scroll is-scrollable'
  scroller.setAttribute('tabindex', '0')
  scroller.setAttribute('role', 'group')
  scroller.setAttribute('aria-label', 'Scrollable formula')
  math.parentNode?.insertBefore(scroller, math)
  scroller.appendChild(math)
  setInlineMathScrollState(scroller)
}

function measureMath() {
  for (const math of document.querySelectorAll<HTMLElement>('.vp-doc mjx-container')) {
    // Inline formulas must keep their intrinsic baseline; scrolling the
    // mjx-container itself changes an inline-block's baseline and lifts the
    // formula off the text. Wide ones get an inline-flex wrapper instead.
    if (!math.hasAttribute('display')) {
      measureInlineMath(math)
      continue
    }

    const scrollable = math.scrollWidth > math.clientWidth + 8
    math.classList.toggle('is-scrollable', scrollable)
    setMathScrollState(math)
  }
}

function scheduleMathMeasure() {
  if (typeof window === 'undefined') return
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(measureMath)
}

function observeDoc() {
  documentObserver?.disconnect()
  const doc = document.querySelector('.vp-doc')
  if (doc && typeof ResizeObserver !== 'undefined') {
    documentObserver = new ResizeObserver(scheduleMathMeasure)
    documentObserver.observe(doc)
  }
  scheduleMathMeasure()
}

function onMathScroll(event: Event) {
  const target = event.target
  if (!(target instanceof HTMLElement)) return
  if (target.matches('mjx-container.is-scrollable')) {
    setMathScrollState(target)
  } else if (target.matches('.inline-math-scroll.is-scrollable')) {
    setInlineMathScrollState(target)
  }
}

/* --------------------------------------------------------------------------
   Tables get a dedicated scroll container so wide derivations and comparison
   tables can be read on small screens without stretching the page.
   -------------------------------------------------------------------------- */
function wrapTables() {
  for (const table of document.querySelectorAll<HTMLTableElement>('.vp-doc table')) {
    if (table.parentElement?.classList.contains('table-scroll')) continue
    const wrapper = document.createElement('div')
    wrapper.className = 'table-scroll'
    table.parentNode?.insertBefore(wrapper, table)
    wrapper.appendChild(table)
  }
}

/* --------------------------------------------------------------------------
   Reveal on scroll. The `js` class is added in the document head, so content
   remains fully visible when scripts are unavailable.
   -------------------------------------------------------------------------- */
let revealObserver: IntersectionObserver | undefined
let revealFallback = 0

function revealImmediately() {
  for (const element of document.querySelectorAll<HTMLElement>('[data-reveal]')) {
    element.classList.add('is-revealed')
  }
}

function setupReveal() {
  if (!inBrowser) return
  window.clearTimeout(revealFallback)
  revealObserver?.disconnect()

  const elements = Array.from(
    document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-revealed)')
  )
  if (!elements.length) return

  if (!('IntersectionObserver' in window)) {
    revealImmediately()
    return
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-revealed')
        revealObserver?.unobserve(entry.target)
      }
    },
    { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
  )

  for (const element of elements) revealObserver.observe(element)

  // Be forgiving: if a browser or extension prevents the observer from firing,
  // the page should never remain blank.
  revealFallback = window.setTimeout(revealImmediately, 2600)
}

/* --------------------------------------------------------------------------
   Directional light and cast shadows follow the pointer on cards.
   -------------------------------------------------------------------------- */
function onPointerMove(event: PointerEvent) {
  const target = event.target
  if (!(target instanceof Element)) return
  const card = target.closest<HTMLElement>('[data-glow]')
  if (!card) return
  const rect = card.getBoundingClientRect()
  const nx = (event.clientX - rect.left) / rect.width - 0.5
  const ny = (event.clientY - rect.top) / rect.height - 0.5
  card.style.setProperty('--shade-angle', `${125 + nx * 100 + ny * 40}deg`)
  card.style.setProperty('--shade-x', `${-nx * 20}px`)
  card.style.setProperty('--shade-y', `${14 - ny * 16}px`)
}

/* -------------------------------------------------------------------------- */
function updateSection() {
  if (!inBrowser) return
  const relative = page.value.relativePath ?? ''
  const section = relative.split('/')[0]
  const known = ['physics', 'maths', 'coding']
  document.documentElement.dataset.section = known.includes(section) ? section : 'home'
}

function closeSidebarMenu() {
  if (!inBrowser) return
  window.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape' }))
}

function updateVisibility() {
  document.documentElement.dataset.pageHidden = String(document.hidden)
}

function refreshPage() {
  nextTick(() => {
    updateSection()
    wrapTables()
    observeDoc()
    setupReveal()
    if (document.fonts?.ready) {
      document.fonts.ready.then(scheduleMathMeasure)
    }
  })
}

onContentUpdated(refreshPage)

watchEffect(() => {
  // Read the route's relative path so the effect reruns on navigation.
  void page.value.relativePath
  updateSection()
})

onMounted(() => {
  document.documentElement.classList.add('js')
  updateVisibility()
  document.addEventListener('visibilitychange', updateVisibility)
  document.addEventListener('scroll', onMathScroll, true)
  document.addEventListener('pointermove', onPointerMove, { passive: true })
  window.addEventListener('resize', scheduleMathMeasure, { passive: true })
  window.addEventListener('home:reveal', setupReveal)
  refreshPage()
})

onUnmounted(() => {
  cancelAnimationFrame(frame)
  document.removeEventListener('visibilitychange', updateVisibility)
  window.clearTimeout(revealFallback)
  documentObserver?.disconnect()
  revealObserver?.disconnect()
  document.removeEventListener('scroll', onMathScroll, true)
  document.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('resize', scheduleMathMeasure)
  window.removeEventListener('home:reveal', setupReveal)
})
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <HomeHero v-if="isHome" />
    </template>

    <template #sidebar-nav-before>
      <button class="sidebar-close" type="button" @click="closeSidebarMenu">
        <span>Close</span>
        <span class="sidebar-close__icon" aria-hidden="true">×</span>
      </button>
      <div class="sidebar-staff" aria-hidden="true">
        <span class="sidebar-staff__lines" />
        <span class="sidebar-staff__note">♪</span>
      </div>
    </template>

    <template #doc-before>
      <DocMasthead v-if="isDoc" />
    </template>

    <template #doc-after>
      <div v-if="isDoc" class="doc-end" aria-hidden="true">
        <span class="doc-end__word">Fine.</span>
      </div>
      <Comment v-if="frontmatter.comments !== false" />
    </template>

    <template #nav-screen-content-after>
      <div class="nav-screen-colophon">
        <p class="nav-screen-colophon__line">
          Mathematics, physics, and code — kept with care.
        </p>
        <a class="nav-screen-colophon__link" :href="withBase('/physics/')">
          Browse the repertoire
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </template>
  </Layout>
</template>
