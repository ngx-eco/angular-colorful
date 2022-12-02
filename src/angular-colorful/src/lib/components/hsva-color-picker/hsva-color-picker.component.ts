// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { defaultHsvaColor } from '../../utils/constants';
import { HsvaColor } from '../../interfaces/hsva-color.interface';
import { ColorModel } from '../../interfaces/color-model.interface';



@Component({
  selector: 'hsva-color-picker',
  templateUrl: './hsva-color-picker.component.html',
  styleUrls: ['./hsva-color-picker.component.scss']
})
export class HsvaColorPickerComponent implements OnInit, ColorModel<HsvaColor> {

  public hsvaColor: HsvaColor = defaultHsvaColor;
  private _color: HsvaColor = defaultHsvaColor;

  @Input() public set color(color: HsvaColor) {
    this._color = color || this.defaultColor;
    this.hsvaColor = this.toHsva(color || this.defaultColor);
  }

  public get color(): HsvaColor {
    return this._color;
  }

  public defaultColor: HsvaColor = { h: 0, s: 0, v: 0, a: 1 };

  public toHsva = (hsva: HsvaColor): HsvaColor => (hsva);

  public fromHsva = (hsva: HsvaColor): HsvaColor => hsva;

  constructor() { }

  ngOnInit(): void { }

  @Output() colorChanged = new EventEmitter<HsvaColor>();

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
