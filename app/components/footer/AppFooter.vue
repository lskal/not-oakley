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
      <hr style="margin: 32px 0" />
      <div class="footerLinksRow">
        <ContactUsWrapper />
        <LinksWrapper />
      </div>
      <hr style="margin: 32px 0" />
      <div class="footerCountry"><FooterCountry /></div>
      <hr style="margin: 32px 0" />
      <div class="legalLinksRow"><LegalLinksRow /></div>

      <div class="copyrightRow"><CopyrightRow /></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footerContainer {
  padding: 32px var(--page-gutter);
  background-color: var(--color-background-secondary);

  &:deep(li) {
    list-style-type: none;
  }

  .footerWrapper {
    .footerNews,
    .footerLinksRow {
      display: flex;
      justify-content: space-between;
      font-size: small;
    }
  }

  .copyrightRow {
    padding: 50px 0 30px;
  }
}
</style>
