---
layout: home
title: Chasse_neige
homeHero:
  eyebrow: 'A personal notebook · Op. I'
  name: "Chasse_neige's"
  title: 'Personal Page'
  quote: 'Chasse-neige in B♭ minor'
  quoteLabel: 'Now playing · Franz Liszt'
  quoteLink: 'https://classical.music.apple.com/us/recording/franz-liszt-1811-pp48-1440779332'
  lead: 'A living notebook of mathematics, physics, and code — every derivation, lecture, and project, one click away.'
  primaryText: 'Browse notes'
  primaryLink: '/physics/'
  secondaryText: 'View on GitHub'
  secondaryLink: 'https://github.com/12chasse-neige/notes'
---

<script setup>
import { data as physics } from './physics/posts.data.ts'
import { data as maths } from './maths/posts.data.ts'
import { data as coding } from './coding/posts.data.ts'
import HomeCollections from './.vitepress/theme/components/HomeCollections.vue'
import RecentProjects from './.vitepress/theme/components/RecentProjects.vue'
import recentData from './.vitepress/data/recent_projects.json'

const collections = [
  {
    id: 'physics',
    subjects: physics.length,
    notes: physics.reduce((total, subject) => total + subject.count, 0)
  },
  {
    id: 'maths',
    subjects: maths.length,
    notes: maths.reduce((total, subject) => total + subject.count, 0)
  },
  {
    id: 'coding',
    subjects: coding.length,
    notes: coding.reduce((total, subject) => total + subject.count, 0)
  }
]
</script>

<HomeCollections :collections="collections" />

<RecentProjects :projects="recentData" />
