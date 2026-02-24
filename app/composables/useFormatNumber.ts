import type { TNumberLike } from "../../types/cms";

export function useFormatNumber(value: TNumberLike | undefined, fallback = 0) {
  return computed(() => {
    if (value === undefined || value === null) {
      return fallback;
    }

    const numberValue = typeof value === "number" ? value : Number(value);

    return Number.isFinite(numberValue) ? numberValue : fallback;
  });
}

export default useFormatNumber;
