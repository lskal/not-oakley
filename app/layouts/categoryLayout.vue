<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
import AppFooter from "../components/footer/AppFooter.vue";
import AppHeader from "../components/header/AppHeader.vue";
import SkipToMainContent from "../components/header/SkipToMainContent.vue";
</script>

<template>
  <div>
    <SkipToMainContent />
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
  <SpeedInsights />
</template>

<style scoped lang="scss">
.main-content {
  &:focus {
    outline: none;
  }
}
</style>
