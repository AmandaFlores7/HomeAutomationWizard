import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAplicacionComponent } from './menu-aplicacion.component';

describe('MenuAplicacionComponent', () => {
  let component: MenuAplicacionComponent;
  let fixture: ComponentFixture<MenuAplicacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuAplicacionComponent]
    });
    fixture = TestBed.createComponent(MenuAplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
