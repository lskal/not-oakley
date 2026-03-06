<script setup lang="ts">
import type { TCssSize } from "../../../types/cms";
import { useCtaStyles } from "~/composables/useCtaStyles";

const props = withDefaults(
  defineProps<{
    // required props
    textValue: string;

    // base  props
    disabled?: boolean;
    ariaLabel?: string;
    isUppercase?: boolean;

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
    typeButton?: "button" | "submit" | "reset";
  }>(),
  {
    disabled: false,
    isUppercase: false,

    borderColor: "transparent",
    backgroundColor: "var(--color-background-dark)",
    textColor: "var(--color-text-white)",

    margin: 0,
    padding: "0 24px",
    borderRadius: "var(--radius)",
    borderWidth: "1px",
    borderStyle: "solid",

    typeButton: "button",
  },
);

const { isHover, formattedAriaLabel, formattedTextValue, styleObj } =
  useCtaStyles(props);
</script>

<template>
  <button
    :type="typeButton"
    class="customCta"
    :disabled="disabled"
    :aria-label="formattedAriaLabel"
    :aria-disabled="disabled ? 'true' : undefined"
    :tabindex="disabled ? -1 : 0"
    :style="styleObj"
    @mouseenter="!disabled && (isHover = true)"
    @mouseleave="isHover = false"
    @focus="!disabled && (isHover = true)"
    @blur="isHover = false"
  >
    {{ formattedTextValue }}
  </button>
</template>

<style scoped>
.customCta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  font-size: 14px;
  font-weight: 700;
  height: 56px;

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
