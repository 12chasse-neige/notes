---
title: Coding Notes
layout: doc
comments: false
---

<script setup>
// Import the data from the loader we just created
import { data as posts } from './posts.data.ts'
</script>

# Coding Notes

Here is a collection of my notes on coding.
Up till now only C++ and Python.

<!-- Loop through the posts -->
<div class="post-list">
  <div v-for="post in posts" :key="post.url" class="post-item">
    <a :href="post.url">
      <div class="post-header">
        <h3 class="post-title">{{ post.title }}</h3>
        <span v-if="post.date" class="post-date">{{ post.date.string }}</span>
      </div>
      <!-- Display excerpt if it exists -->
      <div v-if="post.excerpt" class="post-excerpt" v-html="post.excerpt"></div>
    </a>
  </div>
</div>

<style scoped>
/* --- Styles for the Auto List --- */

.post-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
}

.post-item {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  transition: border-color 0.25s, transform 0.25s;
}

.post-item:hover {
  border-color: var(--vp-c-brand-1); /* Theme blue color */
  transform: translateY(-2px);
}

.post-item a {
  display: block;
  padding: 20px;
  text-decoration: none;
  color: inherit;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}

.post-title {
  margin: 0 !important;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.post-date {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.post-excerpt {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

/* Make date separate on small screens */
@media (max-width: 640px) {
  .post-header {
    flex-direction: column;
    gap: 5px;
  }
}
</style>
