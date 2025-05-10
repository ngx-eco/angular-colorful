/**
 * Clamps a value between an upper and lower bound.
 */
export const clamp = (num: number, min = 0, max = 1): number =>
  // We use ternary operators because it makes the minified code
  // 2 times shorter, then `Math.min(Math.max(a,b),c)`
  num > max ? max : num < min ? min : num;
