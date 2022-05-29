import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexHeroStartComponent } from './index-hero-start.component';

describe('IndexHeroStartComponent', () => {
  let component: IndexHeroStartComponent;
  let fixture: ComponentFixture<IndexHeroStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexHeroStartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexHeroStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
