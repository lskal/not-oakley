<script setup lang="ts">
import type { NuxtError } from "#app";
import CustomCta from "./components/buttons/CustomCta.vue";
import AppFooter from "./components/footer/AppFooter.vue";
import AppHeader from "./components/header/AppHeader.vue";

const props = defineProps<{ error: NuxtError }>();
</script>

<template>
  <AppHeader />
  <div class="errorWrapper">
    <div class="container">
      <h1>ADVENTURE AWAITS ELSEWHERE</h1>
      <p>We couldn't find the page you were looking for</p>
      <CustomCta
        textValue="Return to the home page →"
        link="/"
        isUppercase
        margin="40px 0 0"
        backgroundColor="white"
        textColor="black"
        borderColor="black"
        borderWidth="2px"
      />
    </div>
  </div>
  <AppFooter />
</template>

<style scoped lang="scss">
.errorWrapper {
  height: 50dvh;
  background: url("/images/imageHDTest4.jpg") top / cover no-repeat;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
</style>
