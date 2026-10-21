<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import BlackHoleArt from './BlackHoleArt.vue'

interface HomeHeroCopy {
  eyebrow?: string
  name?: string
  title?: string
  quote?: string
  quoteLabel?: string
  quoteLink?: string
  lead?: string
  primaryText?: string
  primaryLink?: string
  secondaryText?: string
  secondaryLink?: string
}

const fallback: Required<HomeHeroCopy> = {
  eyebrow: 'A personal notebook · Op. I',
  name: "Chasse_neige's",
  title: 'Personal Page',
  quote: 'Chasse-neige in B♭ minor',
  quoteLabel: 'Now playing · Franz Liszt',
  quoteLink:
    'https://classical.music.apple.com/us/recording/franz-liszt-1811-pp48-1440779332',
  lead: 'A living notebook of mathematics, physics, and code — every derivation, lecture, and project, one click away.',
  primaryText: 'Browse notes',
  primaryLink: '/physics/',
  secondaryText: 'View on GitHub',
  secondaryLink: 'https://github.com/12chasse-neige/notes'
}

const { frontmatter } = useData()
const copy = computed<Required<HomeHeroCopy>>(() => ({
  ...fallback,
  ...((frontmatter.value.homeHero as HomeHeroCopy | undefined) ?? {})
}))

const hero = ref<HTMLElement | null>(null)
let frame = 0

// Sparkles have no semantic meaning; they only catch the light.
const sparkles = Array.from({ length: 22 }, (_, index) => {
  const a = Math.sin(index * 12.9898) * 43758.5453
  const b = Math.sin(index * 78.233 + 1.7) * 12345.6789
  return {
    left: `${Math.abs(a % 1) * 100}%`,
    top: `${Math.abs(b % 1) * 72}%`,
    size: `${1 + (index % 3) * 0.75}px`,
    delay: `${(index % 9) * 0.7}s`,
    duration: `${4 + (index % 5)}s`
  }
})

function onPointerMove(event: PointerEvent) {
  const element = hero.value
  if (!element || event.pointerType === 'touch') return

  const rect = element.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    const nx = x / rect.width - 0.5
    const ny = y / rect.height - 0.5
    element.style.setProperty('--light-x', `${x}px`)
    element.style.setProperty('--light-y', `${y}px`)
    element.style.setProperty('--light-angle', `${-28 + nx * 54 + ny * 20}deg`)
    element.style.setProperty('--drift-x', `${(x / rect.width - 0.5) * 16}px`)
    element.style.setProperty('--drift-y', `${(y / rect.height - 0.5) * 12}px`)
  })
}

onMounted(() => {
  if (typeof window === 'undefined') return
  const finePointer = window.matchMedia('(pointer: fine)').matches
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (finePointer && !reduced) {
    hero.value?.addEventListener('pointermove', onPointerMove, { passive: true })
  }
})

onUnmounted(() => {
  cancelAnimationFrame(frame)
  hero.value?.removeEventListener('pointermove', onPointerMove)
})
</script>

