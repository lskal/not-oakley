<script setup lang="ts">
import HomePageBanner from "../components/homepage/HomePageBanner.vue";
</script>

<template>
  <div class="container">
    <h1 class="titleMaybe">Welcome to the homepage</h1>
    <HomePageBanner />
  </div>
</template>

<style scoped lang="scss">
.titleMaybe {
  padding-left: var(--page-gutter);
  padding-right: var(--page-gutter);
}
</style>
