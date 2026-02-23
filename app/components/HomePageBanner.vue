<template>
  <div class="BannerWrapper">
    <div class="bannerBackgroundImage">
      <div class="bannerCtaWrapper">
        <NuxtLink class="bannerCta" aria-label="cta" to="/category/sunglasses">
          <p>sunglasses cta</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.BannerWrapper {
  .bannerBackgroundImage {
    position: relative;
    height: 100dvh;
    background: url("images/imageHDTest.jpg") center / cover no-repeat;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.5);
      z-index: 1;
      pointer-events: none;
    }

    .bannerCtaWrapper {
      position: absolute;
      bottom: 5%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;

      display: flex;
      gap: 12px;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      .bannerCta {
        background-color: tomato;
        color: white;
        padding: 16px 32px;
        text-decoration: none;
        cursor: pointer;
        border-radius: var(--radius);
        white-space: nowrap;
      }
    }
  }
}
</style>
