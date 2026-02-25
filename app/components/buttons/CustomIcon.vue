<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useIsActivePath } from "~/composables/useIsActivePath";
import type { TNumberLike } from "../../../types/cms";

const props = defineProps<{
  // required
  icon: string;
  link: string;

  // optional
  iconHover?: string;
  iconActive?: string;
  preventClick?: boolean;
  heightIcon?: TNumberLike;
  label?: string;

  // optional styling
  iconColor?: string;
  bgColor?: string;
}>();

const { isActivePath } = useIsActivePath();

const isRouteActive = computed(() => isActivePath(props.link));
const isHover = ref(false);

const currentIcon = computed(() => {
  if (!isHover.value && !isRouteActive.value) return props.icon;
  if (isHover.value) return props.iconHover ?? props.icon;
  if (isRouteActive.value) return props.iconActive ?? props.icon;
  return props.icon;
});

const preventClickAlert = (e: MouseEvent) => {
  e.preventDefault();
  alert("This page/link/element does not exist yet.");
};

const heightIconFormatted = useFormatNumber(props.heightIcon, 30);

const iconColor = computed(() =>
  props.iconColor ? { color: props.iconColor } : undefined,
);

const wrapperComputedStyle = computed(() => {
  if (!props.bgColor) return undefined;
  return {
    background: props.bgColor,
    width: `${heightIconFormatted.value}px`,
    height: `${heightIconFormatted.value}px`,
  } as const;
});
</script>

<template>
  <NuxtLink
    v-if="!preventClick"
    :to="link"
    class="iconBtn"
    :aria-label="label"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    @focus="isHover = true"
    @blur="isHover = false"
  >
    <span v-if="bgColor" class="wrapperIconStyle" :style="wrapperComputedStyle">
      <Icon
        :icon="currentIcon"
        :height="heightIconFormatted"
        :style="iconColor"
      />
    </span>

    <Icon
      v-else
      :icon="currentIcon"
      :height="heightIconFormatted"
      :style="iconColor"
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
    <span v-if="bgColor" class="wrapperIconStyle" :style="wrapperComputedStyle">
      <Icon
        :icon="currentIcon"
        :height="heightIconFormatted"
        :style="iconColor"
      />
    </span>

    <Icon
      v-else
      :icon="currentIcon"
      :height="heightIconFormatted"
      :style="iconColor"
    />
  </button>
</template>

<style scoped lang="scss">
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

.wrapperIconStyle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  line-height: 0;
}
</style>
