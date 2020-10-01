// Angular
import { Component, OnInit } from '@angular/core';

// Project
import { HsvaColor, hsvaToHslaString, RgbaColor, rgbaToHsva } from 'angular-colorful';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public appColor: string;
  private _color: HsvaColor;

  public set color(color: HsvaColor) {
    this.appColor = hsvaToHslaString(color);
    this._color = color;
  }

  public get color(): HsvaColor {
    return this._color;
  }

  ngOnInit(): void {
    this.color = rgbaToHsva(this.getRandomColor());
  }

  colorChanged(color): void {
    this.appColor = hsvaToHslaString(color);
    this.color = color;
  }

  getRandomColor = (): RgbaColor => {
    const colors = [
      { r: 209, g: 97, b: 28, a: 1 }, // orange
      { r: 34, g: 91, b: 161, a: 1 }, // blue
      { r: 225, g: 17, b: 135, a: 0.7625 }, // purple
      { r: 21, g: 139, b: 59, a: 1 }, // green
      { r: 189, g: 60, b: 60, a: 1 }, // salmon
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

}
