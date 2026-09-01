<script setup lang="ts">
import ProductDetails from "../../components/pdp/ProductDetails.vue";
import ProductImagesWrapper from "../../components/pdp/ProductImagesWrapper.vue";

const route = useRoute();
const slug = computed(() => String(route.params.slug));

const { data: product, error, pending } = await useFetch(() => `/api/products/${slug.value}`);

/* pass layout as fetch from db */
const layouts = ["hero-square", "hero-16x9", "hero-4x5"] as const;

const randomLayout = false;
const layoutClass = randomLayout
  ? layouts[useRandomNumber(0, layouts.length - 1)]
  : "hero-square";
</script>

<template>
  <div class="container">
    <p v-if="pending">Loading...</p>
    <div v-else-if="product" class="mainWrapper">
      <ProductImagesWrapper :product="product" :layoutClass="layoutClass" />

      <div class="productDetails">
        <ProductDetails :product="product" />
      </div>
    </div>
    <p v-else-if="error?.statusCode === 404">Product not found.</p>
    <p v-else-if="error">Something went wrong, please try again.</p>

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

  .productDetails {
    width: 25%;
  }
}
</style>
