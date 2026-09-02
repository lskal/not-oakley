<script setup lang="ts">
import { ref } from "vue";
import CustomButton from "../components/buttons/CustomButton.vue";
import { useCurrency } from "../composables/useCurrency";
import { useCart } from "../composables/useCart";

const { items, subtotal, clearCart } = useCart();

const orderPlaced = ref(false);

const placeOrder = () => {
  orderPlaced.value = true;
  clearCart();
};
</script>

<template>
  <div class="container">
    <h1>Checkout</h1>

    <div v-if="orderPlaced" class="statusMessage">
      <h2>Thanks for your order!</h2>
      <p>This is a mock checkout — no real order was placed.</p>
      <NuxtLink to="/">Continue shopping</NuxtLink>
    </div>

    <div v-else-if="items.length === 0" class="statusMessage">
      <p>Your cart is empty.</p>
      <NuxtLink to="/">Continue shopping</NuxtLink>
    </div>

    <div v-else class="checkoutLayout">
      <div class="checkoutForm">
        <section class="formSection">
          <h2>Shipping details</h2>

          <div class="formGrid">
            <label class="formField">
              <span>Full name</span>
              <input type="text" placeholder="Jane Doe" />
            </label>

            <label class="formField">
              <span>Email</span>
              <input type="email" placeholder="jane@example.com" />
            </label>

            <label class="formField formField--full">
              <span>Address</span>
              <input type="text" placeholder="123 Main St" />
            </label>

            <label class="formField">
              <span>City</span>
              <input type="text" placeholder="San Francisco" />
            </label>

            <label class="formField">
              <span>ZIP / Postal code</span>
              <input type="text" placeholder="94103" />
            </label>

            <label class="formField formField--full">
              <span>Country</span>
              <input type="text" placeholder="United States" />
            </label>
          </div>
        </section>

        <section class="formSection">
          <h2>Payment</h2>

          <div class="formGrid">
            <label class="formField formField--full">
              <span>Card number</span>
              <input type="text" placeholder="4242 4242 4242 4242" />
            </label>

            <label class="formField">
              <span>Expiry</span>
              <input type="text" placeholder="MM / YY" />
            </label>

            <label class="formField">
              <span>CVC</span>
              <input type="text" placeholder="123" />
            </label>
          </div>
        </section>
      </div>

      <aside class="orderSummary">
        <h2>Order summary</h2>

        <ul class="summaryItems">
          <li v-for="item in items" :key="item.product.id">
            <NuxtImg
              class="summaryImage"
              :src="item.product.heroImage"
              :alt="`product image ${item.product.name}`"
            />
            <span class="summaryInfo">
              <span class="summaryName">{{ item.product.name }}</span>
              <span class="summaryQty">Qty {{ item.quantity }}</span>
            </span>
            <span class="summaryPrice">{{
              useCurrency(item.product.minPrice * item.quantity)
            }}</span>
          </li>
        </ul>

        <div class="summaryTotals">
          <div class="summaryRow">
            <span>Subtotal</span>
            <span>{{ useCurrency(subtotal) }}</span>
          </div>
          <div class="summaryRow">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div class="summaryRow summaryRow--total">
            <span>Total</span>
            <span>{{ useCurrency(subtotal) }}</span>
          </div>
        </div>

        <CustomButton
          textValue="Place order"
          isUppercase
          backgroundColor="tomato"
          hoverBackgroundColor="darkred"
          style="width: 100%"
          @click="placeOrder"
        />
      </aside>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding-left: var(--page-gutter);
  padding-right: var(--page-gutter);
  padding-bottom: 60px;
}

.statusMessage {
  margin-top: var(--spacing);
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
  align-items: flex-start;

  a {
    text-decoration: underline;
    color: inherit;
  }
}

.checkoutLayout {
  display: flex;
  flex-direction: column-reverse;
  gap: var(--spacing);
  margin-top: var(--spacing);

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
  }
}

.checkoutForm {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
}

.formSection {
  h2 {
    margin-bottom: var(--spacing);
  }
}

.formGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing);

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
}

.formField {
  display: flex;
  flex-direction: column;
  gap: 6px;

  span {
    color: var(--color-text-secondary);
  }

  input {
    padding: 10px 12px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    font: inherit;
    color: inherit;
    background: var(--color-background-primary);

    &:focus {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }
  }

  &--full {
    @media (min-width: 576px) {
      grid-column: 1 / -1;
    }
  }
}

.orderSummary {
  width: 100%;
  padding: var(--spacing);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: var(--color-background-secondary);

  display: flex;
  flex-direction: column;
  gap: var(--spacing);

  @media (min-width: 992px) {
    width: min(360px, 100%);
    flex-shrink: 0;
  }

  h2 {
    margin: 0;
  }
}

.summaryItems {
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

  .summaryImage {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
  }

  .summaryInfo {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .summaryQty {
    color: var(--color-text-secondary);
  }
}

.summaryTotals {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: var(--spacing);
  border-top: 1px solid var(--color-border);
}

.summaryRow {
  display: flex;
  justify-content: space-between;

  &--total {
    font-weight: bold;
  }
}
</style>
