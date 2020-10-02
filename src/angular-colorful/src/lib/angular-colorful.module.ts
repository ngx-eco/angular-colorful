// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project
import { HueComponent } from './components/common/hue/hue.component';
import { AlphaComponent } from './components/common/alpha/alpha.component';
import { SaturationComponent } from './components/common/saturation/saturation.component';
import { InteractiveComponent } from './components/common/interactive/interactive.component';
import { ColorPickerComponent } from './components/common/color-picker/color-picker.component';
import { RgbColorPickerComponent } from './components/rgb-color-picker/rgb-color-picker.component';



@NgModule({
  declarations: [
    HueComponent,
    AlphaComponent,
    SaturationComponent,
    ColorPickerComponent,
    InteractiveComponent,
    RgbColorPickerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ColorPickerComponent,
    RgbColorPickerComponent,
  ]
})
export class AngularColorfulModule { }
