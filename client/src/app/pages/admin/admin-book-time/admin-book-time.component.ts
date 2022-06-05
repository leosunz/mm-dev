import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { GeohashEncoder } from '../../../helpers/geohashEncoder';
import { DbService } from '../../../core/services/db.service';
import { JobId } from '../../../core/types/JobDescription';
import { uniq } from 'lodash-es';
// import { getMinutesRequired } from '../../../helpers/getMinutesRequired';
import { MechId } from '../../../core/types/Mechanic';
import { addDays, endOfDay, startOfDay } from 'date-fns';
import { AllJobs_jobs_nodes } from '../../../core/services/types/AllJobs';
import { LocationExtended } from '../../../lib/select-address/select-address.component';
import { AllTimeSlotsBetween_timeSlots_nodes } from '../../../core/services/types/AllTimeSlotsBetween';

const geohashEncoder = new GeohashEncoder();

export interface MechanicTimeSlot {
  mechId: MechId;
  timeLeft: number;
  timeSlot: string;
  viableJobs: JobId[];
}

@Component({
  selector: 'mm-firestore-test',
  templateUrl: './admin-book-time.component.html',
  styleUrls: ['./admin-book-time.component.scss'],
})
export class AdminBookTimeComponent implements OnInit {
  page = 0;
  allJobs$ = this.dbService
    .allJobs()
    .pipe(map(result => result.data.allJobs.nodes));

  location = new BehaviorSubject<LocationExtended>(null);
  address: string;

  fromTime = new BehaviorSubject<Date>(startOfDay(new Date()));
  toTime = new BehaviorSubject<Date>(endOfDay(addDays(new Date(), 7)));

  selectedJobs = new BehaviorSubject<AllJobs_jobs_nodes[]>(undefined);

  availableMechanics = combineLatest([
    this.fromTime,
    this.toTime,
    this.location,
    this.selectedJobs.pipe(filter(j => !!j)),
  ]).pipe(
    switchMap(([fromTime, toTime, location, jobs]) =>
      this.dbService.availableMechanics({
        fromTime,
        toTime,
        geohash: location.geohash,
        jobIds: jobs.map(j => j.id),
      }),
    ),
  );
  selectableTimeSlots = this.availableMechanics.pipe(
    map(ams =>
      uniq(ams.data.getAvailableMechanics.nodes.map(am => am.timeSlotId)),
    ),
  );

  constructor(private dbService: DbService) {}

  ngOnInit() {}

  selectedJobsChanged(jobs: AllJobs_jobs_nodes[]) {
    this.selectedJobs.next(jobs);
  }

  onLocationChange(location: LocationExtended) {
    this.location.next(location);
  }

  onAddressChange(address: string) {
    this.address = address;
  }

  onSelectedTimeSlotChange($event: AllTimeSlotsBetween_timeSlots_nodes) {}
}
