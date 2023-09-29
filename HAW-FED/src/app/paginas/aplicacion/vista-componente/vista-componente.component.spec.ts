import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaComponenteComponent } from './vista-componente.component';

describe('VistaComponenteComponent', () => {
  let component: VistaComponenteComponent;
  let fixture: ComponentFixture<VistaComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaComponenteComponent]
    });
    fixture = TestBed.createComponent(VistaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
