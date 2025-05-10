import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HsvaColor} from '../../../interfaces/hsva-color.interface';
import {defaultHsvaColor} from '../../../utils/constants';
import {SaturationComponent} from "../saturation/saturation.component";
import {HueComponent} from "../hue/hue.component";


@Component({
    selector: 'color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, SaturationComponent, HueComponent],
})
export class ColorPickerComponent {

  @Input() public color: HsvaColor = defaultHsvaColor;

  @Output() colorChanged: EventEmitter<HsvaColor> = new EventEmitter<HsvaColor>();

  onColorChanged(color: HsvaColor): void {
    this.color = color;
    this.colorChanged.emit(color);
  }

}
