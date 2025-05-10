import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularColorfulModule, AnyColor} from 'angular-colorful';
import {RouterModule} from '@angular/router';
import {LandingHeaderComponent} from './landing-header/landing-header.component';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    imports: [
        CommonModule,
        RouterModule,
        AngularColorfulModule,
        LandingHeaderComponent,
    ]
})
export class LandingComponent {

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
}
