import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAvailableInYourAreaComponent } from './not-available-in-your-area.component';

describe('NotAvailableInYourAreaComponent', () => {
  let component: NotAvailableInYourAreaComponent;
  let fixture: ComponentFixture<NotAvailableInYourAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotAvailableInYourAreaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAvailableInYourAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
