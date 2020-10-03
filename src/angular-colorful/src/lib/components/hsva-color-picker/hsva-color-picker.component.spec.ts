import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsvaColorPickerComponent } from './hsva-color-picker.component';

describe('HsvaColorPickerComponent', () => {
  let component: HsvaColorPickerComponent;
  let fixture: ComponentFixture<HsvaColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsvaColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsvaColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
