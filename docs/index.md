---

layout: home

hero:
  name: "Chasse_neige's Personal Page"
  text: "Listen to chasse neige in B-flat minor!"
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
    details: Detailed derivations, typeset with LaTeX and MathJax.
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M17 5H6l6 7-6 7h11"/><path d="M17 5v3"/></svg>'
  - title: Physics & Maths
    details: Lecture notes, homework solutions, and research write-ups.
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.1"/><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(45 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(-45 12 12)"/></svg>'
  - title: Clean Design
    details: Distraction-free reading with light and dark themes.
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M4 9h16"/><path d="M9 9v11"/></svg>'

---

<script setup>
import RecentProjects from './.vitepress/theme/components/RecentProjects.vue'

import recentData from './.vitepress/data/recent_projects.json'
</script>

<div class="home-recent">
  <div class="home-recent-head">
    <div>
      <p class="home-recent-eyebrow">Latest updates</p>
      <h2 class="home-recent-title">Recent notes & projects</h2>
    </div>
    <p class="home-recent-subtitle">Summaries generated automatically from the newest notes.</p>
  </div>

  <RecentProjects :projects="recentData" />
</div>