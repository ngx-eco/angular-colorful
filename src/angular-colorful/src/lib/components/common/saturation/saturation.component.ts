// Angular
import { Component, DoCheck, Input, OnInit } from '@angular/core';

// Project
import { HsvaColor } from '../../../interfaces/color-types';
import { hslStringToHsva, hsvaToHslString } from '../../../utils/convert';



@Component({
  selector: 'saturation',
  templateUrl: './saturation.component.html',
  styleUrls: ['./saturation.component.scss']
})
export class SaturationComponent implements OnInit, DoCheck {
  
  top: string = '';
  left: string = '';
  
  private _color: HsvaColor;
  
  @Input() public set color(color: HsvaColor) {
    this._color = color;
  }

  public get color(): HsvaColor {
    return this._color
  }

  private _bgColor: string = '';

  public set bgColor(bgColor: string) {
    this._bgColor = bgColor;
  }

  public get bgColor(): string {
    return this._bgColor
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.f(this.color)
  }

  f(color): void {
    this.top = `${100 - color.v}%`
    this.left = `${color.s}%`
    this.bgColor = hsvaToHslString({ h: color.h, s: 100, v: 100, a: 1 });
  }

}
