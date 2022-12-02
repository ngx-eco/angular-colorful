// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { defaultHsvaColor } from '../../../utils/constants';
import { HsvaColor } from '../../../interfaces/hsva-color.interface';



@Component({
  selector: 'alpha-color-picker',
  templateUrl: './alpha-color-picker.component.html',
  styleUrls: ['./alpha-color-picker.component.scss']
})
export class AlphaColorPickerComponent implements OnInit {

  private _color: HsvaColor = defaultHsvaColor;

  @Input() public set color(color: HsvaColor) {
    this._color = color;
  }

  public get color(): HsvaColor {
    return this._color;
  }

  constructor() { }

  @Output() onColorChanged = new EventEmitter<HsvaColor>();

  ngOnInit(): void {
  }

  colorChanged(color: HsvaColor): void {
    this.color = color;
    this.onColorChanged.emit(color);
  }

}
