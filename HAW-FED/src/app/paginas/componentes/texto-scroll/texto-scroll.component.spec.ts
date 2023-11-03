import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoScrollComponent } from './texto-scroll.component';

describe('TextoScrollComponent', () => {
  let component: TextoScrollComponent;
  let fixture: ComponentFixture<TextoScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoScrollComponent]
    });
    fixture = TestBed.createComponent(TextoScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
