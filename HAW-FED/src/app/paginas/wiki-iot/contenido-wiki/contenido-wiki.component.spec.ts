import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoWikiComponent } from './contenido-wiki.component';

describe('ContenidoWikiComponent', () => {
  let component: ContenidoWikiComponent;
  let fixture: ComponentFixture<ContenidoWikiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoWikiComponent]
    });
    fixture = TestBed.createComponent(ContenidoWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
