<script setup lang="ts">
import { computed } from "vue";
import { useNav } from "@slidev/client";
import GradientBackground from "./components/GradientBackground.vue";
import StarField from "./components/StarField.vue";
import { resolveGradientVariant } from "./config/gradients";

const { currentFrontmatter, currentLayout, isPrintMode } = useNav();
const variant = computed(() =>
  resolveGradientVariant(currentFrontmatter.value.variant, currentLayout.value),
);
</script>

<template>
  <div
    v-if="!isPrintMode"
    class="persistent-background absolute inset-0 pointer-events-none overflow-hidden bg-canvas"
    aria-hidden="true"
  >
    <GradientBackground :variant="variant" animated />
    <StarField animated />
  </div>
</template>
