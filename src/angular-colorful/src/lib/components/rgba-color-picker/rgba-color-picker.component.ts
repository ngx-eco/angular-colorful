// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { hsvaToRgba, rgbaToHsva } from '../../utils/convert';
import { HsvaColor } from '../../interfaces/hsva-color.interface';
import { RgbaColor } from '../../interfaces/rgba-color.interface';
import { ColorModel } from '../../interfaces/color-model.interface';



@Component({
  selector: 'rgba-color-picker',
  templateUrl: './rgba-color-picker.component.html',
  styleUrls: ['./rgba-color-picker.component.scss']
})
export class RgbaColorPickerComponent implements OnInit, ColorModel<RgbaColor> {

  public hsvaColor: HsvaColor;
  private _color: RgbaColor;

  @Input() public set color(color: RgbaColor) {
    this._color = color || this.defaultColor;
    this.hsvaColor = this.toHsva(color || this.defaultColor);
  }

  public get color(): RgbaColor {
    return this._color;
  }

  public defaultColor: RgbaColor = { r: 0, g: 0, b: 0, a: 1 };

  public toHsva = ({ r, g, b, a }): HsvaColor => rgbaToHsva({ r, g, b, a });
  
  public fromHsva = (hsva): RgbaColor => hsvaToRgba(hsva);

  constructor() { }
  
  ngOnInit(): void { }

  @Output() onColorChanged = new EventEmitter<RgbaColor>();

  colorChanged(color: HsvaColor): void {
    this.onColorChanged.emit(this.fromHsva(color));
  }

}
