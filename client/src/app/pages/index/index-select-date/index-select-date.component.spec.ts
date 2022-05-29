import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSelectDateComponent } from './index-select-date.component';

describe('IndexSelectDateComponent', () => {
  let component: IndexSelectDateComponent;
  let fixture: ComponentFixture<IndexSelectDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexSelectDateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSelectDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
