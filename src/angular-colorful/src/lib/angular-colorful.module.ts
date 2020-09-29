// Angular
import { NgModule } from '@angular/core';

// Project
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { InteractiveComponent } from './components/common/interactive/interactive.component';



@NgModule({
  declarations: [
    ColorPickerComponent,
    InteractiveComponent,
  ],
  imports: [],
  exports: [
    ColorPickerComponent,
  ]
})
export class AngularColorfulModule { }
