import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicProfileComponent } from './mechanic-profile.component';

describe('MechanicProfileComponent', () => {
  let component: MechanicProfileComponent;
  let fixture: ComponentFixture<MechanicProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MechanicProfileComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
