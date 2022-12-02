// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { hslStringToHsva, hsvaToHslString } from '../../utils/convert';
import { ColorModel } from '../../interfaces/color-model.interface';
import { HsvaColor } from '../../interfaces/hsva-color.interface';
import {defaultHsvaColor} from '../../utils/constants';



@Component({
  selector: 'hsla-string-color-picker',
  templateUrl: './hsla-string-color-picker.component.html',
  styleUrls: ['./hsla-string-color-picker.component.scss']
})
export class HslaStringColorPickerComponent implements OnInit, ColorModel<string> {

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

  public toHsva = (hsl: string): HsvaColor => hslStringToHsva(hsl);

  public fromHsva = (hsla: HsvaColor): string => hsvaToHslString(hsla);

  constructor() { }

  ngOnInit(): void { }

  @Output() colorChanged = new EventEmitter<string>();

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
