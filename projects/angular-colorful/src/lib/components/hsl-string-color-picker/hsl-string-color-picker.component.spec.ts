import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HslStringColorPickerComponent } from './hsl-string-color-picker.component';

describe('HslStringColorPickerComponent', () => {
  let component: HslStringColorPickerComponent;
  let fixture: ComponentFixture<HslStringColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HslStringColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HslStringColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
