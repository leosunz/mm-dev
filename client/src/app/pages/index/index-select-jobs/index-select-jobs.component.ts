import { Component, OnInit } from '@angular/core';
import { AllJobs_jobs_nodes } from '../../../core/services/types/AllJobs';
import { IndexService } from '../index.service';
import { Job } from '../../../core/types/_all_types';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mm-index-select-jobs',
  templateUrl: './index-select-jobs.component.html',
  styleUrls: ['./index-select-jobs.component.scss'],
})
export class IndexSelectJobsComponent implements OnInit {
  allJobs = this.indexService.allJobs;
  constructor(public indexService: IndexService) {}

  ngOnInit() {}

  selectedJobsChanged(jobs: Job[]) {
    this.indexService.selectedJobs.next(jobs);
  }
}
