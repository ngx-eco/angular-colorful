// Angular
import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { HsvaColor } from '../../../interfaces/hsva-color.interface';
import { Interaction } from '../../../interfaces/interaction.interface';
import { hsvaToHslaString, hsvaToHslString } from '../../../utils/convert';



@Component({
  selector: 'alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.scss']
})
export class AlphaComponent implements OnInit, DoCheck {

  @Input() public color: HsvaColor;

  public left: string = '';
  public top: string = '50%';
  public bgColor: string = '';
  public bgColor0: string = '';
  public bgColor1: string = '';

  constructor() { }

  @Output() onMove = new EventEmitter();

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.f(this.color);
  }

  f(color): void {
    this.left = `${color.a * 100}%`;
    this.bgColor = hsvaToHslaString(this.color);
    this.bgColor0 = hsvaToHslaString({ h: color.h, s: color.s, v: color.v, a: 0 });
    this.bgColor1 = hsvaToHslaString({ h: color.h, s: color.s, v: color.v, a: 1 });
  }

  move($event: Interaction): void {
    this.color.a = $event.left / 100;
    this.onMove.emit(this.color);
  }

}
