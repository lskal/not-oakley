<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="headerWishlist">
      <h2>YOUR WISHLIST IS EMPTY</h2>
      <p>Discover our newest arrivals to get you started.</p>
    </div>
    <div class="headerWishlistLinks">
      <NuxtLink to="/category/sunglasses">View New Sunglasses</NuxtLink>
      <NuxtLink to="/category/eyeglasses">View New Eyeglasses</NuxtLink>
      <NuxtLink to="/category/clothing">View New Clothing </NuxtLink>
    </div>
    <div class="wishlistCarousel"><WishlistCarosel /></div>
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
