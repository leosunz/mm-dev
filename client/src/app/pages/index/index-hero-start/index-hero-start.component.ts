import { Component, OnInit } from '@angular/core';
import { IndexService } from '../index.service';

@Component({
  selector: 'mm-index-hero-start',
  templateUrl: './index-hero-start.component.html',
  styleUrls: ['./index-hero-start.component.scss'],
})
export class IndexHeroStartComponent implements OnInit {
  constructor(public indexService: IndexService) {}

  ngOnInit() {}
}
