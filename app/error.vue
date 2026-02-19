<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
</script>

<template>
  <div>
    <h1>{{ error.status }}</h1>
    <h2>{{ error.message }}</h2>
    <h4><NuxtLink to="/">Go back home</NuxtLink></h4>
  </div>
</template>
