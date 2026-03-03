<script setup lang="ts">
import type { TProduct } from "../../types/cms";

const prop = defineProps<{
  products?: TProduct[];
}>();
</script>

<template>
  <div class="wishlistCaroselWrapper">
    <slot name="title"></slot>

    <div class="listing">
      <div v-for="product in products" :key="product.id" class="listingItem">
        <NuxtImg
          :src="product.heroImage"
          :alt="`product image ${product.name}`"
        />
        <NuxtLink :to="`/products/${product.slug}`">
          <p>{{ product.name }}</p>
          <p>${{ product.minPrice }}</p>
          <p>Prescription Available</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wishlistCaroselWrapper {
  margin-top: 50px;
  margin-bottom: 200px;

  a {
    text-decoration: none;
    color: inherit;
  }

  .listing {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing);
    margin-top: 20px;

    .listingItem {
      flex: 0 0 calc((100% - (3 * var(--spacing))) / 4);
      max-width: calc((100% - (3 * var(--spacing))) / 4);
      box-sizing: border-box;
    }
  }
}
</style>
