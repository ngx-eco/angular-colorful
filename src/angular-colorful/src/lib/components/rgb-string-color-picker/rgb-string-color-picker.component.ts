// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { HsvaColor } from '../../interfaces/hsva-color.interface';
import { ColorModel } from '../../interfaces/color-model.interface';
import { hsvaToRgbString, rgbStringToHsva } from '../../utils/convert';
import {defaultHsvaColor} from '../../utils/constants';



@Component({
  selector: 'rgb-string-color-picker',
  templateUrl: './rgb-string-color-picker.component.html',
  styleUrls: ['./rgb-string-color-picker.component.scss']
})
export class RgbStringColorPickerComponent implements OnInit, ColorModel<string> {

  public hsvaColor: HsvaColor = defaultHsvaColor;
  private _color = '';

  @Input() public set color(color: string) {
    this._color = color || this.defaultColor;
    this.hsvaColor = this.toHsva(color || this.defaultColor);
  }

  public get color(): string {
    return this._color;
  }

  public defaultColor = 'rgba(0, 0, 0, 1)';

  public toHsva = (rgb: string): HsvaColor => rgbStringToHsva(rgb);

  public fromHsva = (hsva: HsvaColor): string => hsvaToRgbString(hsva);

  constructor() { }

  ngOnInit(): void { }

  @Output() colorChanged = new EventEmitter<string>();

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
