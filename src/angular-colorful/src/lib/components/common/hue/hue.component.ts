import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, Output} from '@angular/core';
import {hsvaToHslString} from '../../../utils/convert';
import {defaultHsvaColor} from '../../../utils/constants';
import {HsvaColor} from '../../../interfaces/hsva-color.interface';
import {Interaction} from '../../../interfaces/interaction.interface';


@Component({
  selector: 'hue',
  templateUrl: './hue.component.html',
  styleUrls: ['./hue.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HueComponent implements DoCheck {
  @Input() color: HsvaColor = defaultHsvaColor;

  public left = '';
  public bgColor = '';

  @Output() move = new EventEmitter<HsvaColor>();

  constructor(
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngDoCheck(): void {
    this.f(this.color);
  }

  f(color: HsvaColor): void {
    this.left = `${(color.h * 100) / 360}%`;
    this.bgColor = hsvaToHslString({h: color.h, s: 100, v: 100, a: 1});
    this.cdr.markForCheck();
  }

  onMove($event: Interaction): void {
    this.left = `${$event.left}%`;
    this.color.h = ($event.left * 360) / 100;
    this.move.emit(this.color);
  }

}
