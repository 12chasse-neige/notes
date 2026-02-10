<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import Comment from './components/Comment.vue'
import ProgressBar from './components/ProgressBar.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
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