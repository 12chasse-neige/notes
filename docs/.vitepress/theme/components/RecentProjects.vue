<script setup lang="ts">
import { withBase } from 'vitepress'

// Define the shape of a project object
interface Project {
  title: string
  desc: string
  link: string
  tags?: string[]
}

// Accept props passed from index.md
defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <div class="projects-container">
    <div 
      v-for="(project, index) in projects" 
      :key="index" 
      class="project-card"
    >
      <a :href="withBase(project.link)" class="card-link">
        <div class="card-content">
          <h3 class="title">{{ project.title }}</h3>
          <p class="description">{{ project.desc }}</p>
        </div>
        <div class="card-footer">
          <div class="tags" v-if="project.tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
          <span class="arrow-icon" aria-hidden="true">→</span>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
/* Grid Layout for Blocks */
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 1rem 0;
}

/* Card Styling */
.project-card {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), 
              box-shadow 0.3s ease,
              border-color 0.3s ease;
  position: relative;
}

/* Hover Animations */
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.15);
  border-color: var(--vp-c-brand-1);
}

.dark .project-card:hover {
  box-shadow: 0 10px 30px -10px rgba(50, 100, 255, 0.15); /* Blue glow in dark mode */
}

/* Link Wrapper */
.card-link {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  height: 100%;
  padding: 1.5rem;
  text-decoration: none !important;
  color: inherit;
}

.card-link:focus-visible {
  border-radius: 11px;
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: -3px;
}

.card-content {
  flex: 1;
}

/* Text Styles */
.title {
  margin: 0 0 0.55rem;
  color: var(--vp-c-text-1);
  font-size: 1.15rem;
  font-weight: 650;
  line-height: 1.45;
  transition: color 0.3s;
}

.project-card:hover .title {
  color: var(--vp-c-brand-1);
}

.description {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit to 3 lines */
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.92rem;
  line-height: 1.6;
}

/* Tags and end-of-card affordance */
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  min-width: 0;
}

.tag {
  padding: 0.18rem 0.55rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-text-2);
  font-size: 0.72rem;
  font-weight: 500;
  line-height: 1.5;
  white-space: nowrap;
}

.arrow-icon {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.95rem;
  font-weight: 700;
  transition: transform 0.25s ease, background-color 0.25s ease;
}

.project-card:hover .arrow-icon {
  transform: translateX(3px);
  background: var(--vp-c-brand-1);
  color: #fff;
}

@media (prefers-reduced-motion: reduce) {
  .project-card,
  .arrow-icon,
  .title {
    transition: none;
  }

  .project-card:hover {
    transform: none;
  }

  .project-card:hover .arrow-icon {
    transform: none;
  }
}
</style>
