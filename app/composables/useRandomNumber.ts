import type { TNumberLike } from "../../types/cms";

// default is 0 to 100

export default function useRandomNumber(
  min: TNumberLike = 0,
  max: TNumberLike = 100,
) {
  const minValue = Number(min ?? 0);
  const maxValue = Number(max ?? 100);

  const safeMin = Number.isFinite(minValue) ? minValue : 0;
  const safeMax = Number.isFinite(maxValue) ? maxValue : 100;

  if (safeMax < safeMin) return safeMin;

  const randomNumber =
    Math.floor(Math.random() * (safeMax - safeMin + 1)) + safeMin;

  return randomNumber;
}
