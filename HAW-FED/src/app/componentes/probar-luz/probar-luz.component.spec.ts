import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbarLuzComponent } from './probar-luz.component';

describe('ProbarLuzComponent', () => {
  let component: ProbarLuzComponent;
  let fixture: ComponentFixture<ProbarLuzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProbarLuzComponent]
    });
    fixture = TestBed.createComponent(ProbarLuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
