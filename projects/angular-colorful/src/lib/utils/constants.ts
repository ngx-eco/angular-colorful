import {HsvaColor} from '../interfaces/hsva-color.interface';
import {HsvColor} from '../interfaces/hsv-color.interface';
import {HslaColor} from '../interfaces/hsla-color.interface';
import {HslColor} from '../interfaces/hsl-color.interface';
import {RgbaColor} from '../interfaces/rgba-color.interface';
import {RgbColor} from '../interfaces/rgb-color.interface';


/**
 * Standard (black) color in HSVA format
 */
export const defaultHsvaColor: HsvaColor = {h: 0, s: 0, v: 0, a: 1};
/**
 * Standard (black) color in HSV format
 */
export const defaultHsvColor: HsvColor = {h: 0, s: 0, v: 0};
/**
 * Standard (black) color in HSVA string format
 */
export const defaultHsvaStringColor = 'hsv(0, 0%, 0%, 100%)';
/**
 * Standard (black) color in HSV string format
 */
export const defaultHsvStringColor = 'hsv(0, 0%, 0%)';
/**
 * Standard (black) color in HSLA format
 */
export const defaultHslaColor: HslaColor = {h: 0, s: 0, l: 0, a: 1};
/**
 * Standard (black) color in HSL format
 */
export const defaultHslColor: HslColor = {h: 0, s: 0, l: 0};
/**
 * Standard (black) color in HSLA string format
 */
export const defaultHslaStringColor = 'hsl(0, 0%, 0%, 100%)';
/**
 * Standard (black) color in HSL string format
 */
export const defaultHslStringColor = 'hsl(0, 0%, 0%)';
/**
 * Standard (black) color in RGBA format
 */
export const defaultRgbaColor: RgbaColor = {r: 0, g: 0, b: 0, a: 1};
/**
 * Standard (black) color in RGB format
 */
export const defaultRgbColor: RgbColor = {r: 0, g: 0, b: 0};
/**
 * Standard (black) color in RGBA string format
 */
export const defaultRgbaStringColor = 'rgba(0, 0, 0, 1)';
/**
 * Standard (black) color in RGB string format
 */
export const defaultRgbStringColor = 'rgb(0, 0, 0)';
/**
 * Standard (black) color in HEX string format
 */
export const defaultHexStringColor = '#000';
