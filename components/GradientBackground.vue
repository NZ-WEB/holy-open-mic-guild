<script setup lang="ts">
import { computed, shallowRef, watch } from "vue";
import type { CSSProperties } from "vue";
import { gradientVariants } from "../config/gradients";
import type { GradientSpot, GradientVariant } from "../config/gradients";

const props = withDefaults(
  defineProps<{ variant?: GradientVariant; animated?: boolean }>(),
  {
    variant: "right",
    animated: false,
  },
);

// Two permanent slots: a secondary glow, then the dominant glow above it.
// A disappearing spot retains its geometry and fades in place.
function slots(
  variant: GradientVariant,
): readonly (GradientSpot | undefined)[] {
  const preset = gradientVariants[variant] ?? gradientVariants.right;
  return [preset.length > 1 ? preset[0] : undefined, preset.at(-1)];
}

const initial = slots(props.variant);
const spots = shallowRef<readonly GradientSpot[]>([
  initial[0] ?? { ...gradientVariants["left"][0], opacity: 0 },
  initial[1] ?? { ...gradientVariants.right[0], opacity: 0 },
]);

watch(
  () => props.variant,
  (variant) => {
    spots.value = slots(variant).map(
      (spot, index) => spot ?? { ...spots.value[index], opacity: 0 },
    );
  },
  { flush: "sync" },
);

function spotStyle(spot: GradientSpot): CSSProperties {
  const color = spot.color.join(", ");
  const style: CSSProperties = {
    transform: `translate(${(spot.x / 1920) * 100}%, ${(spot.y / 1080) * 100}%) scale(${spot.width / 1920}, ${spot.height / 1080})`,
    opacity: spot.opacity,
  };
  spot.stops.forEach(([position, alpha], index) => {
    style[`--deck-glow-color-${index}`] = `rgba(${color}, ${alpha})`;
    style[`--deck-glow-stop-${index}`] = `${position}%`;
  });
  return style;
}

const styles = computed(() => spots.value.map(spotStyle));
</script>

<template>
  <div
    class="gradient-background absolute inset-0 overflow-hidden pointer-events-none"
    aria-hidden="true"
    :data-variant="variant"
  >
    <div
      v-for="(style, index) in styles"
      :key="index"
      class="gradient-spot absolute inset-0 origin-top-left"
      :class="{ animated }"
      :style="style"
    />
  </div>
</template>

<style scoped>
@property --deck-glow-color-0 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent;
}
@property --deck-glow-color-1 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent;
}
@property --deck-glow-color-2 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent;
}
@property --deck-glow-color-3 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent;
}
@property --deck-glow-stop-0 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 0%;
}
@property --deck-glow-stop-1 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 42%;
}
@property --deck-glow-stop-2 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 75%;
}
@property --deck-glow-stop-3 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}

.gradient-spot {
  background: radial-gradient(
    ellipse closest-side,
    var(--deck-glow-color-0) var(--deck-glow-stop-0),
    var(--deck-glow-color-1) var(--deck-glow-stop-1),
    var(--deck-glow-color-2) var(--deck-glow-stop-2),
    var(--deck-glow-color-3) var(--deck-glow-stop-3)
  );
}

.gradient-spot.animated {
  transition-property:
    transform, opacity, --deck-glow-color-0, --deck-glow-color-1,
    --deck-glow-color-2, --deck-glow-color-3, --deck-glow-stop-0,
    --deck-glow-stop-1, --deck-glow-stop-2, --deck-glow-stop-3;
  transition-duration: 600ms;
  transition-timing-function: ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .gradient-spot.animated {
    transition: none;
  }
}
</style>
