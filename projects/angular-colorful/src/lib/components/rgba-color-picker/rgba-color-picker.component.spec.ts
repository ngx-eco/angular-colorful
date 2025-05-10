import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbaColorPickerComponent } from './rgba-color-picker.component';

describe('RgbaColorPickerComponent', () => {
  let component: RgbaColorPickerComponent;
  let fixture: ComponentFixture<RgbaColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgbaColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgbaColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
