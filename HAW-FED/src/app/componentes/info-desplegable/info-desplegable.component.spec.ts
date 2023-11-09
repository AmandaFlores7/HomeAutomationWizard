import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDesplegableComponent } from './info-desplegable.component';

describe('InfoDesplegableComponent', () => {
  let component: InfoDesplegableComponent;
  let fixture: ComponentFixture<InfoDesplegableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoDesplegableComponent]
    });
    fixture = TestBed.createComponent(InfoDesplegableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
