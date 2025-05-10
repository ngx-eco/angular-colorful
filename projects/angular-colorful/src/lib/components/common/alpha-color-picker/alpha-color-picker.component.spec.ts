import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaColorPickerComponent } from './alpha-color-picker.component';

describe('AlphaColorPickerComponent', () => {
  let component: AlphaColorPickerComponent;
  let fixture: ComponentFixture<AlphaColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphaColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
