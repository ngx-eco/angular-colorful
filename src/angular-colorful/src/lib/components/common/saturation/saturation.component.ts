// Angular
import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { hsvaToHslString } from '../../../utils/convert';
import { HsvaColor } from '../../../interfaces/hsva-color.interface';



@Component({
  selector: 'saturation',
  templateUrl: './saturation.component.html',
  styleUrls: ['./saturation.component.scss']
})
export class SaturationComponent implements OnInit, DoCheck {

  @Input() public color: HsvaColor;

  public top: string = '';
  public left: string = '';
  public bgColor: string = '';
  public grColor: string = '';

  constructor() { }

  @Output() onMove = new EventEmitter();

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.f(this.color);
  }

  f(color): void {
    this.top = `${100 - color.v}%`;
    this.left = `${color.s}%`;
    this.bgColor = hsvaToHslString(this.color);
    this.grColor = hsvaToHslString({ h: color.h, s: 100, v: 100, a: 0 });
  }

  move($event): void {
    this.color.s = $event.left;
    this.color.v = (100 - $event.top);
    this.onMove.emit(this.color);
  }

}
