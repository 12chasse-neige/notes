<script setup lang="ts">
// A hand-built orrery: fine brass rings, a small singularity, and a few
// equations left in the margins like field notes.
const ticks = Array.from({ length: 72 }, (_, index) => {
  const angle = (index * 5 * Math.PI) / 180
  const major = index % 6 === 0
  const inner = major ? 274 : 281
  return {
    major,
    x1: 320 + Math.cos(angle) * inner,
    y1: 320 + Math.sin(angle) * inner,
    x2: 320 + Math.cos(angle) * 292,
    y2: 320 + Math.sin(angle) * 292
  }
})

const dust = [
  { x: 96, y: 214, r: 1.3, o: 0.55 },
  { x: 522, y: 128, r: 1, o: 0.5 },
  { x: 566, y: 414, r: 1.6, o: 0.4 },
  { x: 188, y: 508, r: 1.1, o: 0.35 },
  { x: 440, y: 548, r: 0.9, o: 0.45 },
  { x: 116, y: 384, r: 0.8, o: 0.4 },
  { x: 390, y: 78, r: 1.2, o: 0.4 }
]
</script>

<template>
  <svg
    class="orrery"
    viewBox="0 0 640 640"
    role="img"
    aria-label="An orrery of delicate orbits and mathematical annotations"
  >
    <defs>
      <radialGradient id="orrery-core" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fff7e4" />
        <stop offset="34%" stop-color="#eacb90" />
        <stop offset="68%" stop-color="#a8782f" stop-opacity="0.9" />
        <stop offset="100%" stop-color="#a8782f" stop-opacity="0" />
      </radialGradient>
      <radialGradient id="orrery-halo" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#d7ae66" stop-opacity="0.32" />
        <stop offset="48%" stop-color="#d7ae66" stop-opacity="0.1" />
        <stop offset="100%" stop-color="#d7ae66" stop-opacity="0" />
      </radialGradient>
      <radialGradient id="orrery-planet" cx="34%" cy="30%" r="72%">
        <stop offset="0%" stop-color="#f6ecd8" />
        <stop offset="42%" stop-color="#b9d4cb" />
        <stop offset="100%" stop-color="#3f7a73" />
      </radialGradient>
      <linearGradient id="orrery-comet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#eacb90" stop-opacity="0" />
        <stop offset="55%" stop-color="#eacb90" stop-opacity="0.55" />
        <stop offset="100%" stop-color="#f8f0dd" stop-opacity="0.95" />
      </linearGradient>
      <filter id="orrery-soften" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="5" />
      </filter>
    </defs>

    <g class="orrery__ticks" aria-hidden="true">
      <line
        v-for="(tick, index) in ticks"
        :key="index"
        :class="['orrery__tick', { 'is-major': tick.major }]"
        :x1="tick.x1"
        :y1="tick.y1"
        :x2="tick.x2"
        :y2="tick.y2"
      />
    </g>

    <g class="orrery__rings" aria-hidden="true">
      <circle cx="320" cy="320" r="258" />
      <circle cx="320" cy="320" r="196" class="is-dashed" />
      <circle cx="320" cy="320" r="118" class="is-faint" />
      <ellipse cx="320" cy="320" rx="278" ry="112" transform="rotate(17 320 320)" />
      <ellipse cx="320" cy="320" rx="238" ry="148" transform="rotate(-38 320 320)" class="is-faint" />
      <ellipse cx="320" cy="320" rx="292" ry="58" transform="rotate(58 320 320)" class="is-dashed is-faint" />
    </g>

    <g class="orrery__rotor orrery__rotor--a" aria-hidden="true">
      <path d="M320 46 A274 274 0 0 1 594 320" class="orrery__arc" />
      <circle cx="594" cy="320" r="2.6" class="orrery__node" />
      <circle cx="320" cy="46" r="1.8" class="orrery__node is-teal" />
    </g>

    <g class="orrery__rotor orrery__rotor--b" aria-hidden="true">
      <path d="M112 488 A248 248 0 0 0 486 528" class="orrery__arc is-faint" />
      <circle cx="486" cy="528" r="2" class="orrery__node" />
    </g>

    <g class="orrery__planets" aria-hidden="true">
      <g class="orrery__orbit" style="--duration: 58s; --delay: -12s">
        <circle cx="566" cy="320" r="5.4" fill="url(#orrery-planet)" />
        <circle cx="566" cy="320" r="12" class="orrery__planet-glow" />
      </g>
      <g class="orrery__orbit" style="--duration: 38s; --delay: -27s">
        <circle cx="320" cy="196" r="3.6" class="orrery__moon" />
      </g>
      <g class="orrery__orbit" style="--duration: 84s; --delay: -55s">
        <ellipse cx="106" cy="320" rx="14" ry="4.2" class="orrery__planet-ring" transform="rotate(-22 106 320)" />
        <circle cx="106" cy="320" r="4.3" class="orrery__planet is-muted" />
      </g>
      <g class="orrery__orbit" style="--duration: 46s; --delay: -4s">
        <circle cx="458" cy="470" r="2.5" class="orrery__node is-teal" />
      </g>
    </g>

    <g class="orrery__comet" aria-hidden="true">
      <path d="M548 92 L430 196" />
      <circle cx="548" cy="92" r="2.4" fill="#f8f0dd" />
    </g>

    <g class="orrery__core" aria-hidden="true">
      <circle cx="320" cy="320" r="94" fill="url(#orrery-halo)" class="orrery__halo" />
      <circle cx="320" cy="320" r="29" fill="url(#orrery-core)" filter="url(#orrery-soften)" opacity="0.75" />
      <circle cx="320" cy="320" r="15.5" class="orrery__singularity" />
      <ellipse cx="320" cy="320" rx="39" ry="10" class="orrery__accretion" transform="rotate(-18 320 320)" />
      <circle cx="320" cy="320" r="3.2" fill="#f8f0dd" class="orrery__heart" />
    </g>

    <g class="orrery__annotations" aria-hidden="true">
      <text class="orrery__formula" x="62" y="146">iℏ ∂ψ/∂t = Ĥψ</text>
      <text class="orrery__formula" x="432" y="96">e^{iπ} + 1 = 0</text>
      <text class="orrery__formula" x="470" y="576">∮ F · dl</text>
      <text class="orrery__formula" x="82" y="590">ζ(s) = Σ n⁻ˢ</text>
      <text class="orrery__formula" x="452" y="246">∇ × B = μ₀J</text>
      <text class="orrery__micro" x="320" y="20" text-anchor="middle">N</text>
      <text class="orrery__micro" x="320" y="634" text-anchor="middle">S</text>
      <text class="orrery__micro" x="16" y="324">W</text>
      <text class="orrery__micro" x="618" y="324" text-anchor="end">E</text>
      <text class="orrery__coordinate" x="320" y="606" text-anchor="middle">
        RA 05ʰ 35ᵐ · DEC −05° 27′
      </text>

      <!-- A few bars for the music of the spheres. -->
      <g class="orrery__score" transform="translate(54 486) rotate(-6)">
        <path
          class="orrery__staff-lines"
          d="M0 0H202M0 6H202M0 12H202M0 18H202M0 24H202"
        />
        <g class="orrery__score-note">
          <ellipse cx="48" cy="18" rx="4.2" ry="3" transform="rotate(-18 48 18)" />
          <path class="orrery__stem" d="M52 17V1" />
        </g>
        <g class="orrery__score-note">
          <ellipse cx="100" cy="12" rx="4.2" ry="3" transform="rotate(-18 100 12)" />
          <path class="orrery__stem" d="M104 11V-5" />
        </g>
        <g class="orrery__score-note">
          <ellipse cx="152" cy="18" rx="4.2" ry="3" transform="rotate(-18 152 18)" />
          <path class="orrery__stem" d="M156 17V1" />
        </g>
        <g class="orrery__score-note is-open">
          <ellipse cx="192" cy="12" rx="4.4" ry="3.1" transform="rotate(-18 192 12)" />
          <path class="orrery__stem" d="M196 11V-5" />
        </g>
        <path class="orrery__score-slur" d="M40 29Q104 1 196 23" />
      </g>
      <text class="orrery__music" x="56" y="474">B♭ minor · Presto</text>
      <text class="orrery__music" x="56" y="532">pp</text>
      <g v-for="(point, index) in dust" :key="`dust-${index}`">
        <circle :cx="point.x" :cy="point.y" :r="point.r" :opacity="point.o" fill="#f4eddf" />
      </g>
    </g>
  </svg>
