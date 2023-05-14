import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AnyColor, hsvaToRgbaString, RgbaColor, rgbaToHsva} from 'angular-colorful';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  public appColor = '';
  public textColor = '';
  public color: RgbaColor = {r: 0, g: 0, b: 0, a: 0};

  public colors: { [key: string]: { name: string, value: AnyColor } } = {
    hex: {name: 'HEX', value: '#406090'},
    rgb: {name: 'RGB', value: {r: 60, g: 80, b: 120}},
    hsl: {name: 'HSL', value: {h: 200, s: 25, l: 32}},
    hsv: {name: 'HSV', value: {h: 200, s: 25, v: 50}},
    rgbString: {name: 'RGB String', value: 'rgb(60, 80, 120)'},
    hslString: {name: 'HSL String', value: 'hsl(200, 25, 32)'},
    hsvString: {name: 'HSV String', value: 'hsv(200, 25, 50)'},
    rgba: {name: 'RGBA', value: {r: 60, g: 80, b: 120, a: 0.5}},
    hsla: {name: 'HSLA', value: {h: 200, s: 25, l: 32, a: 0.5}},
    hsva: {name: 'HSVA', value: {h: 200, s: 25, v: 50, a: 0.5}},
    rgbaString: {name: 'RGBA String', value: 'rgba(60, 80, 120, 0.5)'},
    hslaString: {name: 'HSLA String', value: 'hsla(200, 25, 32, 0.5)'},
    hsvaString: {name: 'HSVA String', value: 'hsva(200, 25, 50, 0.5)'},
  };

  ngOnInit(): void {
    this.color = this.getRandomColor();
    this.colorChanged(this.color);
  }

  public getName(type: string): AnyColor {
    if (typeof this.colors[type].value === 'string') {
      return this.colors[type].value;
    } else {
      return JSON.stringify(this.colors[type].value);
    }
  }

  public colorsChanged(color: AnyColor, type: string): void {
    this.colors[type].value = color;
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
