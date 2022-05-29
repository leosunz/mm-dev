import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSelectAddressComponent } from './index-select-address.component';

describe('IndexSelectAddressComponent', () => {
  let component: IndexSelectAddressComponent;
  let fixture: ComponentFixture<IndexSelectAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexSelectAddressComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSelectAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
