<script setup lang="ts">
import type { TProduct } from "../../../types/cms";
import CustomCta from "../buttons/CustomCta.vue";

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

  <CustomCta
    textValue="Add to cart"
    @click="cartOpen = true"
    link="#"
    backgroundColor="blue"
    hoverBackgroundColor="darkblue"
    padding="10px"
    style="width: 100%"
  />

  <SideDrawer v-model="cartOpen" side="right">
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

    <template #default>
      <!-- anything -->
      <p>Your cart content here</p>
    </template>

    <template #footer>
      <CustomCta
        textValue="Checkout"
        link="#"
        backgroundColor="tomato"
        hoverBackgroundColor="darkred"
        isUppercase
      />
    </template>
  </SideDrawer>
</template>
