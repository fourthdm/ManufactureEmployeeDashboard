import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssisgnjobComponent } from './assisgnjob.component';

describe('AssisgnjobComponent', () => {
  let component: AssisgnjobComponent;
  let fixture: ComponentFixture<AssisgnjobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssisgnjobComponent]
    });
    fixture = TestBed.createComponent(AssisgnjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
