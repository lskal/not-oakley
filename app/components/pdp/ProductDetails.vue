<script setup lang="ts">
import type { TProduct } from "../../../types/cms";

const props = defineProps<{
  product: TProduct;
}>();

const cartOpen = ref(false);
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

  <button @click="cartOpen = true">Open Cart</button>

  <SideDrawer v-model="cartOpen" side="left">
    <template #header="{ close }">
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <strong>Cart</strong>
        <button @click="close">✕</button>
      </div>
    </template>

    <div>
      <!-- anything -->
      <p>Your cart content here</p>
    </div>

    <template #footer>
      <button style="width: 100%">Checkout</button>
    </template>
  </SideDrawer>
</template>
