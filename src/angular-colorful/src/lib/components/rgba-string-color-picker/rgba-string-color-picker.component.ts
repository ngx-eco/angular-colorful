// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { defaultHsvaColor } from '../../utils/constants';
import { HsvaColor } from '../../interfaces/hsva-color.interface';
import { ColorModel } from '../../interfaces/color-model.interface';
import { hsvaToRgbaString, rgbaStringToHsva } from '../../utils/convert';



@Component({
  selector: 'rgba-string-color-picker',
  templateUrl: './rgba-string-color-picker.component.html',
  styleUrls: ['./rgba-string-color-picker.component.scss']
})
export class RgbaStringColorPickerComponent implements OnInit, ColorModel<string> {

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

  public toHsva = (rgba: string): HsvaColor => rgbaStringToHsva(rgba);

  public fromHsva = (hsva: HsvaColor): string => hsvaToRgbaString(hsva);

  constructor() { }

  ngOnInit(): void { }

  @Output() colorChanged = new EventEmitter<string>();

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
