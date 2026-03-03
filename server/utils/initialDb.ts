import { get } from "@vercel/blob";
import fallbackDb from "../data/initialDB.fallback.json";

let cache: any = null;

export async function readInitialDb() {
  if (cache) return cache;

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  console.log("[initialDb] token present?", !!token);

  try {
    const result = await get("data/initialDB.json", {
      access: "private",
      token,
    });

    if (result?.statusCode === 200) {
      const text = await new Response(result.stream).text();
      cache = JSON.parse(text);
      console.log("[initialDb] using BLOB");
      return cache;
    }
  } catch (e) {
    console.warn("[initialDb] blob failed, using fallback", e);
  }

  cache = fallbackDb;
  console.log("[initialDb] using FALLBACK");
  return cache;
}
