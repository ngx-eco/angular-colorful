import {AnyColor} from './any-color.interface';
import {HsvaColor} from './hsva-color.interface';


export interface ColorModel<T extends AnyColor> {
  toHsva: (color: T) => HsvaColor;
  fromHsva: (hsva: HsvaColor) => T;
}
