<script setup lang="ts">
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps<{
  icon: string;
  iconHover: string;
  heightIcon?: number;
  active?: boolean; //probably not gonna be use becouse i can read the url path and find if active
  label?: string;
}>();

const isHover = ref(false);

const currentIcon = computed(() =>
  //probably props.active not gonna be used beacuse i can read the url path
  props.active || isHover.value ? props.iconHover : props.icon,
);

// TODO: implement active state and the pages in the header
</script>

<template>
  <button
    class="iconBtn"
    type="button"
    :aria-label="label"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    @focus="isHover = true"
    @blur="isHover = false"
  >
    <Icon :icon="currentIcon" :height="heightIcon || 30" />
  </button>
</template>

<style scoped>
.iconBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}
</style>
