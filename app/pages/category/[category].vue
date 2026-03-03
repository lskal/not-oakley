<script setup lang="ts">
import ProductListing from "../../components/ProductListing.vue";

const route = useRoute();
const category = computed(() => String(route.params.category));

const { data: products } = await useFetch(
  () => `/api/products?category=${encodeURIComponent(category.value)}`,
);

const capitalizeFirstLetter = (word: string) => {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const capitalizedCategory = computed(() =>
  capitalizeFirstLetter(category.value),
);
</script>

<template>
  <div class="container">
    <div class="subnavCategory">
      <NuxtLink to="/">Home</NuxtLink> /
      <NuxtLink :to="`/category/${category}`">{{
        capitalizedCategory
      }}</NuxtLink>
    </div>
    <div class="listingHead">
      <h1>{{ capitalizedCategory }}</h1>
    </div>
    <div class="filterNav">Filter</div>
    <div class="replaceProducts">
      <ProductListing :products="products" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding-left: var(--page-gutter);
  padding-right: var(--page-gutter);

  .subnavCategory {
    display: inline;

    a {
      color: inherit;
    }
  }
}
</style>
