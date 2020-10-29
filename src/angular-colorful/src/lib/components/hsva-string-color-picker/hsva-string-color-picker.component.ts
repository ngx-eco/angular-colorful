// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { HsvaColor } from '../../interfaces/hsva-color.interface';
import { ColorModel } from '../../interfaces/color-model.interface';
import { hsvaStringToHsva, hsvaToHsvaString } from '../../utils/convert';



@Component({
  selector: 'hsva-string-color-picker',
  templateUrl: './hsva-string-color-picker.component.html',
  styleUrls: ['./hsva-string-color-picker.component.scss']
})
export class HsvaStringColorPickerComponent implements OnInit, ColorModel<string> {

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

  public toHsva = (hsv): HsvaColor => hsvaStringToHsva(hsv);

  public fromHsva = (hsva): string => hsvaToHsvaString(hsva);

  constructor() { }

  ngOnInit(): void { }

  @Output() onColorChanged = new EventEmitter<string>();

  colorChanged(color: HsvaColor): void {
    this.onColorChanged.emit(this.fromHsva(color));
  }

}
