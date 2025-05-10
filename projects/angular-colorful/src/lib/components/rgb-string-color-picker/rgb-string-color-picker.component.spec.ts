import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbStringColorPickerComponent } from './rgb-string-color-picker.component';

describe('RgbStringColorPickerComponent', () => {
  let component: RgbStringColorPickerComponent;
  let fixture: ComponentFixture<RgbStringColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgbStringColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgbStringColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
