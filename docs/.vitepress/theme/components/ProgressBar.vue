<script setup lang="ts">
import { useRoute } from 'vitepress'
import { ref, nextTick, onMounted, onUnmounted, watch } from 'vue'

// Reactive state for progress width (0-100)
const progress = ref(0)
const route = useRoute()

// Function to calculate scroll percentage
const updateProgress = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight
  const winHeight = window.innerHeight
  const scrollable = docHeight - winHeight

  if (scrollable <= 0) {
    progress.value = 0
    return
  }

  // Ensure value is between 0 and 100
  progress.value = Math.min(Math.max(Math.round((scrollTop / scrollable) * 100), 0), 100)
}

// A new page starts at the top again, so do not leave the previous page's bar.
watch(
  () => route.path,
  () =>
    nextTick(() => {
      requestAnimationFrame(updateProgress)
    })
)

onMounted(() => {
  updateProgress()
  window.addEventListener('scroll', updateProgress, { passive: true })
  window.addEventListener('resize', updateProgress, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
  window.removeEventListener('resize', updateProgress)
})
</script>

<template>
  <div class="progress-container">
    <div class="progress-bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<style scoped>
.progress-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px; /* Height of the progress bar */
  z-index: 9999; /* Ensure it stays on top of everything */
  background: transparent;
  pointer-events: none; /* Let clicks pass through */
}

.progress-bar {
  height: 100%;
  background: var(--vp-c-brand-1); /* Use your theme's blue color */
  transition: width 0.1s ease-out; /* Slight smoothing */
  box-shadow: 0 0 10px var(--vp-c-brand-1); /* Optional glow effect */
}
</style>