import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {HsvaColor} from '../../interfaces/hsva-color.interface';
import {ColorModel} from '../../interfaces/color-model.interface';
import {hsvaToRgbString, rgbStringToHsva} from '../../utils/convert';
import {defaultHsvaColor, defaultRgbStringColor} from '../../utils/constants';


@Component({
  selector: 'rgb-string-color-picker',
  templateUrl: './rgb-string-color-picker.component.html',
  styleUrls: ['./rgb-string-color-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RgbStringColorPickerComponent implements OnChanges, ColorModel<string> {
  @Input() color: string = defaultRgbStringColor;

  public toHsva = rgbStringToHsva;
  public fromHsva = hsvaToRgbString;

  public hsvaColor: HsvaColor = defaultHsvaColor;

  @Output() colorChanged: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.hsvaColor = this.toHsva(this.color);
  }

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
