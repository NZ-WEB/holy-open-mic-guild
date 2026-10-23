<script setup lang="ts">
import { computed } from 'vue'
import { useNav, useSlideContext } from '@slidev/client'
import GradientBackground from '../components/GradientBackground.vue'
import StarField from '../components/StarField.vue'
import SlideChrome from '../components/SlideChrome.vue'
import type { SlideFrameProps } from '../config/gradients'

withDefaults(defineProps<SlideFrameProps>(), {
  variant: 'right',
  showLogo: true,
  showNumbers: true,
})

const { $renderContext } = useSlideContext()
const { isPrintMode } = useNav()
const sharedBackground = computed(() =>
  !isPrintMode.value &&
  ($renderContext.value === 'slide' || $renderContext.value === 'presenter'),
)
</script>

<template>
  <div
    class="slidev-layout deck-slide relative isolate w-full h-full overflow-hidden text-heading"
    :class="sharedBackground ? 'bg-transparent' : 'bg-canvas'"
  >
    <template v-if="!sharedBackground">
      <GradientBackground :variant="variant" />
      <StarField />
    </template>
    <div class="deck-composition relative z-2"><slot /></div>
    <div class="deck-chrome"><SlideChrome :show-logo="showLogo" :show-numbers="showNumbers" /></div>
  </div>
</template>
