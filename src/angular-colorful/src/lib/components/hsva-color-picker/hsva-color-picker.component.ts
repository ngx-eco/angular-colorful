// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { ColorModel } from '../../interfaces/color-model.interface';
import { HsvaColor } from '../../interfaces/hsva-color.interface';



@Component({
  selector: 'hsva-color-picker',
  templateUrl: './hsva-color-picker.component.html',
  styleUrls: ['./hsva-color-picker.component.scss']
})
export class HsvaColorPickerComponent implements OnInit, ColorModel<HsvaColor> {

  public hsvaColor: HsvaColor;
  private _color: HsvaColor;

  @Input() public set color(color: HsvaColor) {
    this._color = color || this.defaultColor;
    this.hsvaColor = this.toHsva(color || this.defaultColor);
  }

  public get color(): HsvaColor {
    return this._color;
  }

  public defaultColor: HsvaColor = { h: 0, s: 0, v: 0, a: 1 };

  public toHsva = ({ h, s, v, a }): HsvaColor => ({ h, s, v, a });
  
  public fromHsva = (hsva): HsvaColor => hsva;

  constructor() { }
  
  ngOnInit(): void { }

  @Output() onColorChanged = new EventEmitter<HsvaColor>();

  colorChanged(color: HsvaColor): void {
    this.onColorChanged.emit(this.fromHsva(color));
  }

}
