import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashHawComponent } from './splash-haw.component';

describe('SplashHawComponent', () => {
  let component: SplashHawComponent;
  let fixture: ComponentFixture<SplashHawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplashHawComponent]
    });
    fixture = TestBed.createComponent(SplashHawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
