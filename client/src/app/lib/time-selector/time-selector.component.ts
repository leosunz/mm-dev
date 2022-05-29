import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

import { BehaviorSubject, combineLatest } from 'rxjs';
import { BaseComponent } from '../../core/base-component';
import { debounceTime } from 'rxjs/operators';

interface Time {
  desc: string;
  minutes: number;
}

@Component({
  selector: 'mm-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.scss'],
})
export class TimeSelectorComponent extends BaseComponent implements OnChanges {
  @Input() valueMinutes: number;
  @Output() selectedTimeChange = new EventEmitter<number | null>();
  @Input() minMinutes: number;
  @Input() maxMinutes: number;

  hours: Time[] = [
    { desc: '0h', minutes: 0 },
    { desc: '1h', minutes: 60 },
    { desc: '2h', minutes: 120 },
    { desc: '3h', minutes: 180 },
  ];
  minutes: Time[] = [
    { desc: '0m', minutes: 0 },
    { desc: '15m', minutes: 15 },
    { desc: '30m', minutes: 30 },
    { desc: '45m', minutes: 45 },
  ];
  selectedHour = new BehaviorSubject<Time | null>(null);
  selectedMinutes = new BehaviorSubject<Time | null>(null);

  constructor() {
    super();

    super.addSubs(
      combineLatest([this.selectedHour, this.selectedMinutes])
        .pipe(debounceTime(50))
        .subscribe(([selectedHour, selectedMinutes]) => {
          if (selectedHour === null || selectedMinutes === null) {
            return this.selectedTimeChange.emit(null);
          }

          const totalTime = selectedHour.minutes + selectedMinutes.minutes;
          this.selectedTimeChange.emit(
            totalTime > this.maxMinutes
              ? this.maxMinutes
              : totalTime < this.minMinutes
              ? this.minMinutes
              : totalTime,
          );
        }),
    );
  }

  minuteButtonDisabled(minute: Time) {
    if (!this.selectedHour.value) {
      return true;
    }
    const totalTime = this.selectedHour.value.minutes + minute.minutes;
    return totalTime > this.maxMinutes || totalTime < this.minMinutes;
  }

  ngOnChanges() {
    const minutes = this.valueMinutes;

    if (minutes === null) {
      this.selectedMinutes.next(null);
      this.selectedHour.next(null);
      return;
    }
    const minutesPart = minutes % 60;
    const hoursPart = minutes - minutesPart;

    this.selectedMinutes.next(
      this.minutes.find(m => m.minutes === minutesPart),
    );
    this.selectedHour.next(this.hours.find(h => h.minutes === hoursPart));
  }

  notAvailable() {
    this.selectedMinutes.next(null);
    this.selectedHour.next(null);
  }
}
