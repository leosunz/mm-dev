import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexThankYouComponent } from './index-thank-you.component';

describe('IndexThankYouComponent', () => {
  let component: IndexThankYouComponent;
  let fixture: ComponentFixture<IndexThankYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexThankYouComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
