// Angular
import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { hsvaToHslaString } from '../../../utils/convert';
import { defaultHsvaColor } from '../../../utils/constants';
import { HsvaColor } from '../../../interfaces/hsva-color.interface';
import { Interaction } from '../../../interfaces/interaction.interface';



@Component({
  selector: 'alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.scss']
})
export class AlphaComponent implements OnInit, DoCheck {

  @Input() public color: HsvaColor = defaultHsvaColor;

  public left = '';
  public top = '50%';
  public bgColor = '';
  public bgColor0 = '';
  public bgColor1 = '';

  constructor() { }

  @Output() move = new EventEmitter();

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.f(this.color);
  }

  f(color: HsvaColor): void {
    this.left = `${color.a * 100}%`;
    this.bgColor = hsvaToHslaString(this.color);
    this.bgColor0 = hsvaToHslaString({ h: color.h, s: color.s, v: color.v, a: 0 });
    this.bgColor1 = hsvaToHslaString({ h: color.h, s: color.s, v: color.v, a: 1 });
  }

  onMove($event: Interaction): void {
    this.color.a = $event.left / 100;
    this.move.emit(this.color);
  }

}
