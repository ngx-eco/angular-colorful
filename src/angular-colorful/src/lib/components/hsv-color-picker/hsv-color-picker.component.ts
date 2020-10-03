// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { hsvaToHsv } from '../../utils/convert';
import { HsvColor } from '../../interfaces/hsv-color.interface';
import { HsvaColor } from '../../interfaces/hsva-color.interface';
import { ColorModel } from '../../interfaces/color-model.interface';



@Component({
  selector: 'hsv-color-picker',
  templateUrl: './hsv-color-picker.component.html',
  styleUrls: ['./hsv-color-picker.component.scss']
})
export class HsvColorPickerComponent implements OnInit, ColorModel<HsvColor> {

  public hsvaColor: HsvaColor;
  private _color: HsvColor;

  @Input() public set color(color: HsvColor) {
    this._color = color || this.defaultColor;
    this.hsvaColor = this.toHsva(color || this.defaultColor);
  }

  public get color(): HsvColor {
    return this._color;
  }

  public defaultColor: HsvColor = { h: 0, s: 0, v: 0 };

  public toHsva = ({ h, s, v }): HsvaColor => ({ h, s, v, a: 1 });
  
  public fromHsva = (hsva): HsvColor => hsvaToHsv(hsva);

  constructor() { }
  
  ngOnInit(): void { }

  @Output() onColorChanged = new EventEmitter<HsvColor>();

  colorChanged(color: HsvaColor): void {
    this.onColorChanged.emit(this.fromHsva(color));
  }

}
