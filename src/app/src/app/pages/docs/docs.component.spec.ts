import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DocsComponent} from './docs.component';

describe('DocsComponent', () => {
  let component: DocsComponent;
  let fixture: ComponentFixture<DocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DocsComponent]
    });
    fixture = TestBed.createComponent(DocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
