// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { HslColor } from '../../interfaces/hsl-color.interface';
import { HsvaColor } from '../../interfaces/hsva-color.interface';
import { ColorModel } from '../../interfaces/color-model.interface';
import { hslaToHsl, hslaToHsva, hsvaToHsla } from '../../utils/convert';



@Component({
  selector: 'hsl-color-picker',
  templateUrl: './hsl-color-picker.component.html',
  styleUrls: ['./hsl-color-picker.component.scss']
})
export class HslColorPickerComponent implements OnInit, ColorModel<HslColor> {

  public hsvaColor: HsvaColor;
  private _color: HslColor;

  @Input() public set color(color: HslColor) {
    this._color = color || this.defaultColor;
    this.hsvaColor = this.toHsva(color || this.defaultColor);
  }

  public get color(): HslColor {
    return this._color;
  }

  public defaultColor: HslColor = { h: 0, s: 0, l: 0 };

  public toHsva = ({ h, s, l }): HsvaColor => hslaToHsva({ h, s, l, a: 1 });
  
  public fromHsva = (hsla): HslColor => hslaToHsl(hsvaToHsla(hsla));

  constructor() { }
  
  ngOnInit(): void { }

  @Output() onColorChanged = new EventEmitter<HslColor>();

  colorChanged(color: HsvaColor): void {
    this.onColorChanged.emit(this.fromHsva(color));
  }

}
