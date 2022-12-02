// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { HsvaColor } from '../../../interfaces/hsva-color.interface';
import { defaultHsvaColor } from '../../../utils/constants';



@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  // private _color: HsvaColor;

  // @Input() public set color(color: HsvaColor) {
  //   this._color = color;
  // }

  // public get color(): HsvaColor {
  //   return this._color;
  // }

  @Input() public color: HsvaColor = defaultHsvaColor;

  constructor() { }

  @Output() colorChanged = new EventEmitter<HsvaColor>();

  ngOnInit(): void {
  }

  onColorChanged(color: HsvaColor): void {
    this.color = color;
    this.colorChanged.emit(color);
  }

}
