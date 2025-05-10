import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {defaultHsvaColor, defaultRgbaStringColor} from '../../utils/constants';
import {HsvaColor} from '../../interfaces/hsva-color.interface';
import {ColorModel} from '../../interfaces/color-model.interface';
import {hsvaToRgbaString, rgbaStringToHsva} from '../../utils/convert';
import {AlphaColorPickerComponent} from "../common/alpha-color-picker/alpha-color-picker.component";


@Component({
    selector: 'rgba-string-color-picker',
    templateUrl: './rgba-string-color-picker.component.html',
    styleUrls: ['./rgba-string-color-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, AlphaColorPickerComponent],
})
export class RgbaStringColorPickerComponent implements OnChanges, ColorModel<string> {
  @Input() color: string = defaultRgbaStringColor;

  public toHsva = rgbaStringToHsva;
  public fromHsva = hsvaToRgbaString;

  public hsvaColor: HsvaColor = defaultHsvaColor;

  @Output() colorChanged: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.hsvaColor = this.toHsva(this.color);
  }

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
