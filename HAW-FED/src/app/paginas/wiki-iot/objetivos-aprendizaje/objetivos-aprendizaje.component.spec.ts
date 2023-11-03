import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosAprendizajeComponent } from './objetivos-aprendizaje.component';

describe('ObjetivosAprendizajeComponent', () => {
  let component: ObjetivosAprendizajeComponent;
  let fixture: ComponentFixture<ObjetivosAprendizajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjetivosAprendizajeComponent]
    });
    fixture = TestBed.createComponent(ObjetivosAprendizajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
