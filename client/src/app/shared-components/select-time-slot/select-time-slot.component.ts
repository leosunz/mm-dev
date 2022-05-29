import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { DbService } from '../../core/services/db.service';
import { ApolloQueryResult } from 'apollo-client';
import { AllTimeSlotsBetween } from './types/AllTimeSlotsBetween';
import { map, switchMap } from 'rxjs/operators';
import { addHours, format, isToday, isTomorrow } from 'date-fns';
import { entries, groupBy } from 'lodash-es';
import { TimeSlotMechanic } from '../../core/types/_all_types';
import { BaseComponent } from '../../core/base-component';

@Component({
  selector: 'mm-select-time-slot',
  templateUrl: './select-time-slot.component.html',
  styleUrls: ['./select-time-slot.component.scss'],
})
export class SelectTimeSlotComponent extends BaseComponent implements OnInit {
  @Input() fromTime: Observable<Date>;
  @Input() toTime: Observable<Date>;
  @Input() selectableMechanicTimeSlots: Observable<TimeSlotMechanic[]>;
  selectedTimeSlotMechanic = new BehaviorSubject<TimeSlotMechanic>(null);
  @Output() selectedTimeSlotMechanicChange = new EventEmitter<
    TimeSlotMechanic
  >();

  timeSlots: Observable<ApolloQueryResult<AllTimeSlotsBetween>>;
  timeSlotMechanicGroupedByDay: Observable<
    {
      day: string;
      timeSlotMechanic: TimeSlotMechanic[];
    }[]
  >;

  constructor(private db: DbService) {
    super();

    super.addSubs(
      this.selectedTimeSlotMechanic.subscribe(newTimeSlot => {
        this.selectedTimeSlotMechanicChange.emit(newTimeSlot);
      }),
    );
  }

  ngOnInit() {
    this.timeSlots = combineLatest([this.fromTime, this.toTime]).pipe(
      switchMap(([fromTime, toTime]) =>
        this.db.getAllTimeSlotsBetween({ fromTime, toTime }),
      ),
    );

    this.timeSlotMechanicGroupedByDay = combineLatest([
      this.timeSlots,
      this.selectableMechanicTimeSlots,
    ]).pipe(
      map(([timeSlots, mechanicTimeSlots]) => {
        // First group all time slots by day for easy looping in HTML
        const timeSlotsGroupedByDay = entries(
          groupBy(timeSlots.data.timeSlots.nodes, timeSlot =>
            timeSlot.startTime.substr(0, 10),
          ),
        );

        // For each timeslot within a day, pick the first mechanic we find that is available that day
        const timeSlotMechanicGroupedByDay = timeSlotsGroupedByDay.map(
          ([day, timeSlotsThisDay]) => ({
            day,
            timeSlotMechanic: timeSlotsThisDay.map(timeSlot => ({
              ...timeSlot,
              ...mechanicTimeSlots.find(
                mts => mts.startTime === timeSlot.startTime,
              ), // Use the first mechanic found
            })),
          }),
        );

        return timeSlotMechanicGroupedByDay;
      }),
    );
  }

  getTimeSlotTime(date: any) {
    return (
      format(new Date(date), 'HH') +
      ' - ' +
      format(addHours(new Date(date), 3), 'HH')
    );
  }

  isSameDate(timeSlotId1: string, timeSlotId2: string) {
    if (!(timeSlotId1 && timeSlotId2)) {
      return false;
    }
    return timeSlotId1.substr(0, 10) === timeSlotId2.substr(0, 10);
  }

  selectTimeSlot(timeSlot: TimeSlotMechanic) {
    if (this.selectedTimeSlotMechanic.value === timeSlot) {
      return this.selectedTimeSlotMechanic.next(null);
    }
    this.selectedTimeSlotMechanic.next(timeSlot);
  }

  getTimeSlotDay(day: string) {
    const date = new Date(day);
    if (isToday(date)) {
      return 'Idag';
    }
    if (isTomorrow(date)) {
      return 'Imorgon';
    }
    let month;
    switch (format(date, 'M')) {
      case '1':
        month = 'jan';
        break;
      case '2':
        month = 'feb';
        break;
      case '3':
        month = 'mar';
        break;
      case '4':
        month = 'apr';
        break;
      case '5':
        month = 'maj';
        break;
      case '6':
        month = 'jun';
        break;
      case '7':
        month = 'jul';
        break;
      case '8':
        month = 'aug';
        break;
      case '9':
        month = 'sep';
        break;
      case '10':
        month = 'okt';
        break;
      case '11':
        month = 'nov';
        break;
      case '12':
        month = 'dec';
        break;
    }

    return format(date, 'd') + ' ' + month;
  }
}
