import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HueComponent } from './hue.component';

describe('HueComponent', () => {
  let component: HueComponent;
  let fixture: ComponentFixture<HueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
