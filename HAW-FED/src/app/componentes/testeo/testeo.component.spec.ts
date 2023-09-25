import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteoComponent } from './testeo.component';

describe('TesteoComponent', () => {
  let component: TesteoComponent;
  let fixture: ComponentFixture<TesteoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TesteoComponent]
    });
    fixture = TestBed.createComponent(TesteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
