<script setup lang="ts">
const props = defineProps<{
  // required
  textValue: string;
  link?: string;
  disabled?: boolean;
  ariaLabel?: string;

  borderColor: string;
  backgroundColor: string;
  textColor: string;

  /* custom state colors */
  hoverBorderColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;

  activeBorderColor?: string;
  activeBackgroundColor?: string;
  activeTextColor?: string;

  disabledBorderColor?: string;
  disabledBackgroundColor?: string;
  disabledTextColor?: string;

  // custom sizing and border radius
  margin?: number | string;
  padding?: number | string;
  borderRadius?: number | string;
}>();
</script>

<template>
  <button>{{ textValue }}</button>
</template>
