<script setup lang="ts">
import ContactUsWrapper from "./ContactUsWrapper.vue";
import NewsletterWrapper from "./NewsletterWrapper.vue";
import SocialWrapper from "./SocialWrapper.vue";
</script>

<template>
  <div class="footerContainer">
    <div class="footerWrapper">
      <div class="footerNews">
        <NewsletterWrapper />
        <SocialWrapper />
      </div>
      <div class="footerLinksRow">
        <ContactUsWrapper />
      </div>
      <div class="footerCountry">footerCountry</div>
      <div class="legalLinksRow">legalLinksRow</div>
      <div class="copyrightRow">copyrightRow</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  border: 1px solid tomato;
}

.footerContainer {
  padding-left: var(--page-gutter);
  padding-right: var(--page-gutter);
  background-color: var(--color-background-secondary);

  .footerWrapper {
    .footerNews,
    .footerLinksRow {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
