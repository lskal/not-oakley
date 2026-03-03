<script setup lang="ts">
const route = useRoute();
const slug = computed(() => String(route.params.slug));

const { data: product } = await useFetch(() => `/api/products/${slug.value}`);

/* pass layout as fetch from db */
const layouts = ["hero-square", "hero-16x9", "hero-4x5"] as const;

const randomLayout = false;
const layoutClass = randomLayout
  ? layouts[useRandomNumber(0, layouts.length - 1)]
  : "hero-square";
</script>

<template>
  <div class="container">
    <div class="mainWrapper">
      <div class="productImagesWrapper" :class="layoutClass">
        <!-- HERO IMAGE -->
        <div class="productImage hero">
          <RandomImage height="1200" width="1200" :topic="product.category" />
        </div>
        <!-- SECONDARY IMAGES -->
        <div class="productImage">
          <NuxtImg
            :src="`https://placehold.co/900x600/981313/e5e5e5?text=${product.name.replace(/\s+/g, '+')}&font=AvenirNext`"
            :alt="`product image ${product.name}`"
          />
        </div>
        <div class="productImage">
          <NuxtImg
            :src="`https://placehold.co/900x600/745527/ceb083?text=${product.name.replace(/\s+/g, '+')}&font=AvenirNext`"
            :alt="`product image ${product.name}`"
          />
        </div>
        <div class="productImage">
          <NuxtImg
            :src="`https://placehold.co/900x600/69c2c9/1f1f24?text=${product.name.replace(/\s+/g, '+')}&font=AvenirNext`"
            :alt="`product image ${product.name}`"
          />
        </div>
        <div class="productImage">
          <NuxtImg
            :src="`https://placehold.co/900x600/8ce55f/1f1f24?text=${product.name.replace(/\s+/g, '+')}&font=AvenirNext`"
            :alt="`product image ${product.name}`"
          />
        </div>
      </div>

      <div class="productDetails">
        <h1>{{ product.name }}</h1>
        <h3>{{ product.category }}</h3>
        <p v-if="product.minPrice">{{ useCurrency(product.minPrice) }}</p>
        <p
          v-if="
            product.category === 'sunglasses' ||
            product.category === 'prescription' ||
            product.category === 'meta'
          "
        >
          Prescription Available
        </p>
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
