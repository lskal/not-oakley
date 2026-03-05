<script setup lang="ts">
import type { TProduct } from "../../../types/cms";
import AddToCartButton from "../drawer/AddToCartButton.vue";

const props = defineProps<{
  product: TProduct;
}>();
</script>

<template>
  <!-- capire come implementare -->
  <p>NEW</p>
  <!-- use variant name -->
  <h1>{{ product.name }}</h1>
  <!-- use variant price -->
  <p v-if="product.minPrice">{{ useCurrency(product.minPrice) }}</p>

  <div v-if="product.variants">
    <h3>Variants:</h3>
    <div v-for="variant in product.variants" :key="variant.id">
      <p>{{ variant.name }}: {{ useCurrency(variant.price) }}</p>
    </div>
  </div>

  <AddToCartButton />
</template>
