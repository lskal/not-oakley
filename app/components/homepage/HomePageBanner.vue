<script setup lang="ts">
import type { TBannerContainer } from "../../../types/cms";
import CustomCta from "../buttons/CustomCta.vue";

const props = defineProps<{
  bannerObject?: TBannerContainer;
}>();

const layoutBanner = computed(() => {
  return props.bannerObject && props.bannerObject.length > 1
    ? "doubleLayout"
    : "singleLayout";
});
</script>

<template>
  <div class="bannerWrapper" :class="layoutBanner">
    <div
      v-for="banner in bannerObject"
      :key="banner.id"
      class="bannerBackgroundImage"
      :style="{
        backgroundImage: banner?.backGroundImage
          ? `url(${banner.backGroundImage} ) `
          : `url('images/imageHDTest.jpg')`,
      }"
    >
      <div
        class="bannerCtaWrapper"
        :class="`pos-${banner.layoutBanner ?? 'center'}`"
      >
        <div v-if="banner.preTitle" class="preTitleContainer">
          {{ banner.preTitle }}
        </div>

        <div v-if="banner.title" class="titleContainer">{{ banner.title }}</div>

        <div v-if="banner.subtitle" class="subtitleContainer">
          {{ banner.subtitle }}
        </div>

        <div v-if="banner.ctaBannerValues?.length" class="ctaList">
          <div v-for="cta in banner.ctaBannerValues" :key="cta.id">
            <CustomCta
              :textValue="cta.ctaValue ?? ''"
              :link="cta.ctaLink ?? ''"
              backgroundColor="var(--color-accent)"
              hoverBackgroundColor="tomato"
              hoverTextColor="var(--color-text-primary)"
              hoverBorderColor="var(--color-text-primary)"
              borderWidth="5px"
              borderStyle="solid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bannerWrapper {
  &.doubleLayout {
    display: flex;
    flex-wrap: wrap;

    .bannerBackgroundImage {
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 100%;

      @media (min-width: 768px) {
        flex-basis: 50%;
      }
      @media (min-width: 1200px) {
        flex-basis: 35%;
      }
    }
  }

  .bannerBackgroundImage {
    position: relative;
    height: 95dvh;
    // backgroung image url is managed by parent
    background: center / cover no-repeat;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.3);
      z-index: 1;
      pointer-events: none;
    }

    .bannerCtaWrapper {
      position: absolute;
      bottom: 32px;
      z-index: 2;

      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      &.pos-left {
        left: var(--page-gutter);
        transform: none;
        align-items: flex-start;

        .ctaList {
          align-items: start;
        }
      }

      &.pos-center {
        left: 50%;
        transform: translateX(-50%);
        align-items: center;

        .ctaList {
          align-items: center;
        }
      }

      &.pos-right {
        right: var(--page-gutter);
        left: auto;
        transform: none;
        align-items: flex-end;

        .ctaList {
          align-items: end;
        }
      }

      .ctaList {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
    }
  }
}
</style>
