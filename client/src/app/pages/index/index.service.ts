import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LocationExtended } from '../../lib/select-address/select-address.component';
import { addDays, endOfDay, startOfDay } from 'date-fns';
import { AllJobs_jobs_nodes } from '../../core/services/types/AllJobs';
import { Job, TimeSlot, TimeSlotMechanic } from '../../core/types/_all_types';
import { DbService } from '../../core/services/db.service';
import { environment } from '../../../environments/environment';
import { MakeReservationVariables } from '../../core/services/types/MakeReservation';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IndexService {
  page = new BehaviorSubject<number>(0);

  location = new BehaviorSubject<LocationExtended>(null);
  address = new BehaviorSubject<string>(null);

  fromTime = new BehaviorSubject<Date>(startOfDay(new Date()));
  toTime = new BehaviorSubject<Date>(endOfDay(addDays(new Date(), 7)));

  selectedJobs = new BehaviorSubject<Job[]>(null);
  allJobs = this.dbService
    .allJobs()
    .pipe(map(result => result.data.allJobs.nodes));

  selectedTimeSlotMechanic = new BehaviorSubject<TimeSlotMechanic>(null);
  selectableMechanics = new BehaviorSubject<TimeSlot>(null);

  constructor(private dbService: DbService) {
    if (!environment.production) {
      this.page.subscribe(page => console.log('page', page));
      this.location.subscribe(location => console.log('location', location));
      this.address.subscribe(address => console.log('address', address));
      this.fromTime.subscribe(fromTime => console.log('fromTime', fromTime));
      this.toTime.subscribe(toTime => console.log('toTime', toTime));
      this.selectedJobs.subscribe(selectedJobs =>
        console.log('selectedJobs', selectedJobs),
      );
      this.selectedTimeSlotMechanic.subscribe(selectedTimeSlot =>
        console.log('selectedTimeSlot', selectedTimeSlot),
      );
      this.selectableMechanics.subscribe(selectableMechanics =>
        console.log('selectableMechanics', selectableMechanics),
      );
    }
  }

  nextPage() {
    this.page.next(this.page.value + 1);
  }
  previousPage() {
    this.page.next(this.page.value > 0 ? this.page.value - 1 : 0);
  }

  makeReservation(): Observable<any> {
    return this.dbService.makeReservation({
      mechanicId: this.selectedTimeSlotMechanic.value.mechanicId,
      timeSlotId: this.selectedTimeSlotMechanic.value.timeSlotId,
      longitude: this.location.value.longitude,
      latitude: this.location.value.latitude,
      jobsIds: this.selectedJobs.value.map(jobs => jobs.id),
    });
  }
}
