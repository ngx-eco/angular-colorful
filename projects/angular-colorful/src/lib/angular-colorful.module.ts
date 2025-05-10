// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project
import { HueComponent } from './components/common/hue/hue.component';
import { AlphaComponent } from './components/common/alpha/alpha.component';
import { SaturationComponent } from './components/common/saturation/saturation.component';
import { InteractiveComponent } from './components/common/interactive/interactive.component';
import { ColorPickerComponent } from './components/common/color-picker/color-picker.component';
import { HexColorPickerComponent } from './components/hex-color-picker/hex-color-picker.component';
import { RgbColorPickerComponent } from './components/rgb-color-picker/rgb-color-picker.component';
import { HslColorPickerComponent } from './components/hsl-color-picker/hsl-color-picker.component';
import { HsvColorPickerComponent } from './components/hsv-color-picker/hsv-color-picker.component';
import { RgbaColorPickerComponent } from './components/rgba-color-picker/rgba-color-picker.component';
import { HslaColorPickerComponent } from './components/hsla-color-picker/hsla-color-picker.component';
import { HsvaColorPickerComponent } from './components/hsva-color-picker/hsva-color-picker.component';
import { AlphaColorPickerComponent } from './components/common/alpha-color-picker/alpha-color-picker.component';
import { RgbStringColorPickerComponent } from './components/rgb-string-color-picker/rgb-string-color-picker.component';
import { HslStringColorPickerComponent } from './components/hsl-string-color-picker/hsl-string-color-picker.component';
import { HsvStringColorPickerComponent } from './components/hsv-string-color-picker/hsv-string-color-picker.component';
import { RgbaStringColorPickerComponent } from './components/rgba-string-color-picker/rgba-string-color-picker.component';
import { HslaStringColorPickerComponent } from './components/hsla-string-color-picker/hsla-string-color-picker.component';
import { HsvaStringColorPickerComponent } from './components/hsva-string-color-picker/hsva-string-color-picker.component';



@NgModule({
  declarations: [
    HueComponent,
    AlphaComponent,
    SaturationComponent,
    ColorPickerComponent,
    InteractiveComponent,
    HexColorPickerComponent,
    RgbColorPickerComponent,
    HslColorPickerComponent,
    HsvColorPickerComponent,
    RgbaColorPickerComponent,
    HslaColorPickerComponent,
    HsvaColorPickerComponent,
    AlphaColorPickerComponent,
    RgbStringColorPickerComponent,
    HslStringColorPickerComponent,
    HsvStringColorPickerComponent,
    RgbaStringColorPickerComponent,
    HslaStringColorPickerComponent,
    HsvaStringColorPickerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HexColorPickerComponent,
    RgbColorPickerComponent,
    HslColorPickerComponent,
    HsvColorPickerComponent,
    RgbaColorPickerComponent,
    HslaColorPickerComponent,
    HsvaColorPickerComponent,
    RgbStringColorPickerComponent,
    HslStringColorPickerComponent,
    HsvStringColorPickerComponent,
    RgbaStringColorPickerComponent,
    HslaStringColorPickerComponent,
    HsvaStringColorPickerComponent,
  ]
})
export class AngularColorfulModule { }
