import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HsvaColor} from '../../interfaces/hsva-color.interface';
import {ColorModel} from '../../interfaces/color-model.interface';
import {hsvaStringToHsva, hsvaToHsvaString} from '../../utils/convert';
import {defaultHsvaColor, defaultHsvaStringColor} from '../../utils/constants';
import {AlphaColorPickerComponent} from "../common/alpha-color-picker/alpha-color-picker.component";


@Component({
    selector: 'hsva-string-color-picker',
    templateUrl: './hsva-string-color-picker.component.html',
    styleUrls: ['./hsva-string-color-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, AlphaColorPickerComponent],
})
export class HsvaStringColorPickerComponent implements OnChanges, ColorModel<string> {
  @Input() color: string = defaultHsvaStringColor;

  public toHsva = hsvaStringToHsva;
  public fromHsva = hsvaToHsvaString;

  public hsvaColor: HsvaColor = defaultHsvaColor;

  @Output() colorChanged: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.hsvaColor = this.toHsva(this.color);
  }

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
