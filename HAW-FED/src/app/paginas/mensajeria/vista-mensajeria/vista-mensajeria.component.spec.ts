import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMensajeriaComponent } from './vista-mensajeria.component';

describe('VistaMensajeriaComponent', () => {
  let component: VistaMensajeriaComponent;
  let fixture: ComponentFixture<VistaMensajeriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaMensajeriaComponent]
    });
    fixture = TestBed.createComponent(VistaMensajeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
