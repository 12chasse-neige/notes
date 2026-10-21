<template>
  <figure class="staff-divider" aria-hidden="true">
    <svg viewBox="0 0 760 88" role="presentation">
      <defs>
        <linearGradient
          id="staff-fade"
          x1="0"
          y1="0"
          x2="760"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stop-color="#fff" stop-opacity="0" />
          <stop offset="9%" stop-color="#fff" stop-opacity="1" />
          <stop offset="91%" stop-color="#fff" stop-opacity="1" />
          <stop offset="100%" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <mask id="staff-mask">
          <rect width="760" height="88" fill="url(#staff-fade)" />
        </mask>
      </defs>

      <g mask="url(#staff-mask)">
        <g class="staff-divider__lines">
          <path d="M0 34H760" />
          <path d="M0 42H760" />
          <path d="M0 50H760" />
          <path d="M0 58H760" />
          <path d="M0 66H760" />
        </g>

        <!-- Five flats: the key of B-flat minor. -->
        <g class="staff-divider__key" aria-hidden="true">
          <text x="108" y="56">♭</text>
          <text x="124" y="44">♭</text>
          <text x="140" y="60">♭</text>
          <text x="156" y="48">♭</text>
          <text x="172" y="64">♭</text>
        </g>

        <text class="staff-divider__tempo" x="76" y="26">Presto</text>
        <text class="staff-divider__mark" x="76" y="84">pp</text>

        <g class="staff-divider__notes">
          <g class="staff-divider__note">
            <ellipse cx="292" cy="58" rx="6.4" ry="4.6" transform="rotate(-18 292 58)" />
            <path d="M298.2 56V31" />
          </g>
          <g class="staff-divider__note">
            <ellipse cx="362" cy="50" rx="6.4" ry="4.6" transform="rotate(-18 362 50)" />
            <path d="M368.2 48V23" />
          </g>
          <g class="staff-divider__note is-open">
            <ellipse cx="432" cy="58" rx="6.4" ry="4.6" transform="rotate(-18 432 58)" />
            <path d="M438.2 56V31" />
          </g>
          <g class="staff-divider__note">
            <ellipse cx="502" cy="50" rx="6.4" ry="4.6" transform="rotate(-18 502 50)" />
            <path d="M508.2 48V23" />
          </g>
          <g class="staff-divider__note is-whole">
            <ellipse cx="572" cy="58" rx="7.2" ry="5" transform="rotate(-18 572 58)" />
          </g>
        </g>

        <path class="staff-divider__slur" d="M282 76Q380 8 518 70" />
        <path class="staff-divider__hairpin" d="M292 81L530 76M292 81L530 86" />

        <g class="staff-divider__fermata">
          <path d="M418 21Q432 8 446 21" />
          <circle cx="432" cy="25" r="1.7" />
        </g>

        <text class="staff-divider__mark" x="654" y="38">rit.</text>
      </g>
    </svg>
  </figure>
</template>

<style scoped>
.staff-divider {
  width: 100%;
  margin: 0;
  opacity: 0.88;
}

.staff-divider svg {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}

.staff-divider__lines path {
  fill: none;
  stroke: var(--line-strong);
  stroke-width: 0.85;
  opacity: 0.7;
}

.staff-divider__key text {
  fill: var(--gold);
  font-family: var(--font-serif);
  font-size: 27px;
  opacity: 0.62;
}

.staff-divider__mark {
  fill: var(--ink-3);
  font-family: var(--font-display);
  font-size: 15px;
  font-style: italic;
  letter-spacing: 0.02em;
}

.staff-divider__tempo {
  fill: var(--ink-2);
  font-family: var(--font-display);
  font-size: 16px;
  font-style: italic;
  letter-spacing: 0.02em;
}

.staff-divider__note ellipse {
  fill: var(--gold);
  opacity: 0.82;
}

.staff-divider__note path {
  fill: none;
  stroke: var(--gold);
  stroke-width: 1.15;
  opacity: 0.82;
}

.staff-divider__note.is-open ellipse {
  fill: none;
  stroke: var(--gold);
  stroke-width: 1.05;
}

.staff-divider__note.is-whole ellipse {
  fill: none;
  stroke: var(--gold);
  stroke-width: 1.1;
}

.staff-divider__slur,
.staff-divider__hairpin,
.staff-divider__fermata path {
  fill: none;
  stroke: var(--gold);
  stroke-width: 0.9;
  stroke-linecap: round;
  opacity: 0.34;
}

.staff-divider__fermata circle {
  fill: var(--gold);
  opacity: 0.34;
}

@media (max-width: 640px) {
  .staff-divider {
    opacity: 0.7;
  }

  .staff-divider__mark,
  .staff-divider__tempo {
    font-size: 13px;
  }
}
</style>
