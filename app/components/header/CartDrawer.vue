<script setup lang="ts">
import { Icon } from "@iconify/vue";
import CustomButton from "../buttons/CustomButton.vue";
import CustomIcon from "../buttons/CustomIcon.vue";
import SideDrawer from "../drawer/SideDrawer.vue";
import { useCurrency } from "../../composables/useCurrency";
import { useCart } from "../../composables/useCart";

const { items, removeItem, updateQuantity, subtotal, isOpen, openCart, closeCart } =
  useCart();
</script>

<template>
  <SideDrawer
    :modelValue="isOpen"
    side="right"
    @update:modelValue="(v) => (v ? openCart() : closeCart())"
  >
    <template #header="{ close }">
      <div class="cartDrawerHeader">
        <strong>Cart</strong>
        <CustomIcon
          icon="solar:close-circle-broken"
          iconHover="solar:close-circle-bold-duotone"
          iconActive="solar:close-circle-bold"
          heightIcon="24"
          label="close cart"
          @click="close"
        />
      </div>
    </template>

    <template #default>
      <p v-if="items.length === 0" class="cartDrawerEmpty">
        No products here yet!!!
      </p>

      <ul v-else class="cartDrawerItems">
        <li v-for="item in items" :key="item.product.id">
          <NuxtImg
            class="itemImage"
            :src="item.product.heroImage"
            :alt="`product image ${item.product.name}`"
          />
          <span class="itemInfo">
            <span class="itemName">{{ item.product.name }}</span>
            <span class="itemQtyStepper">
              <button
                type="button"
                class="qtyBtn"
                aria-label="Decrease quantity"
                @click="updateQuantity(item.product.id, item.quantity - 1)"
              >
                −
              </button>
              <span class="itemQty">{{ item.quantity }}</span>
              <button
                type="button"
                class="qtyBtn"
                aria-label="Increase quantity"
                @click="updateQuantity(item.product.id, item.quantity + 1)"
              >
                +
              </button>
            </span>
          </span>
          <span class="itemPrice">{{
            useCurrency(item.product.minPrice * item.quantity)
          }}</span>
          <button
            type="button"
            class="removeBtn"
            aria-label="Remove item"
            @click="removeItem(item.product.id)"
          >
            <Icon icon="carbon:close" height="14" />
          </button>
        </li>
      </ul>
    </template>

    <template v-if="items.length > 0" #footer>
      <div class="cartDrawerTotal">
        <span>Subtotal</span>
        <span>{{ useCurrency(subtotal) }}</span>
      </div>

      <CustomButton
        textValue="Checkout"
        backgroundColor="tomato"
        hoverBackgroundColor="darkred"
        isUppercase
        style="width: 100%"
      />
    </template>
  </SideDrawer>
</template>

<style scoped lang="scss">
.cartDrawerHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.cartDrawerEmpty {
  color: var(--color-text-secondary);
}

.cartDrawerItems {
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: var(--spacing);

  li {
    display: flex;
    align-items: center;
    gap: var(--spacing);
  }

  .itemImage {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
  }

  .itemInfo {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .itemQtyStepper {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
  }

  .itemQty {
    min-width: 1ch;
    text-align: center;
    color: var(--color-text-secondary);
  }

  .qtyBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;

    border: 1px solid var(--color-border);
    border-radius: 4px;
    padding: 0;
    background: transparent;
    color: inherit;
    line-height: 1;
    cursor: pointer;
  }

  .removeBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    padding: 2px;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }
}

.cartDrawerTotal {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: var(--spacing);
}
</style>
