import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DbService } from '../../core/services/db.service';
import { BehaviorSubject } from 'rxjs';
import { BaseComponent } from '../../core/base-component';
import { JobDescription } from '../../core/types/JobDescription';
import { MatListOption } from '@angular/material';
import { calculateTotalPrice } from '../../helpers/calculateTotalPrice';
import { Job } from '../../core/types/_all_types';
import { DISCOUNT_MULTIPLE_JOBS } from '../../core/config';
import IJob = GQL.IJob;

@Component({
  selector: 'mm-select-jobs',
  templateUrl: './select-jobs.component.html',
  styleUrls: ['./select-jobs.component.scss'],
})
export class SelectJobsComponent extends BaseComponent implements OnInit {
  DISCOUNT_MULTIPLE_JOBS = DISCOUNT_MULTIPLE_JOBS;
  @Input() allJobs: Array<IJob>;
  calculateTotalPrice = calculateTotalPrice;
  selectedJobs = new BehaviorSubject<Job[]>([]);
  @Output() changed = new EventEmitter<Job[]>();
  @Input() value: Job[];

  constructor() {
    super();
    super.addSubs(this.selectedJobs.subscribe(jobs => this.changed.emit(jobs)));
  }

  toggleSelectedJob(job: JobDescription) {
    if (this.selectedJobs.value && this.selectedJobs.value.includes(job)) {
      this.selectedJobs.next(
        this.selectedJobs.value.filter(selectedJobId => selectedJobId !== job),
      );
    } else {
      this.selectedJobs.next([...this.selectedJobs.value, job]);
    }
  }

  ngOnInit() {
    if (this.value) {
      this.selectedJobs.next(this.value);
    }
  }

  onSelectionChange(event, selected: MatListOption[]) {
    const selectedOptions = selected.map(
      selectedOption => selectedOption.value,
    );
    this.selectedJobs.next(selectedOptions);
  }
}
