import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HslaColorPickerComponent } from './hsla-color-picker.component';

describe('HslaColorPickerComponent', () => {
  let component: HslaColorPickerComponent;
  let fixture: ComponentFixture<HslaColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HslaColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HslaColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
