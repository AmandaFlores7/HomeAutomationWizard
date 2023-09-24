import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOpcionesComponent } from './menu-opciones.component';

describe('MenuOpcionesComponent', () => {
  let component: MenuOpcionesComponent;
  let fixture: ComponentFixture<MenuOpcionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuOpcionesComponent]
    });
    fixture = TestBed.createComponent(MenuOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
