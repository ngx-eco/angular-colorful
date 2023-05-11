import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, Output} from '@angular/core';
import {hsvaToHslaString} from '../../../utils/convert';
import {defaultHsvaColor} from '../../../utils/constants';
import {HsvaColor} from '../../../interfaces/hsva-color.interface';
import {Interaction} from '../../../interfaces/interaction.interface';


@Component({
  selector: 'alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlphaComponent implements DoCheck {
  @Input() color: HsvaColor = defaultHsvaColor;

  public left = '';
  public bgColor = '';
  public bgColorFrom = '';
  public bgColorTo = '';

  @Output() move = new EventEmitter<HsvaColor>();

  constructor(
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngDoCheck(): void {
    this.f(this.color);
  }

  f(color: HsvaColor): void {
    this.left = `${color.a * 100}%`;
    this.bgColor = hsvaToHslaString(this.color);
    this.bgColorFrom = hsvaToHslaString({ h: color.h, s: color.s, v: color.v, a: 0 });
    this.bgColorTo = hsvaToHslaString({ h: color.h, s: color.s, v: color.v, a: 1 });
    this.cdr.markForCheck();
  }

  onMove($event: Interaction): void {
    this.color.a = $event.left / 100;
    this.move.emit(this.color);
  }

}
