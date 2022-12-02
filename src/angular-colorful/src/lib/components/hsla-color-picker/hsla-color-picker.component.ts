// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { hslaToHsva, hsvaToHsla } from '../../utils/convert';
import { HsvaColor } from '../../interfaces/hsva-color.interface';
import { HslaColor } from '../../interfaces/hsla-color.interface';
import { ColorModel } from '../../interfaces/color-model.interface';
import {defaultHslaColor, defaultHsvaColor} from '../../utils/constants';



@Component({
  selector: 'hsla-color-picker',
  templateUrl: './hsla-color-picker.component.html',
  styleUrls: ['./hsla-color-picker.component.scss']
})
export class HslaColorPickerComponent implements OnInit, ColorModel<HslaColor> {

  public hsvaColor: HsvaColor = defaultHsvaColor;
  private _color: HslaColor = defaultHslaColor;

  @Input() public set color(color: HslaColor) {
    this._color = color || this.defaultColor;
    this.hsvaColor = this.toHsva(color || this.defaultColor);
  }

  public get color(): HslaColor {
    return this._color;
  }

  public defaultColor: HslaColor = { h: 0, s: 0, l: 0, a: 1 };

  public toHsva = (hsla: HslaColor): HsvaColor => hslaToHsva(hsla);

  public fromHsva = (hsva: HsvaColor): HslaColor => hsvaToHsla(hsva);

  constructor() { }

  ngOnInit(): void { }

  @Output() colorChanged = new EventEmitter<HslaColor>();

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
