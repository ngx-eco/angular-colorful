import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaComponent } from './alpha.component';

describe('AlphaComponent', () => {
  let component: AlphaComponent;
  let fixture: ComponentFixture<AlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
