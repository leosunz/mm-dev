import { Component, Input, OnInit } from '@angular/core';
import { Mechanic } from '../../../../../core/types/Mechanic';
import { PATHS } from 'src/app/core/paths';

@Component({
  selector: 'mm-mechanic-list',
  templateUrl: './mechanic-list.component.html',
  styleUrls: ['./mechanic-list.component.scss'],
})
export class MechanicListComponent implements OnInit {
  PATHS = PATHS;
  @Input() mechanics: Partial<Mechanic>[];

  constructor() {}

  ngOnInit() {}
}
