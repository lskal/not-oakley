<script setup lang="ts">
import CustomCta from "../buttons/CustomCta.vue";
</script>

<template>
  <div class="newsletterWrapper">
    <p class="newsletterCall">
      <b> Join our community and stay up to date: </b>
    </p>
    <div class="inputEmailWrapper">
      <input class="inputEmail" type="email" placeholder="Enter your email" />
      <CustomCta
        textValue="Sign Up"
        :isUppercase="true"
        link="#"
        padding="0 50px"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.newsletterWrapper {
  width: 75%;

  .newsletterCall {
    padding-bottom: 18px;
  }
  .inputEmailWrapper {
    display: flex;
    gap: 20px;

    .inputEmail {
      width: calc(((100vw - 80px) / 3.7) - 2px);
      max-width: 360px;
    }
  }
}
</style>
