import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPuertaComponent } from './control-puerta.component';

describe('ControlPuertaComponent', () => {
  let component: ControlPuertaComponent;
  let fixture: ComponentFixture<ControlPuertaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPuertaComponent]
    });
    fixture = TestBed.createComponent(ControlPuertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
