// Clamps a value between an upper and lower bound.
// We use ternary operators because it makes the minified code
// 2 times shorter then `Math.min(Math.max(a,b),c)`
export const clamp = (num: number, min = 0, max = 1): number => {
  return num > max ? max : num < min ? min : num;
};
