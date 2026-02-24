<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useIsActivePath } from "~/composables/useIsActivePath";
import type { TNumberLike } from "../../../types/cms";

const props = defineProps<{
  icon: string;
  iconHover: string;
  iconActive: string;
  link?: string;
  preventClick?: boolean;
  heightIcon?: TNumberLike;
  label?: string;
}>();

// active path logic
const { isActivePath } = useIsActivePath();

const isRouteActive = computed(() => {
  if (!props.link) return false;
  return isActivePath(props.link);
});

// hover logic
const isHover = ref(false);

// icon value
const currentIcon = computed(() => {
  if (!isHover.value && !isRouteActive.value) return props.icon;
  if (isHover.value) return props.iconHover;
  if (isRouteActive.value) return props.iconActive;
});

// page not exist yet
const preventClickAlert = (e: MouseEvent) => {
  if (props.preventClick) {
    alert("This page/link/element does not exist yet.");
  }
};

// makes sure heightIcon is formatted as number
const heightIconFormatted = useFormatNumber(props.heightIcon);
</script>

<template>
  <NuxtLink
    v-if="link && !preventClick"
    :to="link"
    class="iconBtn"
    :aria-label="label"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    @focus="isHover = true"
    @blur="isHover = false"
  >
    <Icon
      v-if="currentIcon"
      :icon="currentIcon"
      :height="heightIconFormatted"
    />
  </NuxtLink>

  <button
    v-else
    type="button"
    class="iconBtn"
    :aria-label="label"
    @click="preventClickAlert"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    @focus="isHover = true"
    @blur="isHover = false"
  >
    <Icon
      v-if="currentIcon"
      :icon="currentIcon"
      :height="heightIconFormatted"
    />
  </button>
</template>

<style scoped>
.iconBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  background: transparent;
}
</style>
