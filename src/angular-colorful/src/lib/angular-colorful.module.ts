// Angular
import { NgModule } from '@angular/core';

// Project
import { AlphaComponent } from './components/common/alpha/alpha.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { InteractiveComponent } from './components/common/interactive/interactive.component';



@NgModule({
  declarations: [
    AlphaComponent,
    ColorPickerComponent,
    InteractiveComponent,
  ],
  imports: [],
  exports: [
    ColorPickerComponent,
  ]
})
export class AngularColorfulModule { }
