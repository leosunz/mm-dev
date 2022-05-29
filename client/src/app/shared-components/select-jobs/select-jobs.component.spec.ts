import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectJobsComponent } from './select-jobs.component';

describe('JobSelectorComponent', () => {
  let component: SelectJobsComponent;
  let fixture: ComponentFixture<SelectJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectJobsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
