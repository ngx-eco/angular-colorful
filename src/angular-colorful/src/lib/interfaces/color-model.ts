// Project
import { AnyColor } from './any-color';
import { HsvaColor } from './hsva-color';



export interface ColorModel<T extends AnyColor> {
    defaultColor: T;
    toHsva: (color: T) => HsvaColor;
    fromHsva: (hsva: HsvaColor) => T;
    equal: (first: T, second: T) => boolean;
    fromAttr: (attr: string) => T;
}
