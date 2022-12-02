// Angular
import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { hsvaToHslString } from '../../../utils/convert';
import { defaultHsvaColor } from '../../../utils/constants';
import { HsvaColor } from '../../../interfaces/hsva-color.interface';
import { Interaction } from '../../../interfaces/interaction.interface';



@Component({
  selector: 'saturation',
  templateUrl: './saturation.component.html',
  styleUrls: ['./saturation.component.scss']
})
export class SaturationComponent implements OnInit, DoCheck {

  @Input() public color: HsvaColor = defaultHsvaColor;

  public top = '';
  public left = '';
  public bgColor = '';
  public grColor = '';

  constructor() { }

  @Output() move = new EventEmitter();

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.f(this.color);
  }

  f(color: HsvaColor): void {
    this.top = `${100 - color.v}%`;
    this.left = `${color.s}%`;
    this.bgColor = hsvaToHslString(this.color);
    this.grColor = hsvaToHslString({ h: color.h, s: 100, v: 100, a: 0 });
  }

  onMove($event: Interaction): void {
    this.color.s = $event.left;
    this.color.v = (100 - $event.top);
    this.move.emit(this.color);
  }

}
