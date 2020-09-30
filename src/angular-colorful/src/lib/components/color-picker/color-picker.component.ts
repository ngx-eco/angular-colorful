// Angular
import { Component, DoCheck, Input, OnInit } from '@angular/core';

// Angular
import { HsvaColor } from '../../interfaces/color-types';



@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit, DoCheck {

  private _color: HsvaColor;

  @Input() public set color(color: HsvaColor) {
    this._color = color;
  }
  
  public get color(): HsvaColor {
    return this._color;
  }

  constructor() { }
  
  ngOnInit(): void {
  }

  ngDoCheck() {
    // console.log(this.color);
    
  }

}
