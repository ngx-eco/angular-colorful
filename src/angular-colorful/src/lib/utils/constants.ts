import {HsvaColor} from '../interfaces/hsva-color.interface';
import {HsvColor} from '../interfaces/hsv-color.interface';
import {HslaColor} from '../interfaces/hsla-color.interface';
import {HslColor} from '../interfaces/hsl-color.interface';
import {RgbaColor} from '../interfaces/rgba-color.interface';
import {RgbColor} from '../interfaces/rgb-color.interface';

export const defaultHsvaColor: HsvaColor = {h: 0, s: 0, v: 0, a: 1};
export const defaultHsvColor: HsvColor = {h: 0, s: 0, v: 0};
export const defaultHslaColor: HslaColor = {h: 0, s: 0, l: 0, a: 1};
export const defaultHslColor: HslColor = {h: 0, s: 0, l: 0};
export const defaultRgbaColor: RgbaColor = {r: 0, g: 0, b: 0, a: 1};
export const defaultRgbColor: RgbColor = {r: 0, g: 0, b: 0};
