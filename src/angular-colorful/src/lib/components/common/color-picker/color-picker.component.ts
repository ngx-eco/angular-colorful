import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {HsvaColor} from '../../../interfaces/hsva-color.interface';
import {defaultHsvaColor} from '../../../utils/constants';


@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerComponent {

  @Input() public color: HsvaColor = defaultHsvaColor;

  @Output() colorChanged: EventEmitter<HsvaColor> = new EventEmitter<HsvaColor>();

  onColorChanged(color: HsvaColor): void {
    this.color = color;
    this.colorChanged.emit(color);
  }

}
