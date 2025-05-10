import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {hslaToHsva, hsvaToHsla} from '../../utils/convert';
import {HsvaColor} from '../../interfaces/hsva-color.interface';
import {HslaColor} from '../../interfaces/hsla-color.interface';
import {ColorModel} from '../../interfaces/color-model.interface';
import {defaultHslaColor, defaultHsvaColor} from '../../utils/constants';
import {AlphaColorPickerComponent} from "../common/alpha-color-picker/alpha-color-picker.component";


@Component({
    selector: 'hsla-color-picker',
    templateUrl: './hsla-color-picker.component.html',
    styleUrls: ['./hsla-color-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, AlphaColorPickerComponent],
})
export class HslaColorPickerComponent implements OnChanges, ColorModel<HslaColor> {
  @Input() color: HslaColor = defaultHslaColor;

  public toHsva = hslaToHsva;
  public fromHsva = hsvaToHsla;

  public hsvaColor: HsvaColor = defaultHsvaColor;

  @Output() colorChanged: EventEmitter<HslaColor> = new EventEmitter<HslaColor>();

  ngOnChanges(): void {
    this.hsvaColor = this.toHsva(this.color);
  }

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
