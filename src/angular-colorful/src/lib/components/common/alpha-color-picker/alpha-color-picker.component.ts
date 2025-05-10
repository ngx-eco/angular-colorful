import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {defaultHsvaColor} from '../../../utils/constants';
import {HsvaColor} from '../../../interfaces/hsva-color.interface';


@Component({
    selector: 'alpha-color-picker',
    templateUrl: './alpha-color-picker.component.html',
    styleUrls: ['./alpha-color-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AlphaColorPickerComponent {
  @Input() color: HsvaColor = defaultHsvaColor;

  @Output() colorChanged: EventEmitter<HsvaColor> = new EventEmitter<HsvaColor>();

  onColorChanged(color: HsvaColor): void {
    this.color = color;
    this.colorChanged.emit(color);
  }

}
