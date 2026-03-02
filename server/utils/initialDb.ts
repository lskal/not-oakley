import { get } from "@vercel/blob";
import fallbackDb from "../data/initialDB.fallback.json";

let cache: any = null;

export async function readInitialDb() {
  if (cache) return cache;

  try {
    const result = await get("data/initialDB.json", { access: "private" });

    if (result?.statusCode === 200) {
      const text = await new Response(result.stream).text();
      cache = JSON.parse(text);
      return cache;
    }
  } catch {
    // fallback
  }

  cache = fallbackDb;
  return cache;
}
