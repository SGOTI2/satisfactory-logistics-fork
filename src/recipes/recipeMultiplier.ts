export function applyRecipeMultiplier(
  baseAmount: number,
  multiplier: number,
): number {
  if (multiplier === 1) return baseAmount;
  return Math.max(1, Math.round(baseAmount * multiplier));
}

export const RECIPE_MULTIPLIER_OPTIONS = [
  { value: '0.25', label: '0.25x' },
  { value: '0.5', label: '0.5x' },
  { value: '0.75', label: '0.75x' },
  { value: '1', label: '1x (Default)' },
  { value: '1.25', label: '1.25x' },
  { value: '1.5', label: '1.5x' },
  { value: '1.75', label: '1.75x' },
  { value: '2', label: '2x' },
];

export const POWER_CONSUMPTION_MULTIPLIER_OPTIONS = [
  { value: '0.25', label: '0.25x' },
  { value: '0.5', label: '0.5x' },
  { value: '0.75', label: '0.75x' },
  { value: '1', label: '1x (Default)' },
  { value: '2', label: '2x' },
  { value: '5', label: '5x' },
];

export const DEFAULT_RECIPE_MULTIPLIER = 1;
export const DEFAULT_POWER_CONSUMPTION_MULTIPLIER = 1;
