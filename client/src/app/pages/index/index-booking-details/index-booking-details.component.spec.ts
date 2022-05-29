import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBookingDetailsComponent } from './index-booking-details.component';

describe('IndexBookingDetailsComponent', () => {
  let component: IndexBookingDetailsComponent;
  let fixture: ComponentFixture<IndexBookingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexBookingDetailsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
