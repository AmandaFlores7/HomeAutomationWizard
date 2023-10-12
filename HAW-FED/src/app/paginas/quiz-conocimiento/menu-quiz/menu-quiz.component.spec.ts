import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuQuizComponent } from './menu-quiz.component';

describe('MenuQuizComponent', () => {
  let component: MenuQuizComponent;
  let fixture: ComponentFixture<MenuQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuQuizComponent]
    });
    fixture = TestBed.createComponent(MenuQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
