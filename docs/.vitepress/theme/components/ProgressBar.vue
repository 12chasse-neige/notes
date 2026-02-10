<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive state for progress width (0-100)
const progress = ref(0)

// Function to calculate scroll percentage
const updateProgress = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight
  const winHeight = window.innerHeight
  
  // Calculate percentage
  const scrollPercent = scrollTop / (docHeight - winHeight)
  const scrollPercentRounded = Math.round(scrollPercent * 100)

  // Ensure value is between 0 and 100
  progress.value = Math.min(Math.max(scrollPercentRounded, 0), 100)
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
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