</template>

<style scoped>
.orrery {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
  user-select: none;
}

.orrery__tick {
  stroke: rgba(236, 228, 211, 0.18);
  stroke-width: 0.7;
}

.orrery__tick.is-major {
  stroke: rgba(215, 174, 102, 0.52);
  stroke-width: 1;
}

.orrery__rings :is(circle, ellipse) {
  fill: none;
  stroke: rgba(236, 228, 211, 0.14);
  stroke-width: 0.8;
}

.orrery__rings .is-dashed {
  stroke-dasharray: 2 7;
  stroke: rgba(236, 228, 211, 0.19);
}

.orrery__rings .is-faint {
  stroke: rgba(236, 228, 211, 0.08);
}

.orrery__arc {
  fill: none;
  stroke: rgba(215, 174, 102, 0.42);
  stroke-width: 0.9;
  stroke-linecap: round;
}

.orrery__arc.is-faint {
  stroke: rgba(236, 228, 211, 0.16);
}

.orrery__node {
  fill: #d7ae66;
  filter: drop-shadow(0 0 5px rgba(215, 174, 102, 0.65));
}

.orrery__node.is-teal {
  fill: #8ac5b9;
  filter: drop-shadow(0 0 5px rgba(138, 197, 185, 0.55));
}

.orrery__planet {
  fill: url(#orrery-planet);
}

.orrery__planet.is-muted {
  fill: #c8bda7;
}

.orrery__planet-glow {
  fill: rgba(138, 197, 185, 0.13);
}

.orrery__planet-ring {
  fill: none;
  stroke: rgba(236, 228, 211, 0.42);
  stroke-width: 0.8;
}

.orrery__moon {
  fill: #eacb90;
  filter: drop-shadow(0 0 6px rgba(234, 203, 144, 0.7));
}

.orrery__comet path {
  fill: none;
  stroke: url(#orrery-comet);
  stroke-width: 1.1;
  stroke-linecap: round;
  stroke-dasharray: 44 300;
  animation: orrery-comet 11s linear infinite;
}

.orrery__singularity {
  fill: #070b10;
  stroke: rgba(234, 203, 144, 0.85);
  stroke-width: 1.3;
  filter: drop-shadow(0 0 12px rgba(215, 174, 102, 0.6));
}

.orrery__accretion {
  fill: none;
  stroke: rgba(234, 203, 144, 0.72);
  stroke-width: 1;
  stroke-dasharray: 3 2;
}

.orrery__heart {
  filter: drop-shadow(0 0 5px rgba(248, 240, 221, 0.9));
}

.orrery__halo {
  transform-origin: 320px 320px;
  animation: orrery-breathe 7s ease-in-out infinite;
}

.orrery__formula {
  fill: rgba(236, 228, 211, 0.43);
  font-family: 'Newsreader', 'Iowan Old Style', Palatino, serif;
  font-size: 12px;
  font-style: italic;
  letter-spacing: 0.03em;
}

.orrery__micro {
  fill: rgba(236, 228, 211, 0.28);
  font-family: 'Inter', sans-serif;
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.28em;
}

.orrery__coordinate {
  fill: rgba(236, 228, 211, 0.24);
  font-family: 'SFMono-Regular', Menlo, monospace;
  font-size: 7.5px;
  letter-spacing: 0.16em;
}

.orrery__staff-lines {
  fill: none;
  stroke: rgba(236, 228, 211, 0.13);
  stroke-width: 0.6;
}

.orrery__score-note ellipse {
  fill: rgba(234, 203, 144, 0.6);
}

.orrery__score-note.is-open ellipse {
  fill: none;
  stroke: rgba(234, 203, 144, 0.52);
  stroke-width: 0.7;
}

.orrery__stem {
  fill: none;
  stroke: rgba(234, 203, 144, 0.48);
  stroke-width: 0.7;
}

.orrery__score-slur {
  fill: none;
  stroke: rgba(234, 203, 144, 0.26);
  stroke-width: 0.7;
}

.orrery__music {
  fill: rgba(236, 228, 211, 0.4);
  font-family: 'Newsreader', 'Iowan Old Style', Palatino, serif;
  font-size: 9.5px;
  font-style: italic;
  letter-spacing: 0.08em;
}

.orrery__rotor,
.orrery__orbit {
  transform-origin: 320px 320px;
}

.orrery__rotor--a {
  animation: orrery-spin 190s linear infinite;
}

.orrery__rotor--b {
  animation: orrery-spin 140s linear infinite reverse;
}

.orrery__orbit {
  animation: orrery-spin var(--duration, 60s) linear infinite;
  animation-delay: var(--delay, 0s);
}

@keyframes orrery-spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes orrery-breathe {
  0%,
  100% {
    opacity: 0.65;
    transform: scale(0.94);
  }
  50% {
    opacity: 1;
    transform: scale(1.06);
  }
}

@keyframes orrery-comet {
  from {
    stroke-dashoffset: 344;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .orrery__rotor,
  .orrery__orbit,
  .orrery__halo,
  .orrery__comet path {
    animation: none;
  }
}

@media (max-width: 900px) {
  .orrery__formula {
    font-size: 11px;
  }
}
</style>
