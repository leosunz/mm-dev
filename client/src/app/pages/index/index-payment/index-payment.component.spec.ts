import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPaymentComponent } from './index-payment.component';

describe('IndexPaymentComponent', () => {
  let component: IndexPaymentComponent;
  let fixture: ComponentFixture<IndexPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexPaymentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
