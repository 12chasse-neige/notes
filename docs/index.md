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

# Data for your Custom Component
recent_projects:
  - title: "Mathematical Physics Equations"
    desc: "Homework Answer (personal version) for LYS's 2025 Autumn Semester Mathematical Physics Equations."
    link: "/maths/Mathematical Physics Equations"
    tags: ["Maths", "Homework", "I'm not LYS"]
  
  - title: "Gravitational Hertz Experiment"
    desc: "A SRT Project, trying to figure out whether artificial detecable gravitational wave is possible."
    link: "/physics/General Relativity/Gravitational Waves/Gravitational Hertz Experiment"
    tags: ["Gravitational Wave", "SRT", "Detection"]

  - title: "Feynman Diagrams for Beginners"
    desc: "A shallow delve into the calculation of Feynman diagrams, following the notes of Krešimir Kumerički, ai translated."
    link: "/physics/Quantum Field Theory/Feynman Diagrams for Beginners"
    tags: ["QFT", "AI Translated", "Beginner"]
---

<!-- Insert the custom component here -->
<div class="container" style="margin-top: 50px; padding: 0 24px; max-width: 1152px; margin-left: auto; margin-right: auto;">
  <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">Recent Notes & Projects</h2>

  <!-- Pass the frontmatter data to the Vue component -->
  <RecentProjects :projects="$frontmatter.recent_projects" />
</div>