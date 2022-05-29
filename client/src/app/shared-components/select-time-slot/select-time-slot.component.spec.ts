import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTimeSlotComponent } from './select-time-slot.component';

describe('SelectTimeSlotComponent', () => {
  let component: SelectTimeSlotComponent;
  let fixture: ComponentFixture<SelectTimeSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectTimeSlotComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTimeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
