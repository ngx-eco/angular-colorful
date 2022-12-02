// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { ColorModel } from '../../interfaces/color-model.interface';
import { HsvaColor } from '../../interfaces/hsva-color.interface';
import { hexToHsva, hsvaToHex } from '../../utils/convert';
import {defaultHsvaColor} from '../../utils/constants';



@Component({
  selector: 'hex-color-picker',
  templateUrl: './hex-color-picker.component.html',
  styleUrls: ['./hex-color-picker.component.scss']
})
export class HexColorPickerComponent implements OnInit, ColorModel<string> {

  public hsvaColor: HsvaColor = defaultHsvaColor;
  private _color = '';

  @Input() public set color(color: string) {
    this._color = color || this.defaultColor;
    this.hsvaColor = this.toHsva(color || this.defaultColor);
  }

  public get color(): string {
    return this._color;
  }

  public defaultColor = '000';

  public toHsva = (hex: string): HsvaColor => hexToHsva(hex);

  public fromHsva = (hsva: HsvaColor): string => hsvaToHex(hsva);

  constructor() { }

  ngOnInit(): void { }

  @Output() colorChanged = new EventEmitter<string>();

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
