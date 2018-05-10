import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMovieProfileComponent } from './dashboard-movie-profile.component';

describe('DashboardMovieProfileComponent', () => {
  let component: DashboardMovieProfileComponent;
  let fixture: ComponentFixture<DashboardMovieProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMovieProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMovieProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
