import { getQuery } from "h3";
import { readInitialDb } from "../utils/initialDb";
import type { TProduct } from "../../types/cms";

export default defineEventHandler(async (event) => {
  const db = await readInitialDb();
  let products = Array.isArray(db?.products) ? db.products : [];

  const { category, random } = getQuery(event);

  //  category filter
  if (category) {
    const wanted = String(category).toLowerCase();
    products = products.filter(
      (product: TProduct) => String(product.category).toLowerCase() === wanted,
    );
  }

  // random selection
  if (random) {
    const randomItemIndex = Number(random);
    if (Number.isFinite(randomItemIndex) && randomItemIndex > 0) {
      products = pickRandom(products, randomItemIndex);
    }
  }

  return products;
});

const pickRandom = (items: TProduct[], randomItemIndex: number): TProduct[] => {
  const poolItems = [...items];
  const resultArray: TProduct[] = [];

  const count = Math.min(randomItemIndex, poolItems.length);

  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * poolItems.length);

    const picked = poolItems[index]!;
    resultArray.push(picked);

    // remove picked in O(1): swap with last, then pop
    poolItems[index] = poolItems[poolItems.length - 1]!;
    poolItems.pop();
  }

  return resultArray;
};
