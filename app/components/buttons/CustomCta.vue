<script setup lang="ts">
import type { TCssSize } from "../../../types/cms";

const props = withDefaults(
  defineProps<{
    // required props
    textValue: string;
    link: string;

    // base  props
    disabled?: boolean;
    ariaLabel?: string;

    // base colors
    borderColor?: string;
    backgroundColor?: string;
    textColor?: string;

    // optional colors
    hoverBorderColor?: string;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;

    disabledBorderColor?: string;
    disabledBackgroundColor?: string;
    disabledTextColor?: string;

    // optional sizes
    margin?: TCssSize;
    padding?: TCssSize;
    borderRadius?: TCssSize;
    borderWidth?: TCssSize;
    borderStyle?: "solid" | "dashed" | "dotted" | "double" | "none";
  }>(),
  {
    disabled: false,

    borderColor: "transparent",
    backgroundColor: "var(--color-background-dark)",
    textColor: "var(--color-text-white)",

    margin: 0,
    padding: "12px 16px",
    borderRadius: "var(--radius)",
    borderWidth: "1px",
    borderStyle: "solid",
  },
);

const isHover = ref(false);

const formattedBorderColor = computed(() => {
  if (props.disabled) return props.disabledBorderColor ?? props.borderColor;
  if (isHover.value) return props.hoverBorderColor ?? props.borderColor;
  return props.borderColor;
});

const formattedBackgroundColor = computed(() => {
  if (props.disabled)
    return props.disabledBackgroundColor ?? props.backgroundColor;
  if (isHover.value) return props.hoverBackgroundColor ?? props.backgroundColor;
  return props.backgroundColor;
});

const formattedTextColor = computed(() => {
  if (props.disabled) return props.disabledTextColor ?? props.textColor;
  if (isHover.value) return props.hoverTextColor ?? props.textColor;
  return props.textColor;
});

const formattedAriaLabel = computed(() => props.ariaLabel ?? props.textValue);

const formattedMargin = useFormatCssSize(props.margin);
const formattedPadding = useFormatCssSize(props.padding);
const formattedBorderRadius = useFormatCssSize(props.borderRadius);
const formattedBorderWidth = useFormatCssSize(props.borderWidth);
</script>

<template>
  <NuxtLink
    :to="disabled ? undefined : link"
    class="customCta"
    :aria-label="formattedAriaLabel"
    :aria-disabled="disabled ? 'true' : undefined"
    :tabindex="disabled ? -1 : 0"
    :style="{
      margin: formattedMargin,
      padding: formattedPadding,
      borderRadius: formattedBorderRadius,
      color: formattedTextColor,
      backgroundColor: formattedBackgroundColor,
      border: `${formattedBorderWidth} ${props.borderStyle} ${formattedBorderColor}`,
    }"
    @click="disabled && $event.preventDefault()"
    @mouseenter="!disabled && (isHover = true)"
    @mouseleave="isHover = false"
    @focus="!disabled && (isHover = true)"
    @blur="isHover = false"
  >
    {{ textValue }}
  </NuxtLink>
</template>

<style scoped>
.customCta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  cursor: pointer;
  text-decoration: none;

  transition: var(--transition-base);
}

.customCta[aria-disabled="true"] {
  cursor: not-allowed;
  opacity: 0.6;
  pointer-events: none;
}
</style>
