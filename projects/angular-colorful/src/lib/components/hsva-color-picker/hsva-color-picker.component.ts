import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {defaultHsvaColor} from '../../utils/constants';
import {HsvaColor} from '../../interfaces/hsva-color.interface';
import {ColorModel} from '../../interfaces/color-model.interface';
import {AlphaColorPickerComponent} from "../common/alpha-color-picker/alpha-color-picker.component";


@Component({
    selector: 'hsva-color-picker',
    templateUrl: './hsva-color-picker.component.html',
    styleUrls: ['./hsva-color-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, AlphaColorPickerComponent],
})
export class HsvaColorPickerComponent implements OnChanges, ColorModel<HsvaColor> {
  @Input() color: HsvaColor = defaultHsvaColor;

  public hsvaColor: HsvaColor = defaultHsvaColor;

  @Output() colorChanged: EventEmitter<HsvaColor> = new EventEmitter<HsvaColor>();

  public toHsva = (hsva: HsvaColor): HsvaColor => (hsva);
  public fromHsva = (hsva: HsvaColor): HsvaColor => hsva;

  ngOnChanges(): void {
    this.hsvaColor = this.toHsva(this.color);
  }

  onColorChanged(color: HsvaColor): void {
    this.colorChanged.emit(this.fromHsva(color));
  }

}
