import { Component, OnInit } from '@angular/core';
import { IndexService } from '../index.service';

@Component({
  selector: 'mm-index-payment',
  templateUrl: './index-payment.component.html',
  styleUrls: ['./index-payment.component.scss'],
})
export class IndexPaymentComponent implements OnInit {
  constructor(public indexService: IndexService) {}

  ngOnInit() {}

  onSubmit() {}
}
