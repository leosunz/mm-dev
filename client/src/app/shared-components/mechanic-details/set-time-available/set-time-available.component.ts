import { Component, OnInit } from '@angular/core';
import {
  MAXIMUM_TIME_AVAILABLE,
  MINIMUM_TIME_AVAILABLE,
  timeSlotsInNearTime,
} from '../../../core/config';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { timeSlotIdToDesc } from '../../../helpers/timeSlotIdToDesc';
import { DbService } from '../../../core/services/db.service';
import { MechanicDetailsService } from '../mechanic-details.service';
import { map, switchMap } from 'rxjs/operators';
import { MechanicTimeSlotsNext90Days_mechanic_timeSlots_nodes } from '../../../core/services/types/MechanicTimeSlotsNext90Days';

type TimeSlotMeta = MechanicTimeSlotsNext90Days_mechanic_timeSlots_nodes;
// interface TimeSlotMeta {
//   timeSlot: string;
//   timeAvailable: number;
//   timeBooked: number;
// }

@Component({
  selector: 'mm-set-time-available',
  templateUrl: './set-time-available.component.html',
  styleUrls: ['./set-time-available.component.scss'],
})
export class SetTimeAvailableComponent implements OnInit {
  MINIMUM_TIME_AVAILABLE = MINIMUM_TIME_AVAILABLE;
  MAXIMUM_TIME_AVAILABLE = MAXIMUM_TIME_AVAILABLE;

  allTimeSlots = this.adminService.mechId.pipe(
    switchMap(mechId =>
      this.dbService.getMechanicTimeSlots90Days({ id: mechId }),
    ),
  );

  selectedTimeSlot = new BehaviorSubject<TimeSlotMeta>(null);

  timeSlotIdToDesc = timeSlotIdToDesc;

  selectedMinutes = new BehaviorSubject<number>(null);

  constructor(
    private adminService: MechanicDetailsService,
    private dbService: DbService,
  ) {}

  ngOnInit() {}

  setTimeAvailable() {
    if (this.selectedTimeSlot.value.workingTimeId) {
      if (this.selectedMinutes.value === null) {
        this.dbService
          .deleteWorkingTime({
            mechanicId: this.adminService.mechSnapshot.id,
            timeSlotId: this.selectedTimeSlot.value.timeSlotId,
          })
          .subscribe();
      } else {
        this.dbService
          .updateWorkingTime(
            this.adminService.mechSnapshot.id,
            this.selectedTimeSlot.value.timeSlotId,
            this.selectedMinutes.value,
          )
          .subscribe();
      }
    } else {
      this.dbService
        .createWorkingTime(
          this.adminService.mechSnapshot.id,
          this.selectedTimeSlot.value.timeSlotId,
          this.selectedMinutes.value,
        )
        .subscribe();
    }
  }

  onSelectedTimeChange($event: number) {
    this.selectedMinutes.next($event);
  }
}
