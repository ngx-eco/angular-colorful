import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {defaultHsvaColor} from '../../../utils/constants';
import {HsvaColor} from '../../../interfaces/hsva-color.interface';
import {SaturationComponent} from "../saturation/saturation.component";
import {HueComponent} from "../hue/hue.component";
import {AlphaComponent} from "../alpha/alpha.component";


@Component({
    selector: 'alpha-color-picker',
    templateUrl: './alpha-color-picker.component.html',
    styleUrls: ['./alpha-color-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, SaturationComponent, HueComponent, AlphaComponent],
})
export class AlphaColorPickerComponent {
  @Input() color: HsvaColor = defaultHsvaColor;

  @Output() colorChanged: EventEmitter<HsvaColor> = new EventEmitter<HsvaColor>();

  onColorChanged(color: HsvaColor): void {
    this.color = color;
    this.colorChanged.emit(color);
  }

}
