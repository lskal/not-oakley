import { getQuery } from "h3";
import { readInitialDb } from "../utils/initialDb";

export default defineEventHandler(async (event) => {
  console.log("[api] /api/products hit", event.node.req.url);

  const db = await readInitialDb();
  const products = Array.isArray(db?.products) ? db.products : [];

  const { category } = getQuery(event);
  console.log("[api] category query =", category);

  if (!category) return products;

  const categoryStr = String(category).toLowerCase();
  return products.filter(
    (p: any) => String(p.category).toLowerCase() === categoryStr,
  );
});
