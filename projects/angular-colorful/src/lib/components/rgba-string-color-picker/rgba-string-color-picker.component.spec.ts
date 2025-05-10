import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbaStringColorPickerComponent } from './rgba-string-color-picker.component';

describe('RgbaStringColorPickerComponent', () => {
  let component: RgbaStringColorPickerComponent;
  let fixture: ComponentFixture<RgbaStringColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgbaStringColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgbaStringColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
