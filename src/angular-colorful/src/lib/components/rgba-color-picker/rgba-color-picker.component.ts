import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {hsvaToRgba, rgbaToHsva} from '../../utils/convert';
import {HsvaColor} from '../../interfaces/hsva-color.interface';
import {RgbaColor} from '../../interfaces/rgba-color.interface';
import {ColorModel} from '../../interfaces/color-model.interface';
import {defaultHsvaColor, defaultRgbaColor} from '../../utils/constants';


@Component({
  selector: 'rgba-color-picker',
  templateUrl: './rgba-color-picker.component.html',
  styleUrls: ['./rgba-color-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RgbaColorPickerComponent implements OnChanges, ColorModel<RgbaColor> {
  @Input() color: RgbaColor = defaultRgbaColor;

  public toHsva = rgbaToHsva;
  public fromHsva = hsvaToRgba;

  public hsvaColor: HsvaColor = defaultHsvaColor;

  @Output() colorChanged: EventEmitter<RgbaColor> = new EventEmitter<RgbaColor>();

  ngOnChanges(): void {
    this.hsvaColor = this.toHsva(this.color);
  }

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
