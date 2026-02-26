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
      <hr />
      <div class="footerLinksRow">
        <ContactUsWrapper />
        <LinksWrapper />
      </div>
      <hr />
      <div class="footerCountry"><FooterCountry /></div>
      <hr />
      <div class="legalLinksRow"><LegalLinksRow /></div>
      <hr />
      <div class="copyrightRow"><CopyrightRow /></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footerContainer {
  padding-left: var(--page-gutter);
  padding-right: var(--page-gutter);
  background-color: var(--color-background-secondary);

  &:deep(li) {
    list-style-type: none;
  }

  .footerWrapper {
    .footerNews,
    .footerLinksRow {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
