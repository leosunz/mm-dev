import { Injectable } from '@angular/core';
import { UrlService } from '../../core/services/url.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mechanic, MechId } from '../../core/types/Mechanic';
import {
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  shareReplay,
} from 'rxjs/operators';
import { DbService } from '../../core/services/db.service';
import { isEqual } from 'lodash-es';

@Injectable({
  providedIn: 'root',
})
export class MechanicDetailsService {
  isAdmin = new BehaviorSubject<boolean>(true);
  mechId: Observable<MechId>;
  mech: Observable<Mechanic>;

  mechSnapshot: Mechanic;

  constructor(private urlService: UrlService, private dbService: DbService) {
    this.mechId = urlService.queryParams$.pipe(
      map(qp => qp.mechId),
      filter(x => !!x),
      distinctUntilChanged((x, y) => isEqual(x, y)),
    );
    this.mech = this.mechId.pipe(
      switchMap(mechId => {
        console.log('new mechid', mechId);
        return this.dbService
          .getMechanic(mechId)
          .pipe(map(getMechanic => getMechanic.data.mechanic));
      }),
      shareReplay(1),
    );

    this.mech.subscribe(mech => (this.mechSnapshot = mech));
  }
}
