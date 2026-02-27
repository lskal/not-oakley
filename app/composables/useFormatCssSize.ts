import { computed, toValue, type MaybeRefOrGetter } from "vue";
import type { TCssSize } from "../../types/cms";

export function useFormatCssSize(
  passedValue: MaybeRefOrGetter<TCssSize | undefined>,
) {
  return computed(() => {
    const value = toValue(passedValue);

    // if falsy return undefined
    if (value === undefined || value === null || value === "") {
      return undefined;
    }

    // number -> return number value + px
    if (typeof value === "number") {
      return `${value}px`;
    }

    const trimmed = value.trim();

    // string -> number -> return number value + px
    if (!isNaN(Number(trimmed))) {
      return `${trimmed}px`;
    }

    // else return original value
    return trimmed;
  });
}

export default useFormatCssSize;
