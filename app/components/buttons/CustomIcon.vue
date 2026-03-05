<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useIsActivePath } from "~/composables/useIsActivePath";
import type { TCssSize, TNumberLike } from "../../../types/cms";

const props = defineProps<{
  // required
  icon: string;
  link?: string;

  // optional
  iconHover?: string;
  iconActive?: string;
  preventClick?: boolean;
  heightIcon?: TNumberLike;
  label?: string;

  // optional styling
  iconColor?: string;
  bgColor?: string;
  paddingIcon?: TCssSize;
}>();

const emit = defineEmits<{
  (e: "click", evt: MouseEvent): void;
}>();

const { isActivePath } = useIsActivePath();

const hasLink = computed(() => Boolean(props.link));

const isRouteActive = computed(() =>
  props.link ? isActivePath(props.link) : false,
);
const isHover = ref(false);

const currentIcon = computed(() => {
  if (!isHover.value && !isRouteActive.value) return props.icon;
  if (isHover.value) return props.iconHover ?? props.icon;
  if (isRouteActive.value) return props.iconActive ?? props.icon;
  return props.icon;
});

const preventClickAlert = (e: MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
  alert("This page/link/element does not exist yet.");
};

const handleClick = (e: MouseEvent) => {
  if (props.preventClick) {
    preventClickAlert(e);
    return;
  }

  if (!hasLink.value) {
    emit("click", e);
  }
};

const heightIconFormatted = useFormatNumber(props.heightIcon, 30);
const paddingIconFormatted = useFormatCssSize(() => props.paddingIcon);

const wrapperComputedStyle = computed(() => {
  if (!props.bgColor) return undefined;

  return {
    background: props.bgColor,
    width: `${heightIconFormatted.value}px`,
    height: `${heightIconFormatted.value}px`,
    "--paddingIcon": paddingIconFormatted.value,
    boxSizing: "border-box",
  } as const;
});

const iconComputedStyle = computed(() => {
  return {
    ...(props.iconColor ? { color: props.iconColor } : {}),
    "--paddingIcon": paddingIconFormatted.value,
  } as const;
});
</script>

<template>
  <NuxtLink v-if="hasLink" :to="link!" custom v-slot="{ href, navigate }">
    <a
      :href="href"
      class="iconBtn"
      :aria-label="label"
      @click="(e) => (preventClick ? preventClickAlert(e) : navigate(e))"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
      @focus="isHover = true"
      @blur="isHover = false"
    >
      <span
        v-if="bgColor"
        class="wrapperIconStyle"
        :style="wrapperComputedStyle"
      >
        <Icon
          :icon="currentIcon"
          :height="heightIconFormatted"
          :style="iconComputedStyle"
        />
      </span>

      <Icon
        v-else
        :icon="currentIcon"
        :height="heightIconFormatted"
        :style="iconComputedStyle"
      />
    </a>
  </NuxtLink>

  <button
    v-else
    type="button"
    class="iconBtn"
    :aria-label="label"
    @click="handleClick"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    @focus="isHover = true"
    @blur="isHover = false"
  >
    <span v-if="bgColor" class="wrapperIconStyle" :style="wrapperComputedStyle">
      <Icon
        :icon="currentIcon"
        :height="heightIconFormatted"
        :style="iconComputedStyle"
      />
    </span>

    <Icon
      v-else
      :icon="currentIcon"
      :height="heightIconFormatted"
      :style="iconComputedStyle"
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

  > svg {
    padding: var(--paddingIcon, 0);
  }
}
</style>
