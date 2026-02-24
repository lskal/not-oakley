<script setup lang="ts">
import HomePageBanner from "../components/homepage/HomePageBanner.vue";
</script>

<template>
  <div class="container">
    <HomePageBanner
      :bannerObject="[
        {
          id: 1,
          backGroundImage: 'images/imageHDTest.jpg',
          preTitle: 'first preTitle',
          title: 'firts title',
          subtitle: 'fitst subtitle',
          layoutBanner: 'left',
          ctaBannerValues: [
            {
              id: 1,
              ctaValue: 'sunglasses cta',
              ctaLink: '/category/sunglasses',
            },
            {
              id: 2,
              ctaValue: 'prescription cta',
              ctaLink: '/category/prescription',
            },
          ],
        },
        {
          id: 2,
          backGroundImage: 'images/imageHDTest2.jpg',
          preTitle: 'second preTitle',
          title: 'second title',
          subtitle: 'second subtitle',
          layoutBanner: 'right',
          ctaBannerValues: [
            { id: 3, ctaValue: 'apparel cta', ctaLink: '/category/apparel' },
          ],
        },
      ]"
    />
    <HomePageBanner
      :bannerObject="[
        {
          id: 3,
          backGroundImage: 'images/imageHDTest3.jpg',
          preTitle: 'pre title',
          title: 'title',
          subtitle: 'subtitle',
          layoutBanner: 'center',
          ctaBannerValues: [
            { id: 5, ctaValue: 'apparel cta', ctaLink: '/category/apparel' },
            {
              id: 6,
              ctaValue: 'accessories cta',
              ctaLink: '/category/accessories',
            },
          ],
        },
      ]"
    />
  </div>
</template>

<style scoped lang="scss">
// padding-left: var(--page-gutter);
// padding-right: var(--page-gutter);
</style>
