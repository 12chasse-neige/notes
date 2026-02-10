<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { ref, watch, onMounted, nextTick } from 'vue'

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
  <div class="comments-wrapper">
    <div ref="commentContainer"></div>
  </div>
</template>

<style scoped>
.comments-wrapper {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>

<style scoped>
.comments-container {
  margin-top: 64px;
  padding-top: 32px;
}
</style>