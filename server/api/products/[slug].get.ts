import { createError, getRouterParam } from "h3";
import { readInitialDb } from "../../utils/initialDb";

export default defineEventHandler(async (event) => {
  const slugParam = getRouterParam(event, "slug");

  if (!slugParam) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing product slug",
    });
  }

  const slug = decodeURIComponent(slugParam).toLowerCase();

  const db = await readInitialDb();
  const products = Array.isArray(db?.products) ? db.products : [];

  const product = products.find(
    (p: any) => String(p.slug).toLowerCase() === slug,
  );

  if (!product) {
    throw createError({ statusCode: 404, statusMessage: "Product not found" });
  }

  return product;
});
