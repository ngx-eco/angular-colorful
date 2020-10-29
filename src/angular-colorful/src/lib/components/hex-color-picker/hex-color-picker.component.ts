// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { ColorModel } from '../../interfaces/color-model.interface';
import { HsvaColor } from '../../interfaces/hsva-color.interface';
import { hexToHsva, hsvaToHex } from '../../utils/convert';



@Component({
  selector: 'hex-color-picker',
  templateUrl: './hex-color-picker.component.html',
  styleUrls: ['./hex-color-picker.component.scss']
})
export class HexColorPickerComponent implements OnInit, ColorModel<string> {

  public hsvaColor: HsvaColor;
  private _color: string;

  @Input() public set color(color: string) {
    this._color = color || this.defaultColor;
    this.hsvaColor = this.toHsva(color || this.defaultColor);
  }

  public get color(): string {
    return this._color;
  }

  public defaultColor: string = "000";

  public toHsva = (hex): HsvaColor => hexToHsva(hex);

  public fromHsva = (hsva): string => hsvaToHex(hsva);

  constructor() { }

  ngOnInit(): void { }

  @Output() onColorChanged = new EventEmitter<string>();

  colorChanged(color: HsvaColor): void {
    this.onColorChanged.emit(this.fromHsva(color));
  }

}