<template>
  <section ref="hero" class="home-hero" aria-labelledby="home-hero-title">
    <div class="home-hero__sky" aria-hidden="true">
      <div class="home-hero__grid" />
      <span
        v-for="(sparkle, index) in sparkles"
        :key="index"
        class="home-hero__sparkle"
        :style="{
          left: sparkle.left,
          top: sparkle.top,
          width: sparkle.size,
          height: sparkle.size,
          animationDelay: sparkle.delay,
          animationDuration: sparkle.duration
        }"
      />
    </div>
    <div class="home-hero__lighting" aria-hidden="true" />

    <div class="home-hero__inner">
      <div class="home-hero__copy">
        <p class="home-hero__kicker">
          <span class="home-hero__kicker-line" />
          {{ copy.eyebrow }}
        </p>

        <h1 id="home-hero-title" class="home-hero__title">
          <span class="home-hero__name">{{ copy.name }}</span>
          <span class="home-hero__page">{{ copy.title }}</span>
        </h1>

        <a
          class="home-hero__quote"
          :href="copy.quoteLink"
          target="_blank"
          rel="noopener"
          :aria-label="`Listen to ${copy.quote} on Apple Music`"
        >
          <span class="home-hero__note" aria-hidden="true">♪</span>
          <span class="home-hero__quote-body">
            <span class="home-hero__quote-label">{{ copy.quoteLabel }}</span>
            <span class="home-hero__quote-text">{{ copy.quote }}</span>
          </span>
          <span class="home-hero__equalizer" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
        </a>

        <p class="home-hero__lead">{{ copy.lead }}</p>

        <div class="home-hero__actions">
          <a class="home-hero__button home-hero__button--primary" :href="withBase(copy.primaryLink)">
            {{ copy.primaryText }}
            <span class="home-hero__button-arrow" aria-hidden="true">→</span>
          </a>
          <a
            class="home-hero__button home-hero__button--ghost"
            :href="copy.secondaryLink"
            target="_blank"
            rel="noopener"
          >
            {{ copy.secondaryText }}
            <span class="home-hero__button-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        <p class="home-hero__meta">
          <span class="home-hero__meta-item">Mathematics</span>
          <span class="home-hero__meta-dot" aria-hidden="true">·</span>
          <span class="home-hero__meta-item">Physics</span>
          <span class="home-hero__meta-dot" aria-hidden="true">·</span>
          <span class="home-hero__meta-item">Code</span>
          <span class="home-hero__meta-sep" aria-hidden="true" />
          <span class="home-hero__meta-item is-muted">Op. I — MMXXVI</span>
        </p>
      </div>

      <div class="home-hero__art" aria-hidden="true">
        <BlackHoleArt />
      </div>
    </div>

    <div class="home-hero__foot">
      <div class="home-hero__foot-inner">
        <span class="home-hero__foot-label">Études from the quiet hours</span>
        <span class="home-hero__foot-mark" aria-hidden="true">✦</span>
        <a class="home-hero__scroll" href="#collections">
          Enter the repertoire
          <span class="home-hero__scroll-arrow" aria-hidden="true">↓</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-hero {
  --hero-rgb: 33, 31, 26;
  --hero-base-rgb: 245, 240, 229;
  --hero-ink: #211f1a;
  --hero-muted: rgba(var(--hero-rgb), 0.7);
  --hero-faint: rgba(var(--hero-rgb), 0.5);
  --hero-gold: #91652d;
  --hero-line: rgba(var(--hero-rgb), 0.12);
  --light-x: 72%;
  --light-y: 40%;
  --light-angle: -28deg;
  --drift-x: 0px;
  --drift-y: 0px;

  position: relative;
  display: flex;
  flex-direction: column;
  min-height: min(100svh, 940px);
  overflow: clip;
  border-bottom: 1px solid rgba(215, 174, 102, 0.22);
  background: linear-gradient(124deg, #eee8db 0%, #f9f5eb 38%, #e6decd 100%);
  color: var(--hero-ink);
  padding-top: calc(var(--vp-nav-height) + clamp(4.5rem, 8vw, 7.5rem));
  isolation: isolate;
}

.home-hero::before {
  position: absolute;
  inset: 0;
  z-index: -3;
  background: url('/art/starfield.svg') center / cover no-repeat;
  display: none;
  content: '';
  opacity: 0.72;
  -webkit-mask-image: radial-gradient(85% 86% at 62% 34%, #000 20%, transparent 92%);
  mask-image: radial-gradient(85% 86% at 62% 34%, #000 20%, transparent 92%);
}

.home-hero::after {
  position: absolute;
  inset: 0;
  z-index: -2;
  background: linear-gradient(124deg, rgba(32, 46, 44, .035), transparent 40%, rgba(83, 60, 30, .055));
  content: '';
  pointer-events: none;
}

.home-hero__sky {
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.home-hero__grid {
  position: absolute;
  inset: -10% -10% 0;
  background-image:
    linear-gradient(rgba(var(--hero-rgb), 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(var(--hero-rgb), 0.045) 1px, transparent 1px);
  background-size: 92px 92px;
  -webkit-mask-image: radial-gradient(70% 68% at 63% 42%, #000, transparent 78%);
  mask-image: radial-gradient(70% 68% at 63% 42%, #000, transparent 78%);
  opacity: 0.55;
  transform: perspective(900px) rotateX(8deg);
  transform-origin: center top;
}

.home-hero__sparkle {
  position: absolute;
  border-radius: 50%;
  background: #f4eddf;
  box-shadow: 0 0 7px rgba(var(--hero-rgb), 0.8);
  animation: hero-twinkle 5s ease-in-out infinite;
  opacity: 0.4;
}

.home-hero__lighting {
  position: absolute;
  left: var(--light-x);
  top: var(--light-y);
  width: 300vmax;
  height: 300vmax;
  z-index: 0;
  background: linear-gradient(90deg, rgba(39, 48, 47, .07) calc(50% - 44vw), transparent calc(50% - 28vw), rgba(255, 249, 227, .48) 50%, transparent calc(50% + 28vw), rgba(83, 60, 30, .06) calc(50% + 44vw));
  transform: translate(-50%, -50%) rotate(var(--light-angle));
  transition: left .18s ease-out, top .18s ease-out, transform .35s ease-out;
  pointer-events: none;
}

:global(.dark .home-hero) {
  --hero-rgb: 244, 237, 223;
  --hero-base-rgb: 9, 14, 21;
  --hero-ink: #f4eddf;
  --hero-gold: #d7ae66;
  --hero-muted: rgba(var(--hero-rgb), .65);
  --hero-faint: rgba(var(--hero-rgb), .4);
  background: linear-gradient(124deg, #101e23 0%, #090e15 44%, #1d2023 76%, #26231f 100%);
}

:global(.dark .home-hero::before) { display: block; }
:global(.dark .home-hero::after) {
  background: linear-gradient(124deg, rgba(2, 7, 13, .12) 20%, transparent 52%, rgba(2, 7, 13, .3));
}
:global(.dark .home-hero__lighting) {
  background: linear-gradient(90deg, rgba(1, 5, 10, .16) calc(50% - 44vw), transparent calc(50% - 28vw), rgba(216, 179, 112, .12) 50%, transparent calc(50% + 28vw), rgba(1, 5, 10, .16) calc(50% + 44vw));
}
:global(html:not(.dark) .home-hero__kicker),
:global(html:not(.dark) .home-hero__quote-label),
:global(html:not(.dark) .home-hero__meta),
:global(html:not(.dark) .home-hero__meta-item.is-muted) { color: var(--hero-muted); }
:global(html:not(.dark) .home-hero__button--primary) { color: #fff9ee; }
:global(html:not(.dark) .home-hero__sparkle) { opacity: .12; animation: none; background: var(--hero-gold); box-shadow: none; }

.home-hero__inner {
  position: relative;
  z-index: 1;
  flex: 1;
  align-content: center;
  display: grid;
  grid-template-columns: minmax(0, 1.03fr) minmax(0, 0.97fr);
  align-items: center;
  gap: clamp(1rem, 3vw, 3rem);
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 64px);
}

.home-hero__copy {
  min-width: 0;
  padding-bottom: 1.5rem;
}

.home-hero__kicker {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin: 0 0 1.5rem;
  color: rgba(var(--hero-rgb), 0.52);
  font-family: var(--font-sans);
  font-size: 9.5px;
  font-weight: 650;
  letter-spacing: 0.26em;
  line-height: 1.5;
  text-transform: uppercase;
  animation: hero-rise 0.9s var(--ease-out) 0.05s both;
}

.home-hero__kicker-line {
  width: 38px;
  height: 1px;
  background: rgba(215, 174, 102, 0.65);
}

.home-hero__title {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 500;
  line-height: 0.88;
  letter-spacing: -0.035em;
  text-wrap: balance;
}

.home-hero__name {
  display: block;
  color: var(--hero-ink);
  font-size: clamp(3.7rem, 6.2vw, 5.95rem);
  white-space: nowrap;
  animation: hero-rise 1s var(--ease-out) 0.14s both;
}

.home-hero__name::after {
  content: '✦';
  display: inline-block;
  margin-left: 0.12em;
  color: var(--hero-gold);
  font-family: var(--font-serif);
  font-size: 0.16em;
  font-style: normal;
  vertical-align: super;
  opacity: 0.8;
}

.home-hero__page {
  display: block;
  margin-top: 0.06em;
  padding-left: 0.06em;
  color: var(--hero-gold);
  font-size: clamp(2.75rem, 4.7vw, 4.15rem);
  font-style: italic;
  font-weight: 300;
  letter-spacing: -0.025em;
  animation: hero-rise 1s var(--ease-out) 0.24s both;
}

.home-hero__quote {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  max-width: 23rem;
  margin-top: 1.7rem;
  padding: 0.52rem 0.85rem 0.52rem 0.55rem;
  border: 1px solid rgba(215, 174, 102, 0.2);
  border-radius: 3px;
  background: linear-gradient(90deg, rgba(215, 174, 102, 0.08), rgba(255, 255, 255, 0.02));
  color: rgba(var(--hero-rgb), 0.82);
  text-decoration: none;
  animation: hero-rise 0.9s var(--ease-out) 0.36s both;
  transition:
    border-color 0.3s var(--ease-out),
    background-color 0.3s var(--ease-out),
    transform 0.3s var(--ease-out);
}

.home-hero__quote:hover {
  border-color: rgba(215, 174, 102, 0.6);
  background-color: rgba(215, 174, 102, 0.08);
  transform: translateY(-1px);
}

.home-hero__note {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(215, 174, 102, 0.42);
  border-radius: 50%;
  color: var(--hero-gold);
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-style: normal;
  line-height: 1;
  transition:
    background-color 0.3s var(--ease-out),
    transform 0.3s var(--ease-spring);
}

.home-hero__quote:hover .home-hero__note {
  background: rgba(215, 174, 102, 0.14);
  transform: rotate(-10deg);
}

.home-hero__quote-body {
  display: flex;
  flex-direction: column;
  gap: 0.18rem;
  min-width: 0;
}

.home-hero__quote-label {
  color: rgba(var(--hero-rgb), 0.42);
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.17em;
  line-height: 1.25;
  text-transform: uppercase;
}

.home-hero__quote-text {
  color: rgba(var(--hero-rgb), 0.88);
  font-family: var(--font-serif);
  font-size: 1rem;
  font-style: italic;
  letter-spacing: 0.005em;
  line-height: 1.2;
  transition: color 0.3s var(--ease-out);
}

.home-hero__quote:hover .home-hero__quote-text {
  color: var(--hero-gold);
}

.home-hero__equalizer {
  display: flex;
  flex: none;
  align-items: flex-end;
  gap: 2px;
  width: 16px;
  height: 17px;
  margin-left: 0.25rem;
}

.home-hero__equalizer i {
  display: block;
  width: 2px;
  border-radius: 1px;
  background: var(--hero-gold);
  opacity: 0.55;
  transform-origin: bottom center;
  animation: hero-equalize 1.35s ease-in-out infinite;
}

.home-hero__equalizer i:nth-child(1) {
  height: 7px;
  animation-delay: -0.15s;
}

.home-hero__equalizer i:nth-child(2) {
  height: 15px;
  animation-delay: -0.75s;
}

.home-hero__equalizer i:nth-child(3) {
  height: 10px;
  animation-delay: -0.4s;
}

.home-hero__equalizer i:nth-child(4) {
  height: 6px;
  animation-delay: -1s;
}

.home-hero__quote:hover .home-hero__equalizer i {
  opacity: 0.9;
}

@keyframes hero-equalize {
  0%,
  100% {
    transform: scaleY(0.35);
  }
  50% {
    transform: scaleY(1);
  }
}

.home-hero__lead {
  max-width: 31rem;
  margin: 1.35rem 0 0;
  color: rgba(var(--hero-rgb), 0.66);
  text-shadow: 0 2px 22px rgba(var(--hero-base-rgb), 0.72);
  font-family: var(--font-serif);
  font-size: 1.06rem;
  line-height: 1.78;
  animation: hero-rise 0.9s var(--ease-out) 0.46s both;
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2.2rem;
  animation: hero-rise 0.9s var(--ease-out) 0.56s both;
}

.home-hero__button {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  min-height: 46px;
  padding: 0 1.3rem;
  border: 1px solid transparent;
  border-radius: 2px;
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    background-color 0.3s var(--ease-out),
    border-color 0.3s var(--ease-out),
    color 0.3s var(--ease-out),
    transform 0.3s var(--ease-out),
    box-shadow 0.3s var(--ease-out);
}

.home-hero__button--primary {
  background: var(--hero-gold);
  color: var(--paper-0);
  box-shadow: 0 12px 30px -18px rgba(215, 174, 102, 0.85);
}

.home-hero__button--primary:hover {
  background: #efd39b;
  color: #120e07;
  transform: translateY(-2px);
  box-shadow: 0 18px 40px -20px rgba(215, 174, 102, 0.95);
}

.home-hero__button--ghost {
  border-color: rgba(var(--hero-rgb), 0.22);
  background: rgba(255, 255, 255, 0.025);
  color: rgba(var(--hero-rgb), 0.78);
}

.home-hero__button--ghost:hover {
  border-color: rgba(215, 174, 102, 0.7);
  background: rgba(215, 174, 102, 0.08);
  color: var(--hero-ink);
  transform: translateY(-2px);
}

.home-hero__button-arrow {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  transition: transform 0.3s var(--ease-out);
}

.home-hero__button:hover .home-hero__button-arrow {
  transform: translateX(3px);
}

.home-hero__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem;
  margin: 2.4rem 0 0;
  color: rgba(var(--hero-rgb), 0.44);
  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.18em;
  line-height: 1.6;
  text-transform: uppercase;
  animation: hero-rise 0.9s var(--ease-out) 0.66s both;
}

.home-hero__meta-dot {
  color: rgba(215, 174, 102, 0.7);
}

.home-hero__meta-sep {
  width: 1px;
  height: 10px;
  margin: 0 0.45rem;
  background: rgba(var(--hero-rgb), 0.16);
}

.home-hero__meta-item.is-muted {
  color: rgba(var(--hero-rgb), 0.3);
}

.home-hero__art {
  position: relative;
  justify-self: center;
  width: min(125%, 760px);
  max-width: none;
  transform: translate3d(var(--drift-x), var(--drift-y), 0);
  transition: transform 0.6s var(--ease-out);
  animation: hero-fade 1.4s var(--ease-out) 0.38s both;
}


.home-hero__foot {
  position: relative;
  z-index: 1;
  margin-top: auto;
  border-top: 1px solid var(--hero-line);
}

.home-hero__foot-inner {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 64px);
  min-height: 62px;
  color: var(--hero-faint);
  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.home-hero__foot-label {
  white-space: nowrap;
}

.home-hero__foot-mark {
  color: var(--hero-gold);
  font-size: 8px;
  opacity: 0.7;
}

.home-hero__scroll {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-left: auto;
  color: rgba(var(--hero-rgb), 0.55);
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.3s var(--ease-out);
}

.home-hero__scroll:hover {
  color: var(--hero-gold);
}

.home-hero__scroll-arrow {
  font-size: 12px;
  transition: transform 0.3s var(--ease-out);
}

.home-hero__scroll:hover .home-hero__scroll-arrow {
  transform: translateY(3px);
}

@keyframes hero-rise {
  from {
    opacity: 0;
    transform: translate3d(0, 24px, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes hero-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes hero-twinkle {
  0%,
  100% {
    opacity: 0.18;
    transform: scale(0.7);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.25);
  }
}

@media (max-width: 1100px) {
  .home-hero__name {
    font-size: clamp(3.2rem, 6.4vw, 4.8rem);
  }

  .home-hero__page {
    font-size: clamp(2.35rem, 4.7vw, 3.5rem);
  }
}

/* Between 901 and 959px the nav is still in normal flow, so the hero must
   not reserve a second nav-height at the top. */
@media (min-width: 901px) and (max-width: 959px) {
  .home-hero {
    padding-top: clamp(3.6rem, 6vw, 5.4rem);
  }
}

@media (max-width: 900px) {
  .home-hero {
    min-height: auto;
    padding-top: clamp(3.4rem, 9vw, 5rem);
    padding-bottom: 0;
  }

  .home-hero__inner {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .home-hero__copy {
    position: relative;
    z-index: 2;
    padding-bottom: 2rem;
  }


  .home-hero__art {
    position: relative;
    justify-self: center;
    width: min(100%, 540px);
    margin-top: -1rem;
    opacity: 1;
    pointer-events: none;
  }

  .home-hero__lead {
    max-width: 28rem;
  }

  .home-hero__foot {
    margin-top: 2.5rem;
  }
}

@media (max-width: 640px) {
  .home-hero {
    padding-top: 2.7rem;
  }

  .home-hero__kicker {
    margin-bottom: 1.15rem;
    font-size: 8.5px;
    letter-spacing: 0.2em;
  }

  .home-hero__kicker-line {
    width: 24px;
  }

  .home-hero__name {
    font-size: clamp(2.7rem, 12.5vw, 3.6rem);
  }

  .home-hero__page {
    font-size: clamp(2.1rem, 9.6vw, 3rem);
  }

  .home-hero__quote {
    width: 100%;
    max-width: 23rem;
    margin-top: 1.35rem;
  }

  .home-hero__quote-text {
    font-size: 0.95rem;
  }

  .home-hero__lead {
    margin-top: 1.1rem;
    font-size: 0.98rem;
    line-height: 1.75;
  }

  .home-hero__actions {
    margin-top: 1.7rem;
  }

  .home-hero__button {
    min-height: 44px;
    padding: 0 1rem;
    font-size: 9px;
    letter-spacing: 0.13em;
  }

  .home-hero__meta {
    margin-top: 1.8rem;
    font-size: 8px;
    letter-spacing: 0.13em;
  }

  .home-hero__meta-sep {
    display: none;
  }

  .home-hero__meta-item.is-muted {
    flex-basis: 100%;
  }

  .home-hero__art {
    width: min(112%, 440px);
    margin: -1rem -6% -2rem;
  }

  .home-hero__foot-inner {
    min-height: 54px;
    font-size: 8px;
    letter-spacing: 0.14em;
  }

  .home-hero__foot-label {
    display: none;
  }

  .home-hero__foot-mark {
    display: none;
  }

  .home-hero__scroll {
    margin-left: 0;
  }
}

@media (max-width: 380px) {
  .home-hero__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .home-hero__button {
    justify-content: space-between;
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-hero__kicker,
  .home-hero__name,
  .home-hero__page,
  .home-hero__quote,
  .home-hero__lead,
  .home-hero__actions,
  .home-hero__meta,
  .home-hero__art,
  .home-hero__sparkle,
  .home-hero__equalizer i {
    animation: none;
  }

  .home-hero__art {
    transform: none;
  }
}
</style>
