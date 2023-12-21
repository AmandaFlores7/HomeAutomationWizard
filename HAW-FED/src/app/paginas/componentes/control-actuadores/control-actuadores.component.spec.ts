import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlActuadoresComponent } from './control-actuadores.component';

describe('ControlActuadoresComponent', () => {
  let component: ControlActuadoresComponent;
  let fixture: ComponentFixture<ControlActuadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlActuadoresComponent]
    });
    fixture = TestBed.createComponent(ControlActuadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
