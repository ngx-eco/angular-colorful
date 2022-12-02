// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { HsvaColor } from '../../interfaces/hsva-color.interface';
import { ColorModel } from '../../interfaces/color-model.interface';
import { hsvaToHsvString, hsvStringToHsva } from '../../utils/convert';
import {defaultHsvaColor} from '../../utils/constants';



@Component({
  selector: 'hsv-string-color-picker',
  templateUrl: './hsv-string-color-picker.component.html',
  styleUrls: ['./hsv-string-color-picker.component.scss']
})
export class HsvStringColorPickerComponent implements OnInit, ColorModel<string> {

  public hsvaColor: HsvaColor = defaultHsvaColor;
  private _color = '';

  @Input() public set color(color: string) {
    this._color = color || this.defaultColor;
    this.hsvaColor = this.toHsva(color || this.defaultColor);
  }

  public get color(): string {
    return this._color;
  }

  public defaultColor = 'hsl(0, 0%, 0%)';

  public toHsva = (hsv: string): HsvaColor => hsvStringToHsva(hsv);

  public fromHsva = (hsva: HsvaColor): string => hsvaToHsvString(hsva);

  constructor() { }

  ngOnInit(): void { }

  @Output() colorChanged = new EventEmitter<string>();

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
