import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicMapComponent } from './mechanic-map.component';

describe('SelectAreaComponent', () => {
  let component: MechanicMapComponent;
  let fixture: ComponentFixture<MechanicMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MechanicMapComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
