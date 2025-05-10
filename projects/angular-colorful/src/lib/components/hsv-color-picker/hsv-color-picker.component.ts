import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {hsvaToHsv} from '../../utils/convert';
import {HsvColor} from '../../interfaces/hsv-color.interface';
import {HsvaColor} from '../../interfaces/hsva-color.interface';
import {ColorModel} from '../../interfaces/color-model.interface';
import {defaultHsvaColor, defaultHsvColor} from '../../utils/constants';
import {ColorPickerComponent} from "../common/color-picker/color-picker.component";


@Component({
    selector: 'hsv-color-picker',
    templateUrl: './hsv-color-picker.component.html',
    styleUrls: ['./hsv-color-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, ColorPickerComponent],
})
export class HsvColorPickerComponent implements OnChanges, ColorModel<HsvColor> {
  @Input() color: HsvColor = defaultHsvColor;

  public hsvaColor: HsvaColor = defaultHsvaColor;

  @Output() colorChanged: EventEmitter<HsvColor> = new EventEmitter<HsvColor>();

  public fromHsva = hsvaToHsv;
  public toHsva = ({h, s, v}: HsvColor): HsvaColor => ({h, s, v, a: 1});

  ngOnChanges(): void {
    this.hsvaColor = this.toHsva(this.color);
  }

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
