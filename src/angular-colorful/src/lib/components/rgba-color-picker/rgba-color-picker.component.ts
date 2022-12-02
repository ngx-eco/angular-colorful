// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { hsvaToRgba, rgbaToHsva } from '../../utils/convert';
import { HsvaColor } from '../../interfaces/hsva-color.interface';
import { RgbaColor } from '../../interfaces/rgba-color.interface';
import { ColorModel } from '../../interfaces/color-model.interface';
import {defaultHsvaColor, defaultRgbaColor} from '../../utils/constants';



@Component({
  selector: 'rgba-color-picker',
  templateUrl: './rgba-color-picker.component.html',
  styleUrls: ['./rgba-color-picker.component.scss']
})
export class RgbaColorPickerComponent implements OnInit, ColorModel<RgbaColor> {

  public hsvaColor: HsvaColor = defaultHsvaColor;
  private _color: RgbaColor = defaultRgbaColor;

  @Input() public set color(color: RgbaColor) {
    this._color = color || this.defaultColor;
    this.hsvaColor = this.toHsva(color || this.defaultColor);
  }

  public get color(): RgbaColor {
    return this._color;
  }

  public defaultColor: RgbaColor = { r: 0, g: 0, b: 0, a: 1 };

  public toHsva = (rgba: RgbaColor): HsvaColor => rgbaToHsva(rgba);

  public fromHsva = (hsva: HsvaColor): RgbaColor => hsvaToRgba(hsva);

  constructor() { }

  ngOnInit(): void { }

  @Output() colorChanged = new EventEmitter<RgbaColor>();

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
