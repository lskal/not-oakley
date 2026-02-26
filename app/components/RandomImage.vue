<script setup lang="ts">
import type { TNumberLike } from "../../types/cms";

const props = withDefaults(
  defineProps<{
    height?: TNumberLike;
    width?: TNumberLike;
    topic?: string;
    alt?: string;
  }>(),
  {
    alt: `random generatated image`,
  },
);

const heightFormatted = useFormatNumber(props.height, 1500);
const widthFormatted = useFormatNumber(props.width, 1500);
const topicFormatted = props.topic && `/${props.topic}`;

const formattedSrc = computed(() => {
  /*  https://picsum.photos/800/600?random=1  */
  return `https://loremflickr.com/${widthFormatted.value}/${heightFormatted.value}${topicFormatted}`;
});
const formattedAlt = computed(() =>
  props.topic ? `random ${props.topic} generatated image` : props.alt,
);
</script>

<template>
  <NuxtImg :src="formattedSrc" :alt="formattedAlt" />
</template>
