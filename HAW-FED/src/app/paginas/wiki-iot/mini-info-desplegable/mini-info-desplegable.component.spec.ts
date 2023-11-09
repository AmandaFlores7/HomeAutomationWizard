import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniInfoDesplegableComponent } from './mini-info-desplegable.component';

describe('MiniInfoDesplegableComponent', () => {
  let component: MiniInfoDesplegableComponent;
  let fixture: ComponentFixture<MiniInfoDesplegableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniInfoDesplegableComponent]
    });
    fixture = TestBed.createComponent(MiniInfoDesplegableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
