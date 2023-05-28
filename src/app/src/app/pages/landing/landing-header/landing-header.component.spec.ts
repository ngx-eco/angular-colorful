import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LandingHeaderComponent} from './landing-header.component';

describe('LandingHeaderComponent', () => {
  let component: LandingHeaderComponent;
  let fixture: ComponentFixture<LandingHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LandingHeaderComponent]
    });
    fixture = TestBed.createComponent(LandingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
