import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignjobComponent } from './designjob.component';

describe('DesignjobComponent', () => {
  let component: DesignjobComponent;
  let fixture: ComponentFixture<DesignjobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignjobComponent]
    });
    fixture = TestBed.createComponent(DesignjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
