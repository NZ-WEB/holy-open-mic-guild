<script setup lang="ts">
import { computed } from "vue";
import { assetUrl } from "../utils/asset-url";

const props = defineProps<{ src: string }>();
const source = computed(() => assetUrl(props.src));
</script>

<template>
  <img :src="source" />
</template>
