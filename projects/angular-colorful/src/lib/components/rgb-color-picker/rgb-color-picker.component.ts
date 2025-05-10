import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {RgbColor} from '../../interfaces/rgb-color.interface';
import {HsvaColor} from '../../interfaces/hsva-color.interface';
import {ColorModel} from '../../interfaces/color-model.interface';
import {hsvaToRgba, rgbaToHsva, rgbaToRgb} from '../../utils/convert';
import {defaultHsvaColor, defaultRgbColor} from '../../utils/constants';


@Component({
    selector: 'rgb-color-picker',
    templateUrl: './rgb-color-picker.component.html',
    styleUrls: ['./rgb-color-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class RgbColorPickerComponent implements OnChanges, ColorModel<RgbColor> {
  @Input() color: RgbColor = defaultRgbColor;

  public hsvaColor: HsvaColor = defaultHsvaColor;

  @Output() colorChanged: EventEmitter<RgbColor> = new EventEmitter<RgbColor>();

  public toHsva = ({r, g, b}: RgbColor): HsvaColor => rgbaToHsva({r, g, b, a: 1});
  public fromHsva = (hsva: HsvaColor): RgbColor => rgbaToRgb(hsvaToRgba(hsva));

  ngOnChanges(): void {
    this.hsvaColor = this.toHsva(this.color);
  }

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
