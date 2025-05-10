import {Injectable} from '@angular/core';
import {hsvaToRgbaString, RgbaColor, rgbaToHsva} from 'angular-colorful';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  public appColor = '';
  public textColor = '';
  public color: RgbaColor = {r: 0, g: 0, b: 0, a: 0};

  public init(): void {
    this.color = this.getRandomColor();
    this.colorChanged(this.color);
  }

  public colorChanged(color: RgbaColor): void {
    this.textColor = this.getBrightness(color) > 128 || color.a < 0.5 ? '#000' : '#FFF';
    this.appColor = hsvaToRgbaString(rgbaToHsva(color));
  }

  // See http://www.w3.org/TR/AERT#color-contrast
  private getBrightness({r, g, b}: RgbaColor): number {
    return (r * 299 + g * 587 + b * 114) / 1000;
  }

  private getRandomColor(): RgbaColor {
    const colors: RgbaColor[] = [
      {r: 209, g: 97, b: 28, a: 1}, // orange
      {r: 34, g: 91, b: 161, a: 1}, // blue
      {r: 225, g: 17, b: 135, a: 0.7625}, // purple
      {r: 21, g: 139, b: 59, a: 1}, // green
      {r: 189, g: 60, b: 60, a: 1}, // salmon
      {r: 128, g: 128, b: 0, a: 1}, // olive
      {r: 0, g: 128, b: 128, a: 1}, // blue-green
      {r: 128, g: 0, b: 128, a: 1}, // purple
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

}
