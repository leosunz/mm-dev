import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../core/base-component';
import { MechanicDetailsService } from './mechanic-details.service';
import { PATHS } from '../../core/paths';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GeohashId } from '../../lib/map-select-areas/map-select-areas.component';

interface DetailsMenuItem {
  routerLink: string;
  text: string;
}

@Component({
  selector: 'mm-mechanic',
  templateUrl: './mechanic-details.component.html',
  styleUrls: ['./mechanic-details.component.scss'],
})
export class MechanicDetailsComponent extends BaseComponent implements OnInit {
  geohashes$: Observable<GeohashId[]>;

  menu: DetailsMenuItem[] = [
    {
      routerLink: PATHS.adminMechanicProfile.routerLink,
      text: 'Profil',
    },
    {
      routerLink: PATHS.adminMechanicMap.routerLink,
      text: 'Karta',
    },
    {
      routerLink: PATHS.adminSetTimeAvailable.routerLink,
      text: 'Välj tillgänglig tid',
    },
  ];

  constructor(public mechanicDetailsService: MechanicDetailsService) {
    super();
    this.geohashes$ = this.mechanicDetailsService.mech.pipe(
      map(mech => mech.geohashes),
    );
  }

  ngOnInit() {}
}
