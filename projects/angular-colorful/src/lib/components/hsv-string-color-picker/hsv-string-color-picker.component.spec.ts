import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsvStringColorPickerComponent } from './hsv-string-color-picker.component';

describe('HsvStringColorPickerComponent', () => {
  let component: HsvStringColorPickerComponent;
  let fixture: ComponentFixture<HsvStringColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsvStringColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsvStringColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
