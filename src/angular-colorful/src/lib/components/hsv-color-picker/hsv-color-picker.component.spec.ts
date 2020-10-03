import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsvColorPickerComponent } from './hsv-color-picker.component';

describe('HsvColorPickerComponent', () => {
  let component: HsvColorPickerComponent;
  let fixture: ComponentFixture<HsvColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsvColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsvColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
