import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComingsoonComponent } from './dashboard-comingsoon.component';

describe('DashboardComingsoonComponent', () => {
  let component: DashboardComingsoonComponent;
  let fixture: ComponentFixture<DashboardComingsoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComingsoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComingsoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
