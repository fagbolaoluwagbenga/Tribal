import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardArrivalsComponent } from './dashboard-arrivals.component';

describe('DashboardArrivalsComponent', () => {
  let component: DashboardArrivalsComponent;
  let fixture: ComponentFixture<DashboardArrivalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardArrivalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
