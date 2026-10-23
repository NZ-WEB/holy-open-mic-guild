<script setup lang="ts">
import type { CSSProperties } from "vue";

withDefaults(defineProps<{ animated?: boolean }>(), { animated: false });

// Fixed positions keep the field identical in playback, previews and exports.
const positions = [
  [5, 25],
  [9, 49],
  [4, 95],
  [27, 78],
  [34, 56],
  [38, 95],
  [34, 6],
  [46, 21],
  [67, 6],
  [76, 22],
  [83, 79],
  [94, 84],
  [15, 12],
  [57, 41],
  [64, 70],
  [48, 82],
  [20, 66],
  [89, 47],
];

const stars = positions.map(([x, y], index) => ({
  id: index,
  style: {
    left: `${x}%`,
    top: `${y}%`,
    width: `${index % 3 === 0 ? 4 : 3}px`,
    height: `${index % 3 === 0 ? 4 : 3}px`,
    "--star-opacity": `${0.55 + (index % 4) * 0.09}`,
    "--star-drift-x": `${index % 2 === 0 ? 7 : -5}px`,
    "--star-drift-y": `${index % 3 === 0 ? -6 : 4}px`,
    "--star-drift-duration": `${26 + (index % 5) * 4}s`,
    "--star-twinkle-duration": `${2 + (index % 4) * 0.4}s`,
    "--star-delay": `${-index * 2.3}s`,
  } satisfies CSSProperties,
}));
</script>

<template>
  <div
    class="star-field absolute inset-0 pointer-events-none overflow-hidden"
    :class="{ animated }"
    aria-hidden="true"
  >
    <span
      v-for="star in stars"
      :key="star.id"
      class="star absolute rounded-full bg-white"
      :style="star.style"
    />
  </div>
</template>

<style scoped>
.star {
  opacity: var(--star-opacity);
  box-shadow:
    0 0 4px 1px rgb(255 255 255 / 50%),
    0 0 10px 2px rgb(255 255 255 / 20%);
}

.animated .star {
  animation:
    star-drift var(--star-drift-duration) ease-in-out var(--star-delay) infinite
      alternate,
    star-twinkle var(--star-twinkle-duration) ease-in-out var(--star-delay)
      infinite alternate;
}

@keyframes star-drift {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(var(--star-drift-x), var(--star-drift-y), 0);
  }
}

@keyframes star-twinkle {
  from {
    opacity: calc(var(--star-opacity) * 0.18);
  }
  to {
    opacity: var(--star-opacity);
  }
}

@media (prefers-reduced-motion: reduce) {
  .animated .star {
    animation: none;
  }
}
</style>
