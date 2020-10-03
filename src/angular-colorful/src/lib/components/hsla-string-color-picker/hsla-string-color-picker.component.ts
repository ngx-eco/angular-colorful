// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { hslStringToHsva, hsvaToHslString } from '../../utils/convert';
import { ColorModel } from '../../interfaces/color-model.interface';
import { HsvaColor } from '../../interfaces/hsva-color.interface';



@Component({
  selector: 'hsla-string-color-picker',
  templateUrl: './hsla-string-color-picker.component.html',
  styleUrls: ['./hsla-string-color-picker.component.scss']
})
export class HslaStringColorPickerComponent implements OnInit, ColorModel<string> {

  public hsvaColor: HsvaColor;
  private _color: string;

  @Input() public set color(color: string) {
    this._color = color || this.defaultColor;
    this.hsvaColor = this.toHsva(color || this.defaultColor);
  }

  public get color(): string {
    return this._color;
  }

  public defaultColor: string = "hsl(0, 0%, 0%)";

  public toHsva = (hsl): HsvaColor => hslStringToHsva(hsl);
  
  public fromHsva = (hsla): string => hsvaToHslString(hsla);

  constructor() { }
  
  ngOnInit(): void { }

  @Output() onColorChanged = new EventEmitter<string>();

  colorChanged(color: HsvaColor): void {
    this.onColorChanged.emit(this.fromHsva(color));
  }

}
