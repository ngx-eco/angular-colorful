import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsvaStringColorPickerComponent } from './hsva-string-color-picker.component';

describe('HsvaStringColorPickerComponent', () => {
  let component: HsvaStringColorPickerComponent;
  let fixture: ComponentFixture<HsvaStringColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsvaStringColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsvaStringColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
