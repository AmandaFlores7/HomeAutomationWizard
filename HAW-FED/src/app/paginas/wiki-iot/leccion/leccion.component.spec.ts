import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeccionComponent } from './leccion.component';

describe('LeccionComponent', () => {
  let component: LeccionComponent;
  let fixture: ComponentFixture<LeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeccionComponent]
    });
    fixture = TestBed.createComponent(LeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
