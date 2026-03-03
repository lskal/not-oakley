<script setup lang="ts">
import ProductListing from "../components/ProductListing.vue";

const { data: products } = await useFetch("/api/products?random=5", {
  server: false,
});
</script>

<template>
  <div class="container">
    <div class="headerWishlist">
      <h2>YOUR WISHLIST IS EMPTY</h2>
      <p>Discover our newest arrivals to get you started.</p>
    </div>

    <div class="headerWishlistLinks">
      <NuxtLink to="/category/sunglasses">View New Sunglasses</NuxtLink>
      <NuxtLink to="/category/prescription">View New Eyeglasses</NuxtLink>
      <NuxtLink to="/category/apparel">View New Clothing</NuxtLink>
    </div>

    <div class="wishlistCarousel">
      <ProductListing :products="products">
        <template #title><h2>POPULAR ITEMS FOR YOU</h2></template>
      </ProductListing>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding-left: var(--page-gutter);
  padding-right: var(--page-gutter);

  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  text-align: center;

  .headerWishlistLinks {
    display: flex;
    gap: var(--spacing);

    a {
      text-decoration: underline;
      color: inherit;
    }
  }
}
</style>
