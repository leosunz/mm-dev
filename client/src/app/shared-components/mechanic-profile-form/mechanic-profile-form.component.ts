import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AllJobs_jobs_nodes } from '../../core/services/types/AllJobs';
import { MatListOption } from '@angular/material';

export interface MechanicProfile {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  travelTimeMinutes: number;
  selectedJobIds?: string[];
}

@Component({
  selector: 'mm-mechanic-profile-form',
  templateUrl: './mechanic-profile-form.component.html',
  styleUrls: ['./mechanic-profile-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MechanicProfileFormComponent implements OnInit {
  @Input() initialProfile: MechanicProfile;
  @Input() allJobs: AllJobs_jobs_nodes[];

  @Output() formSubmit = new EventEmitter();
  public fg: FormGroup;
  selectedJobIds$ = new BehaviorSubject<string[]>([]);

  constructor(private fb: FormBuilder) {
    const init: Omit<MechanicProfile, 'selectedJobIds'> = {
      fullName: null,
      phone: null,
      email: null,
      address: null,
      travelTimeMinutes: null,
    };
    this.fg = this.fb.group(init);
  }

  ngOnInit() {
    this.selectedJobIds$.next(this.initialProfile.selectedJobIds);
    const {
      fullName,
      phone,
      email,
      address,
      travelTimeMinutes,
    } = this.initialProfile;
    this.fg.setValue({
      fullName,
      phone,
      email,
      address,
      travelTimeMinutes,
    });
  }

  onSelectionChange(event, selected: MatListOption[]) {
    const selectedOptions = selected.map(
      selectedOption => selectedOption.value,
    );
    this.selectedJobIds$.next(selectedOptions);
  }

  onFormSubmit() {
    this.formSubmit.emit({
      ...this.fg.value,
      selectedJobIds: this.selectedJobIds$.value,
    });
  }
}
