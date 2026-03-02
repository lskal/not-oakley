import { readInitialDb } from "../utils/initialDb";

export default defineEventHandler(async () => {
  const db = await readInitialDb();
  return Array.isArray(db?.products) ? db.products : [];
});
