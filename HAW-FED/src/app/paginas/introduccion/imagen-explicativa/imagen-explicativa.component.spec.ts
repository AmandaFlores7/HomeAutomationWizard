import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenExplicativaComponent } from './imagen-explicativa.component';

describe('ImagenExplicativaComponent', () => {
  let component: ImagenExplicativaComponent;
  let fixture: ComponentFixture<ImagenExplicativaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagenExplicativaComponent]
    });
    fixture = TestBed.createComponent(ImagenExplicativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
