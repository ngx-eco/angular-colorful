import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HslColorPickerComponent } from './hsl-color-picker.component';

describe('HslColorPickerComponent', () => {
  let component: HslColorPickerComponent;
  let fixture: ComponentFixture<HslColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HslColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HslColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
