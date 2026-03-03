export const useCurrency = (amount: Ref<number> | number) => {
  const currenty = computed(() => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(isRef(amount) ? amount.value : amount);
  });

  return currenty;
};
