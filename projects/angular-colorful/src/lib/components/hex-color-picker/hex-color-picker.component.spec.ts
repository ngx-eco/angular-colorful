import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexColorPickerComponent } from './hex-color-picker.component';

describe('HexColorPickerComponent', () => {
  let component: HexColorPickerComponent;
  let fixture: ComponentFixture<HexColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HexColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
