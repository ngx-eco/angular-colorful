// Angular
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Angular
import { HsvaColor } from '../../../interfaces/color-types';



@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  private _color: HsvaColor;

  @Input() public set color(color: HsvaColor) {
    this._color = color;
  }

  public get color(): HsvaColor {
    return this._color;
  }

  constructor() { }

  @Output() onColorChanged = new EventEmitter<string>();

  ngOnInit(): void {
  }

  colorChanged(color): void {
    this.color = color;
    this.onColorChanged.emit(color);
  }

}