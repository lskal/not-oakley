<script setup lang="ts">
import ContactUsWrapper from "./ContactUsWrapper.vue";
import CopyrightRow from "./CopyrightRow.vue";
import LegalLinksRow from "./LegalLinksRow.vue";
import LinksWrapper from "./LinksWrapper.vue";
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
        <LinksWrapper />
      </div>
      <div class="footerCountry"><FooterCountry /></div>
      <div class="legalLinksRow"><LegalLinksRow /></div>
      <div class="copyrightRow"><CopyrightRow /></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
