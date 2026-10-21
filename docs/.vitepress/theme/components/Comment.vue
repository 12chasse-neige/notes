<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { ref, watch, nextTick } from 'vue'

const { isDark } = useData()
const route = useRoute()

// Container reference
const commentContainer = ref<HTMLElement | null>(null)

// Render Giscus
const renderGiscus = () => {
  if (!commentContainer.value) return

  // Clear previous comments to avoid duplication
  commentContainer.value.innerHTML = ''

  const script = document.createElement('script')
  
  // --- GISCUS CONFIGURATION ---
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', '12chasse-neige/notes')
  script.setAttribute('data-repo-id', 'R_kgDONmGlrg')
  script.setAttribute('data-category', 'Announcements') // REPLACE THIS
  script.setAttribute('data-category-id', 'DIC_kwDONmGlrs4CtuTT') // REPLACE THIS
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-lang', 'en')
  script.setAttribute('data-loading', 'lazy')
  script.crossOrigin = 'anonymous'
  script.async = true

  // Set theme based on current VitePress mode
  script.setAttribute('data-theme', isDark.value ? 'transparent_dark' : 'light')

  commentContainer.value.appendChild(script)
}

// Reload Giscus when route changes (navigating between notes)
watch(
  () => route.path,
  () => {
    nextTick(() => {
      renderGiscus()
    })
  },
  { immediate: true }
)

// Update Giscus theme when dark mode toggles
watch(isDark, (dark) => {
  const iframe = document.querySelector('iframe.giscus-frame') as HTMLIFrameElement
  if (!iframe) return
  
  const theme = dark ? 'transparent_dark' : 'light'
  
  iframe.contentWindow?.postMessage(
    { giscus: { setConfig: { theme } } },
    'https://giscus.app'
  )
})
</script>

<template>
  <section class="comments-wrapper" aria-labelledby="comments-title">
    <header class="comments-head">
      <div>
        <p class="comments-eyebrow">Marginalia</p>
        <div id="comments-title" class="comments-title" role="heading" aria-level="2">Comments</div>
      </div>
      <p class="comments-note">Discussion powered by GitHub</p>
    </header>
    <div class="comments-frame">
      <div ref="commentContainer" />
    </div>
  </section>
</template>

<style scoped>
.comments-wrapper {
  max-width: var(--reading-width);
  margin-top: 3.5rem;
  padding-top: 2.4rem;
  border-top: 1px solid var(--line);
}

.comments-head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.75rem 1.5rem;
  margin-bottom: 1.4rem;
}

.comments-eyebrow {
  margin: 0 0 0.4rem;
  color: var(--gold);
  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.24em;
  line-height: 1.4;
  text-transform: uppercase;
}

.comments-title {
  margin: 0;
  color: var(--ink-1);
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1;
}

.comments-note {
  margin: 0 0 0.15rem;
  color: var(--ink-3);
  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.comments-frame {
  position: relative;
  min-height: 170px;
  padding: 1rem 1.1rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
}

.comments-frame:not(:has(iframe))::before {
  color: var(--ink-3);
  font-family: var(--font-serif);
  font-size: 0.95rem;
  font-style: italic;
  content: 'Fetching the discussion from GitHub…';
}

.comments-frame:has(iframe) {
  display: block;
  min-height: 0;
}

.dark .comments-frame {
  background: rgba(255, 255, 255, 0.015);
}

@media (max-width: 640px) {
  .comments-frame {
    padding: 0.65rem;
  }
}
</style>