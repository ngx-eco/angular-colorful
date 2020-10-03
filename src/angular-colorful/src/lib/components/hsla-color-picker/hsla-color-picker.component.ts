// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { hslaToHsva, hsvaToHsla } from '../../utils/convert';
import { HsvaColor } from '../../interfaces/hsva-color.interface';
import { HslaColor } from '../../interfaces/hsla-color.interface';
import { ColorModel } from '../../interfaces/color-model.interface';



@Component({
  selector: 'hsla-color-picker',
  templateUrl: './hsla-color-picker.component.html',
  styleUrls: ['./hsla-color-picker.component.scss']
})
export class HslaColorPickerComponent implements OnInit, ColorModel<HslaColor> {

  public hsvaColor: HsvaColor;
  private _color: HslaColor;

  @Input() public set color(color: HslaColor) {
    this._color = color || this.defaultColor;
    this.hsvaColor = this.toHsva(color || this.defaultColor);
  }

  public get color(): HslaColor {
    return this._color;
  }

  public defaultColor: HslaColor = { h: 0, s: 0, l: 0, a: 1 };

  public toHsva = ({ h, s, l, a }): HsvaColor => hslaToHsva({ h, s, l, a });
  
  public fromHsva = (hsla): HslaColor => hsvaToHsla(hsla);

  constructor() { }
  
  ngOnInit(): void { }

  @Output() onColorChanged = new EventEmitter<HslaColor>();

  colorChanged(color: HsvaColor): void {
    this.onColorChanged.emit(this.fromHsva(color));
  }

}
