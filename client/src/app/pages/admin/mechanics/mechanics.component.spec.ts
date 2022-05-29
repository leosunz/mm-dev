import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicsComponent } from './mechanics.component';

describe('MechanicComponent', () => {
  let component: MechanicsComponent;
  let fixture: ComponentFixture<MechanicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MechanicsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
