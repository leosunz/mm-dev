import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSelectJobsComponent } from './index-select-jobs.component';

describe('IndexSelectJobsComponent', () => {
  let component: IndexSelectJobsComponent;
  let fixture: ComponentFixture<IndexSelectJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexSelectJobsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSelectJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
