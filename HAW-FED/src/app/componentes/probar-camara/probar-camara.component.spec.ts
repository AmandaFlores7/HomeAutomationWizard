import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbarCamaraComponent } from './probar-camara.component';

describe('ProbarCamaraComponent', () => {
  let component: ProbarCamaraComponent;
  let fixture: ComponentFixture<ProbarCamaraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProbarCamaraComponent]
    });
    fixture = TestBed.createComponent(ProbarCamaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
