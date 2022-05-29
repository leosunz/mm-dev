import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTimeAvailableComponent } from './set-time-available.component';

describe('SetTimeAvailableComponent', () => {
  let component: SetTimeAvailableComponent;
  let fixture: ComponentFixture<SetTimeAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetTimeAvailableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTimeAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
