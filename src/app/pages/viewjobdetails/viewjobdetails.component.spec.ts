import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewjobdetailsComponent } from './viewjobdetails.component';

describe('ViewjobdetailsComponent', () => {
  let component: ViewjobdetailsComponent;
  let fixture: ComponentFixture<ViewjobdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewjobdetailsComponent]
    });
    fixture = TestBed.createComponent(ViewjobdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
