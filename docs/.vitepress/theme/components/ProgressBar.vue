<script setup lang="ts">
import { useRoute } from 'vitepress'
import { ref, nextTick, onMounted, onUnmounted, watch } from 'vue'

const progress = ref(0)
const route = useRoute()

function updateProgress() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight
  const winHeight = window.innerHeight
  const scrollable = docHeight - winHeight

  if (scrollable <= 0) {
    progress.value = 0
    return
  }

  progress.value = Math.min(
    Math.max(Math.round((scrollTop / scrollable) * 100), 0),
    100
  )
}

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
  <div class="progress-container" aria-hidden="true">
    <div class="progress-bar" :style="{ width: progress + '%' }">
      <span v-if="progress > 1" class="progress-star">♪</span>
    </div>
  </div>
</template>

<style scoped>
.progress-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 2px;
  background: transparent;
  pointer-events: none;
}

.progress-bar {
  position: relative;
  height: 100%;
  background: linear-gradient(90deg, var(--teal), var(--gold) 62%, var(--gold-bright));
  box-shadow:
    0 0 10px rgba(215, 174, 102, 0.5),
    0 0 22px rgba(215, 174, 102, 0.22);
  transition: width 0.14s linear;
}

.progress-star {
  position: absolute;
  top: 50%;
  right: -3px;
  color: var(--gold-bright);
  font-family: var(--font-serif);
  font-size: 9px;
  line-height: 1;
  text-shadow: 0 0 8px rgba(234, 203, 144, 0.9);
  transform: translateY(-50%);
}

@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}
</style>
