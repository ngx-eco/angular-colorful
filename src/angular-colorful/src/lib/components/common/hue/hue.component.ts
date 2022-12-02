// Angular
import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { hsvaToHslString } from '../../../utils/convert';
import { defaultHsvaColor } from '../../../utils/constants';
import { HsvaColor } from '../../../interfaces/hsva-color.interface';
import { Interaction } from '../../../interfaces/interaction.interface';



@Component({
  selector: 'hue',
  templateUrl: './hue.component.html',
  styleUrls: ['./hue.component.scss']
})
export class HueComponent implements OnInit, DoCheck {

  @Input() public color: HsvaColor = defaultHsvaColor;

  public top = '50%';
  public left = '';
  public bgColor = '';

  constructor() { }

  @Output() move = new EventEmitter();

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.f(this.color);
  }

  f(color: HsvaColor): void {
    this.left = `${(color.h * 100) / 360}%`;
    this.bgColor = hsvaToHslString({ h: color.h, s: 100, v: 100, a: 1 });
  }

  onMove($event: Interaction): void {
    this.left = `${$event.left}%`;
    this.color.h = ($event.left * 360) / 100;
    this.move.emit(this.color);
  }

}
