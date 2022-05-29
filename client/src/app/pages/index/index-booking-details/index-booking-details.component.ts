import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UrlService } from '../../../core/services/url.service';
import { IndexService } from '../index.service';

@Component({
  selector: 'mm-index-booking-details',
  templateUrl: './index-booking-details.component.html',
  styleUrls: ['./index-booking-details.component.scss'],
})
export class IndexBookingDetailsComponent implements OnInit {
  public fg: FormGroup;

  constructor(private fb: FormBuilder, public indexService: IndexService) {
    this.fg = this.fb.group({
      fullName: null,
      address: this.indexService.address.value,
      carRegistrationNumber: [null, [Validators.min(6), Validators.max(7)]],
      phone: [null, [Validators.min(6), Validators.max(7)]],
      email: [null, [Validators.min(6), Validators.max(7)]],
      comment: null,
    });
  }
  ngOnInit() {}

  onSubmit() {}
}
