import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HslaStringColorPickerComponent } from './hsla-string-color-picker.component';

describe('HslaStringColorPickerComponent', () => {
  let component: HslaStringColorPickerComponent;
  let fixture: ComponentFixture<HslaStringColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HslaStringColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HslaStringColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
