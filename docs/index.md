---
layout: home

hero:
  name: "Chasse_neige's Personal Page"
  text: "Listen to chasse neige in B-Flat minor!"
  link: 'https://classical.music.apple.com/us/recording/franz-liszt-1811-pp48-1440779332'
  tagline: My personal notebook on Maths, Physics and Coding. Get access to all my notes and projects through just one click.
  actions:
    - theme: brand
      text: Browse Notes
      link: /physics/
    - theme: alt
      text: View on GitHub
      link: https://github.com/12chasse-neige/notes

features:
  - title: Mathematical Rigor
    details: Detailed derivations using LaTeX.
  - title: Physics Simulations
    details: Interactive demos alongside theory.
  - title: Clean Design
    details: Distraction-free reading experience.
---

<script setup>
import RecentProjects from './.vitepress/theme/components/RecentProjects.vue'

import recentData from './.vitepress/data/recent_projects.json'
</script>

<div class="container" style="margin-top: 50px; padding: 0 24px; max-width: 1152px; margin-left: auto; margin-right: auto;">
  <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">
    Recent Notes & Projects (AI Summerized)
  </h2>

  <RecentProjects :projects="recentData" />
</div>