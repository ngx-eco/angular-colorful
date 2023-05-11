import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {HsvaColor} from '../../interfaces/hsva-color.interface';
import {ColorModel} from '../../interfaces/color-model.interface';
import {hsvaToHsvString, hsvStringToHsva} from '../../utils/convert';
import {defaultHsvaColor, defaultHsvStringColor} from '../../utils/constants';


@Component({
  selector: 'hsv-string-color-picker',
  templateUrl: './hsv-string-color-picker.component.html',
  styleUrls: ['./hsv-string-color-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HsvStringColorPickerComponent implements OnChanges, ColorModel<string> {
  @Input() color: string = defaultHsvStringColor;

  public toHsva = hsvStringToHsva;
  public fromHsva = hsvaToHsvString;

  public hsvaColor: HsvaColor = defaultHsvaColor;

  @Output() colorChanged: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.hsvaColor = this.toHsva(this.color);
  }

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
