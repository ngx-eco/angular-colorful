// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { HsvaColor } from '../../interfaces/hsva-color.interface';
import { ColorModel } from '../../interfaces/color-model.interface';
import { hsvaToRgbaString, rgbaStringToHsva } from '../../utils/convert';



@Component({
  selector: 'rgba-string-color-picker',
  templateUrl: './rgba-string-color-picker.component.html',
  styleUrls: ['./rgba-string-color-picker.component.scss']
})
export class RgbaStringColorPickerComponent implements OnInit, ColorModel<string> {

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

  public toHsva = (rgba): HsvaColor => rgbaStringToHsva(rgba);
  
  public fromHsva = (hsva): string => hsvaToRgbaString(hsva);

  constructor() { }
  
  ngOnInit(): void { }

  @Output() onColorChanged = new EventEmitter<string>();

  colorChanged(color: HsvaColor): void {
    this.onColorChanged.emit(this.fromHsva(color));
  }

}
