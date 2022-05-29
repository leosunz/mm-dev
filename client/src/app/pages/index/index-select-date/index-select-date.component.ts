import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { addDays, endOfDay, startOfDay } from 'date-fns';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { DbService } from '../../../core/services/db.service';
import { IndexService } from '../index.service';
import { TimeSlotMechanic } from '../../../core/types/_all_types';
import { DATES_PER_PAGE } from '../../../core/config';

@Component({
  selector: 'mm-index-select-date',
  templateUrl: './index-select-date.component.html',
  styleUrls: ['./index-select-date.component.scss'],
})
export class IndexSelectDateComponent implements OnInit {
  page = new BehaviorSubject<number>(0);
  fromTime: Observable<Date> = this.page.pipe(
    map(page => startOfDay(addDays(new Date(), page * DATES_PER_PAGE))),
  );
  toTime: Observable<Date> = this.page.pipe(
    map(page => endOfDay(addDays(new Date(), (page + 1) * DATES_PER_PAGE))),
  );

  availableMechanics = combineLatest([
    this.fromTime,
    this.toTime,
    this.indexService.location,
    this.indexService.selectedJobs.pipe(filter(j => !!j)),
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
    map(ams => {
      const availableMechanicsResponse = ams.data.getAvailableMechanics.nodes;

      const mapOfTimeSlots = availableMechanicsResponse.reduce(
        (p, mechanicTimeSlot) => ({
          ...p,
          [mechanicTimeSlot.timeSlotId]: mechanicTimeSlot,
        }),
        {},
      );

      return Object.keys(mapOfTimeSlots).map(key => mapOfTimeSlots[key]);

      // return Object.entries(mapOfTimeSlots).map(([timeSlotId, mechanicTimeSlots]))
    }),
    tap(selectableTimeSlots =>
      console.log('selectableTimeSlots', selectableTimeSlots),
    ),
  );

  constructor(
    private dbService: DbService,
    public indexService: IndexService,
  ) {}

  nextPage() {
    this.page.next(this.page.value + 1);
  }

  previousPage() {
    this.page.next(this.page.value > 0 ? this.page.value - 1 : 0);
  }

  ngOnInit() {}

  onSelectedTimeSlotChange(timeSlotMechanic: TimeSlotMechanic) {
    this.indexService.selectedTimeSlotMechanic.next(timeSlotMechanic);
    // this.indexService.selectableMechanics.next();
  }

  confirmTime() {
    // this.indexService
    //   .makeReservation()
    //   .subscribe(() => this.indexService.nextPage());

    this.indexService.nextPage();
  }
}
