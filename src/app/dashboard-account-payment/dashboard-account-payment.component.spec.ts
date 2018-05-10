import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAccountPaymentComponent } from './dashboard-account-payment.component';

describe('DashboardAccountPaymentComponent', () => {
  let component: DashboardAccountPaymentComponent;
  let fixture: ComponentFixture<DashboardAccountPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAccountPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAccountPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
