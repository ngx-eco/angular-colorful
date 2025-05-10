import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, Output} from '@angular/core';
import {hsvaToHslString} from '../../../utils/convert';
import {defaultHsvaColor} from '../../../utils/constants';
import {HsvaColor} from '../../../interfaces/hsva-color.interface';
import {Interaction} from '../../../interfaces/interaction.interface';


@Component({
    selector: 'saturation',
    templateUrl: './saturation.component.html',
    styleUrls: ['./saturation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class SaturationComponent implements DoCheck {
  @Input() color: HsvaColor = defaultHsvaColor;

  public top = '';
  public left = '';
  public bgColor = '';
  public grColor = '';

  @Output() move = new EventEmitter<HsvaColor>();

  constructor(
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngDoCheck(): void {
    this.f(this.color);
  }

  f(color: HsvaColor): void {
    this.top = `${100 - color.v}%`;
    this.left = `${color.s}%`;
    this.bgColor = hsvaToHslString(this.color);
    this.grColor = hsvaToHslString({h: color.h, s: 100, v: 100, a: 0});
    this.cdr.markForCheck();
  }

  onMove($event: Interaction): void {
    this.color.s = $event.left;
    this.color.v = (100 - $event.top);
    this.move.emit(this.color);
  }

}
