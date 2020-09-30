// Angular
import { Component, OnInit } from '@angular/core';

// Project
import { HsvaColor } from 'angular-colorful';
import { hsvaToHslaString } from 'src/angular-colorful/src/lib/utils/convert';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private _color: HsvaColor = { h: 70, s: 50, v: 70, a: 1 }

  public set color(color: HsvaColor) {
    this._color = color
  }

  public get color(): HsvaColor {
    return this._color
  }

  private _appColor: string

  public set appColor(color: string) {
    this._appColor = color;
  }

  public get appColor(): string {
    return this._appColor
  }

  ngOnInit(): void {
  }

}
