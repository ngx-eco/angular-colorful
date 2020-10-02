import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbColorPickerComponent } from './rgb-color-picker.component';

describe('RgbColorPickerComponent', () => {
  let component: RgbColorPickerComponent;
  let fixture: ComponentFixture<RgbColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgbColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgbColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
