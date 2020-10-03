// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { HsvaColor } from '../../interfaces/hsva-color.interface';
import { ColorModel } from '../../interfaces/color-model.interface';
import { hsvaToRgbString, rgbStringToHsva } from '../../utils/convert';



@Component({
  selector: 'rgb-string-color-picker',
  templateUrl: './rgb-string-color-picker.component.html',
  styleUrls: ['./rgb-string-color-picker.component.scss']
})
export class RgbStringColorPickerComponent implements OnInit, ColorModel<string> {

  public hsvaColor: HsvaColor;
  private _color: string;

  @Input() public set color(color: string) {
    this._color = color || this.defaultColor;
    this.hsvaColor = this.toHsva(color || this.defaultColor);
  }

  public get color(): string {
    return this._color;
  }

  public defaultColor: string = 'rgba(0, 0, 0, 1)';

  public toHsva = (rgb): HsvaColor => rgbStringToHsva(rgb);
  
  public fromHsva = (hsva): string => hsvaToRgbString(hsva);

  constructor() { }
  
  ngOnInit(): void { }

  @Output() onColorChanged = new EventEmitter<string>();

  colorChanged(color: HsvaColor): void {
    this.onColorChanged.emit(this.fromHsva(color));
  }

}
