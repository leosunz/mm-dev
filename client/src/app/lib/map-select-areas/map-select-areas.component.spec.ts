import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSelectAreasComponent } from './map-select-areas.component';

describe('MapSelectAreasComponent', () => {
  let component: MapSelectAreasComponent;
  let fixture: ComponentFixture<MapSelectAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapSelectAreasComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSelectAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
