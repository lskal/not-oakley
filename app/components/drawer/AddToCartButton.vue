<script setup lang="ts">
import CustomButton from "../buttons/CustomButton.vue";
import { useCart } from "../../composables/useCart";
import type { TProduct } from "../../../types/cms";

const props = defineProps<{
  product: TProduct;
}>();

const { addItem, openCart } = useCart();

const handleAddToCart = () => {
  addItem(props.product);
  openCart();
};
</script>

<template>
  <CustomButton
    textValue="Add to cart"
    @click="handleAddToCart"
    backgroundColor="blue"
    hoverBackgroundColor="darkblue"
    padding="10px"
    style="width: 100%"
  />
</template>
