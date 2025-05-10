import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {HslColor} from '../../interfaces/hsl-color.interface';
import {HsvaColor} from '../../interfaces/hsva-color.interface';
import {ColorModel} from '../../interfaces/color-model.interface';
import {hslaToHsl, hslaToHsva, hsvaToHsla} from '../../utils/convert';
import {defaultHslColor, defaultHsvaColor} from '../../utils/constants';


@Component({
    selector: 'hsl-color-picker',
    templateUrl: './hsl-color-picker.component.html',
    styleUrls: ['./hsl-color-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class HslColorPickerComponent implements OnChanges, ColorModel<HslColor> {
  @Input() color: HslColor = defaultHslColor;

  public hsvaColor: HsvaColor = defaultHsvaColor;

  @Output() colorChanged: EventEmitter<HslColor> = new EventEmitter<HslColor>();

  public toHsva = ({h, s, l}: HslColor): HsvaColor => hslaToHsva({h, s, l, a: 1});
  public fromHsva = (hsva: HsvaColor): HslColor => hslaToHsl(hsvaToHsla(hsva));

  ngOnChanges(): void {
    this.hsvaColor = this.toHsva(this.color);
  }

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
