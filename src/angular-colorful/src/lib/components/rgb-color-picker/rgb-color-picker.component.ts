// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { RgbColor } from '../../interfaces/rgb-color.interface';
import { HsvaColor } from '../../interfaces/hsva-color.interface';
import { ColorModel } from '../../interfaces/color-model.interface';
import { hsvaToRgba, rgbaToHsva, rgbaToRgb } from '../../utils/convert';
import {defaultHsvaColor, defaultRgbColor} from '../../utils/constants';



@Component({
  selector: 'rgb-color-picker',
  templateUrl: './rgb-color-picker.component.html',
  styleUrls: ['./rgb-color-picker.component.scss']
})
export class RgbColorPickerComponent implements OnInit, ColorModel<RgbColor> {

  public hsvaColor: HsvaColor = defaultHsvaColor;
  private _color: RgbColor = defaultRgbColor;

  @Input() public set color(color: RgbColor) {
    this._color = color || this.defaultColor;
    this.hsvaColor = this.toHsva(color || this.defaultColor);
  }

  public get color(): RgbColor {
    return this._color;
  }

  public defaultColor: RgbColor = { r: 0, g: 0, b: 0 };

  public toHsva = ({ r, g, b }: RgbColor): HsvaColor => rgbaToHsva({ r, g, b, a: 1 });

  public fromHsva = (hsva: HsvaColor): RgbColor => rgbaToRgb(hsvaToRgba(hsva));

  constructor() { }

  ngOnInit(): void { }

  @Output() colorChanged = new EventEmitter<RgbColor>();

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
