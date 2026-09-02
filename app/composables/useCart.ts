import type { TProduct } from "../../types/cms";

export type TCartItem = {
  product: TProduct;
  quantity: number;
};

export const useCart = () => {
  const items = useState<TCartItem[]>("cart", () => []);
  const isOpen = useState<boolean>("cartOpen", () => false);

  const addItem = (product: TProduct, quantity = 1) => {
    const existing = items.value.find(
      (item) => item.product.id === product.id,
    );

    if (existing) {
      existing.quantity += quantity;
    } else {
      items.value.push({ product, quantity });
    }
  };

  const removeItem = (productId: number) => {
    items.value = items.value.filter(
      (item) => item.product.id !== productId,
    );
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    const existing = items.value.find(
      (item) => item.product.id === productId,
    );
    if (existing) existing.quantity = quantity;
  };

  const clearCart = () => {
    items.value = [];
  };

  const openCart = () => {
    isOpen.value = true;
  };

  const closeCart = () => {
    isOpen.value = false;
  };

  const itemCount = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0),
  );

  const subtotal = computed(() =>
    items.value.reduce(
      (sum, item) => sum + item.product.minPrice * item.quantity,
      0,
    ),
  );

  return {
    items,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
    itemCount,
    subtotal,
  };
};
