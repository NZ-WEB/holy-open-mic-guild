<script setup lang="ts">
import { computed } from "vue";
import { useSlideContext } from "@slidev/client";

withDefaults(defineProps<{ showLogo?: boolean; showNumbers?: boolean }>(), {
  showLogo: true,
  showNumbers: true,
});

const { $page } = useSlideContext();
const pageNumber = computed(() => String($page.value).padStart(2, "0"));
const logo = `${import.meta.env.BASE_URL}images/magnit-tech.svg`;
</script>

<template>
  <footer
    v-if="showLogo || showNumbers"
    class="absolute inset-0 z-3 pointer-events-none"
  >
    <PublicImage
      v-if="showLogo"
      class="slide-logo absolute left-gutter bottom-[72px] block max-w-none"
      :src="logo"
      alt="MAGNIT TECH"
      width="92"
      height="32"
    />
    <span
      v-if="showNumbers"
      class="slide-number absolute right-gutter bottom-[66px] w-[30px] box-border px-[3px] text-muted font-body font-normal text-[20px] leading-[26px] text-right tabular-nums"
      aria-label="Номер слайда"
      >{{ pageNumber }}</span
    >
  </footer>
</template>
