<script setup lang="ts">
// A stylised accretion disk: the far side bends above the shadow, while the
// near side crosses in front. Moving streaks follow the disk, not planet orbits.
const streams = Array.from({ length: 34 }, (_, i) => ({
  rx: 112 + i * 4.8,
  ry: 27 + i * 1.05,
  opacity: 0.16 + (Math.sin(i * 2.4) + 1) * 0.15,
  width: i % 5 === 0 ? 1.4 : 0.65,
  dash: `${18 + i % 7 * 6} ${8 + i % 4 * 4} ${3 + i % 3} ${22 + i % 6 * 8}`,
  duration: `${18 + i * 0.8}s`,
  delay: `${-i * 1.73}s`
}))
</script>

<template>
  <svg class="black-hole" viewBox="40 145 640 330" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="bh-disk" x1="100" y1="290" x2="620" y2="360" gradientUnits="userSpaceOnUse">
        <stop stop-color="#a96636" stop-opacity="0" />
        <stop offset=".2" stop-color="#c58d4c" />
        <stop offset=".48" stop-color="#fff0cc" />
        <stop offset=".66" stop-color="#e6bd78" />
        <stop offset="1" stop-color="#a96636" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="bh-lens" x1="260" y1="190" x2="450" y2="360" gradientUnits="userSpaceOnUse">
        <stop stop-color="#b27a42" stop-opacity=".12" />
        <stop offset=".44" stop-color="#fce8b6" />
        <stop offset=".7" stop-color="#d9a25d" />
        <stop offset="1" stop-color="#b27a42" stop-opacity=".18" />
      </linearGradient>
      <linearGradient id="bh-shadow" x1="310" y1="260" x2="395" y2="390" gradientUnits="userSpaceOnUse">
        <stop stop-color="#080c12" />
        <stop offset="1" stop-color="#020407" />
      </linearGradient>
      <filter id="bh-bloom" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2.2" />
      </filter>
      <clipPath id="bh-front"><path d="M60 324H660V430H60Z" /></clipPath>
    </defs>

    <g class="black-hole__system" transform="translate(360 320) scale(1.08) rotate(-13) translate(-360 -320)">
      <!-- Light remains confined to the disk; there is no circular spotlight. -->
      <g class="black-hole__disk">
        <ellipse cx="360" cy="320" rx="205" ry="51" stroke="url(#bh-disk)" stroke-width="24" opacity=".09" />
        <ellipse v-for="(stream, i) in streams" :key="i" cx="360" cy="320"
          :rx="stream.rx" :ry="stream.ry" :stroke-width="stream.width"
          :opacity="stream.opacity" :stroke-dasharray="stream.dash"
          :style="{ animationDuration: stream.duration, animationDelay: stream.delay }"
          stroke="url(#bh-disk)" class="black-hole__stream" />
      </g>

      <path d="M181 318C245 313 248 220 304 202C379 178 452 216 468 280C477 307 505 318 539 320"
        stroke="url(#bh-lens)" stroke-width="2" opacity=".7" />
      <path d="M205 320C256 308 265 230 311 215C374 194 437 225 454 283C465 310 486 319 516 322"
        stroke="url(#bh-lens)" stroke-width=".8" opacity=".5" />

      <path v-for="i in 9" :key="`lens-${i}`"
        :d="`M${185+i*2} 320C${246+i} 311 ${249+i*1.6} ${220+i*1.6} ${304+i*.8} ${202+i*1.7}C379 ${178+i*1.8} ${452-i*1.1} ${216+i*1.5} ${468-i*1.5} 280C477 307 ${505-i*2} 318 ${539-i*2} 320`"
        stroke="url(#bh-lens)" stroke-width=".55" :opacity=".12 + i*.015" />
      <circle cx="360" cy="305" r="86" fill="url(#bh-shadow)" />
      <circle cx="360" cy="305" r="87.5" stroke="url(#bh-lens)" stroke-width="2.4" opacity=".85" />
      <circle cx="360" cy="305" r="90" stroke="url(#bh-lens)" stroke-width="4" opacity=".28" filter="url(#bh-bloom)" />
      <path d="M277 291C283 246 320 220 361 220" stroke="#fff0cf" stroke-width=".8" opacity=".75" />

      <g clip-path="url(#bh-front)">
        <ellipse cx="360" cy="320" rx="248" ry="61" stroke="url(#bh-disk)" stroke-width="12" opacity=".2" filter="url(#bh-bloom)" />
        <ellipse v-for="(stream, i) in streams" :key="`front-${i}`" cx="360" cy="320"
          :rx="stream.rx" :ry="stream.ry" :stroke-width="stream.width"
          :opacity="stream.opacity + .15" :stroke-dasharray="stream.dash"
          :style="{ animationDuration: stream.duration, animationDelay: stream.delay }"
          stroke="url(#bh-disk)" class="black-hole__stream" />
      </g>
      <path class="black-hole__filament" d="M112 321C207 385 496 395 609 324" stroke="url(#bh-disk)" stroke-width="1.4" stroke-dasharray="65 540" />
      <path d="M279 337C291 391 418 411 444 337" stroke="url(#bh-lens)" stroke-width=".8" opacity=".38" />
    </g>

  </svg>
</template>

<style scoped>
.black-hole { display: block; width: 100%; height: auto; overflow: visible; user-select: none; }
.black-hole__stream { animation: accretion-flow 24s linear infinite; }
.black-hole__filament { animation: accretion-flow 16s linear infinite; }
@keyframes accretion-flow { to { stroke-dashoffset: -640; } }
@media (prefers-reduced-motion: reduce) { .black-hole__stream, .black-hole__filament { animation: none; } }
:global(html[data-page-hidden='true'] .black-hole__stream),
:global(html[data-page-hidden='true'] .black-hole__filament) { animation-play-state: paused; }
</style>
