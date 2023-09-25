import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraParteComponent } from './primera-parte.component';

describe('PrimeraParteComponent', () => {
  let component: PrimeraParteComponent;
  let fixture: ComponentFixture<PrimeraParteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeraParteComponent]
    });
    fixture = TestBed.createComponent(PrimeraParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
