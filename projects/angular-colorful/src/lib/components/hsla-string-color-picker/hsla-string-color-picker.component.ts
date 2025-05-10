import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {hslStringToHsva, hsvaToHslString} from '../../utils/convert';
import {ColorModel} from '../../interfaces/color-model.interface';
import {HsvaColor} from '../../interfaces/hsva-color.interface';
import {defaultHslaStringColor, defaultHsvaColor} from '../../utils/constants';


@Component({
    selector: 'hsla-string-color-picker',
    templateUrl: './hsla-string-color-picker.component.html',
    styleUrls: ['./hsla-string-color-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class HslaStringColorPickerComponent implements OnChanges, ColorModel<string> {
  @Input() color: string = defaultHslaStringColor;

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
