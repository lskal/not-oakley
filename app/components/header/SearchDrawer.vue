<script setup lang="ts">
import { computed, ref, watch } from "vue";
import CustomButton from "../buttons/CustomButton.vue";
import CustomIcon from "../buttons/CustomIcon.vue";
import SideDrawer from "../drawer/SideDrawer.vue";
import { useCurrency } from "../../composables/useCurrency";
import type { TProduct } from "../../../types/cms";

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const { data: products } = useFetch<TProduct[]>("/api/products", {
  server: false,
});

const query = ref("");

const MAX_RESULTS = 6;

const filteredProducts = computed(() => {
  const wanted = query.value.trim().toLowerCase();
  if (!wanted) return [];

  return (products.value ?? [])
    .filter(
      (product) =>
        product.name.toLowerCase().includes(wanted) ||
        String(product.category).toLowerCase().includes(wanted),
    )
    .slice(0, MAX_RESULTS);
});

watch(
  () => props.modelValue,
  (isOpen) => {
    if (!isOpen) query.value = "";
  },
);

const showAllResults = (close: () => void) => {
  const q = query.value;
  close();
  navigateTo(`/search?q=${encodeURIComponent(q)}`);
};
</script>

<template>
  <SideDrawer
    :modelValue="modelValue"
    side="right"
    @update:modelValue="(v) => emit('update:modelValue', v)"
  >
    <template #header="{ close }">
      <div class="searchDrawerHeader">
        <strong>Search</strong>
        <CustomIcon
          icon="solar:close-circle-broken"
          iconHover="solar:close-circle-bold-duotone"
          iconActive="solar:close-circle-bold"
          heightIcon="24"
          label="close search"
          @click="close"
        />
      </div>
    </template>

    <template #default="{ close }">
      <input
        v-model="query"
        type="search"
        class="searchDrawerInput"
        placeholder="Search products..."
        aria-label="Search products"
      />

      <p v-if="!query.trim()" class="searchDrawerHint">
        Start typing to search.
      </p>

      <p v-else-if="filteredProducts.length === 0" class="searchDrawerHint">
        No results found for "{{ query }}".
      </p>

      <ul v-else class="searchDrawerResults">
        <li v-for="product in filteredProducts" :key="product.id">
          <NuxtLink :to="`/products/${product.slug}`" @click="close">
            <NuxtImg
              class="resultImage"
              :src="product.heroImage"
              :alt="`product image ${product.name}`"
            />
            <span class="resultInfo">
              <span class="resultName">{{ product.name }}</span>
              <span class="resultPrice">{{
                useCurrency(product.minPrice)
              }}</span>
            </span>
          </NuxtLink>
        </li>
      </ul>
    </template>

    <template v-if="filteredProducts.length > 0" #footer="{ close }">
      <CustomButton
        textValue="Show all results"
        isUppercase
        style="width: 100%"
        @click="showAllResults(close)"
      />
    </template>
  </SideDrawer>
</template>

<style scoped lang="scss">
.searchDrawerHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.searchDrawerInput {
  width: 100%;
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

.searchDrawerHint {
  margin-top: var(--spacing);
  color: var(--color-text-secondary);
}

.searchDrawerResults {
  list-style: none;
  margin: var(--spacing) 0 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: var(--spacing);

  a {
    display: flex;
    align-items: center;
    gap: var(--spacing);
    text-decoration: none;
    color: inherit;
  }

  .resultImage {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
  }

  .resultInfo {
    display: flex;
    flex-direction: column;
  }

  .resultPrice {
    color: var(--color-text-secondary);
  }
}
</style>
