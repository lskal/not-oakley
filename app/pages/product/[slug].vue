<script setup lang="ts">
const route = useRoute();
const slug = computed(() => String(route.params.slug));

// TODO: set a value in CMS with productLayout
const productLayout = ref<"hero-square" | "hero-16x9" | "hero-4x5">(
  "hero-16x9",
);

const layoutClass = computed(() => productLayout.value);
</script>

<template>
  <div class="container">
    <div class="mainWrapper">
      <div class="productImagesWrapper" :class="layoutClass">
        <!-- HERO IMAGE -->
        <div class="productImage hero">
          <RandomImage height="1600" width="1600" topic="sunglasses" />
        </div>
        <!-- SECONDARY IMAGES -->
        <div class="productImage">
          <RandomImage height="1200" width="1200" topic="sunglasses" />
        </div>
        <div class="productImage">
          <RandomImage height="1201" width="1201" topic="sunglasses" />
        </div>
        <div class="productImage">
          <RandomImage height="1202" width="1202" topic="sunglasses" />
        </div>
        <div class="productImage">
          <RandomImage height="1203" width="1203" topic="sunglasses" />
        </div>
      </div>

      <div class="productDetails">
        <h1>Product: {{ slug }}</h1>
      </div>
    </div>

    <div class="other"></div>
  </div>
</template>

<style scoped lang="scss">
.container {
  .mainWrapper {
    display: flex;
    padding-right: var(--page-gutter);
    gap: 32px;
  }

  .other {
    padding-left: var(--page-gutter);
    padding-right: var(--page-gutter);
  }

  .productImagesWrapper {
    width: 75%;
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
    align-content: center;

    &.hero-square .productImage.hero {
      aspect-ratio: 1 / 1;
    }

    &.hero-16x9 .productImage.hero {
      aspect-ratio: 16 / 9;
    }

    &.hero-4x5 .productImage.hero {
      aspect-ratio: 4 / 5;
    }
  }

  .productImage {
    overflow: hidden;
    aspect-ratio: 1 / 1;

    &.hero {
      grid-column: 1 / -1;
    }
  }

  .productImage :deep(img) {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  .productDetails {
    width: 25%;
  }
}
</style>
