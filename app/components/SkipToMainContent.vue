<script setup lang="ts">
const focusMain = () => {
  requestAnimationFrame(() => {
    const el = document.getElementById("main-content");
    el?.focus();
  });
};
</script>

<template>
  <a
    href="#main-content"
    class="skip-link"
    aria-label="Skip to main content"
    @click="focusMain"
  >
    Skip to content
  </a>
</template>

<style scoped>
/* https://mgav.medium.com/simple-skip-to-main-content-code-for-nuxt-tailwindcss-projects-156087aea010 but with no tailwind */
.skip-link {
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  z-index: 99;

  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0, 0, 0, 0);
}

.skip-link:focus {
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  white-space: normal;
  clip: auto;
  padding: 0.5rem 1rem;
}
</style>
