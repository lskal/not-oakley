<script setup lang="ts">
import CustomCta from "../buttons/CustomCta.vue";
import CustomIcon from "../buttons/CustomIcon.vue";
import SideDrawer from "./SideDrawer.vue";

const cartOpen = ref(false);
</script>

<template>
  <CustomCta
    textValue="Add to cart"
    @click="cartOpen = true"
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

        <CustomIcon icon="carbon:close" label="Close cart" @click="close" />
      </div>
    </template>

    <template #default>
      <!-- anything -->
      <p>Your cart content here</p>
    </template>

    <template #footer>
      <CustomCta
        textValue="Checkout"
        backgroundColor="tomato"
        hoverBackgroundColor="darkred"
        isUppercase
      />
    </template>
  </SideDrawer>
</template>
