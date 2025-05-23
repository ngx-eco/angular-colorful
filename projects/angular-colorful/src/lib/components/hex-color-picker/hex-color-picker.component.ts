import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ColorModel} from '../../interfaces/color-model.interface';
import {HsvaColor} from '../../interfaces/hsva-color.interface';
import {hexToHsva, hsvaToHex} from '../../utils/convert';
import {defaultHexStringColor, defaultHsvaColor} from '../../utils/constants';
import {ColorPickerComponent} from "../common/color-picker/color-picker.component";


@Component({
    selector: 'hex-color-picker',
    templateUrl: './hex-color-picker.component.html',
    styleUrls: ['./hex-color-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, ColorPickerComponent],
})
export class HexColorPickerComponent implements OnChanges, ColorModel<string> {
  @Input() color: string = defaultHexStringColor;

  public toHsva = hexToHsva;
  public fromHsva = hsvaToHex;

  public hsvaColor: HsvaColor = defaultHsvaColor;

  @Output() colorChanged: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.hsvaColor = this.toHsva(this.color);
  }

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
