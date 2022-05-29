import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicListComponent } from './mechanic-list.component';

describe('MechanicListComponent', () => {
  let component: MechanicListComponent;
  let fixture: ComponentFixture<MechanicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MechanicListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
