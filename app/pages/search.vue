<script setup lang="ts">
import ProductListing from "../components/plp/ProductListing.vue";

const route = useRoute();
const query = computed(() => String(route.query.q ?? ""));

const { data: products } = await useFetch(
  () => `/api/products?search=${encodeURIComponent(query.value)}`,
);
</script>

<template>
  <div class="container">
    <div class="listingHead">
      <h1 v-if="query">Search results for "{{ query }}"</h1>
      <h1 v-else>Search</h1>
    </div>

    <p
      v-if="query && products && products.length === 0"
      class="noResults"
    >
      No results found for "{{ query }}".
    </p>

    <div v-else class="productsListing">
      <ProductListing :products="products" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding-left: var(--page-gutter);
  padding-right: var(--page-gutter);

  .noResults {
    margin-top: var(--spacing);
    color: var(--color-text-secondary);
  }
}
</style>
