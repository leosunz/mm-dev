import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicProfileFormComponent } from './mechanic-profile-form.component';

describe('MechanicProfileFormComponent', () => {
  let component: MechanicProfileFormComponent;
  let fixture: ComponentFixture<MechanicProfileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MechanicProfileFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
