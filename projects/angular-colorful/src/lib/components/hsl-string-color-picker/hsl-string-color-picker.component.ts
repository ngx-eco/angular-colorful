import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {HsvaColor} from '../../interfaces/hsva-color.interface';
import {ColorModel} from '../../interfaces/color-model.interface';
import {hslStringToHsva, hsvaToHslString} from '../../utils/convert';
import {defaultHslStringColor, defaultHsvaColor} from '../../utils/constants';


@Component({
    selector: 'hsl-string-color-picker',
    templateUrl: './hsl-string-color-picker.component.html',
    styleUrls: ['./hsl-string-color-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class HslStringColorPickerComponent implements OnChanges, ColorModel<string> {
  @Input() color: string = defaultHslStringColor;

  public toHsva = hslStringToHsva;
  public fromHsva = hsvaToHslString;

  public hsvaColor: HsvaColor = defaultHsvaColor;

  @Output() colorChanged: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.hsvaColor = this.toHsva(this.color);
  }

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
