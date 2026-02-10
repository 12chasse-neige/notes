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
          <div class="tags" v-if="project.tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="arrow-icon">→</div>
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
  height: 100%;
  padding: 1.5rem;
  text-decoration: none !important;
  color: inherit;
  justify-content: space-between;
}

/* Text Styles */
.title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
  transition: color 0.3s;
}

.project-card:hover .title {
  color: var(--vp-c-brand-1);
}

.description {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit to 3 lines */
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Tags */
.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  font-size: 0.75rem;
  background-color: var(--vp-c-bg-mute);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  color: var(--vp-c-text-2);
}

/* Arrow Animation */
.arrow-icon {
  margin-top: 1rem;
  font-weight: bold;
  color: var(--vp-c-brand-1);
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.project-card:hover .arrow-icon {
  opacity: 1;
  transform: translateX(0);
}
</style>