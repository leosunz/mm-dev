import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../core/base-component';
import { DbService } from '../../../core/services/db.service';
import { Observable } from 'rxjs';
import { Mechanic } from '../../../core/types/Mechanic';

@Component({
  selector: 'mm-mechanic',
  templateUrl: './mechanics.component.html',
  styleUrls: ['./mechanics.component.scss'],
})
export class MechanicsComponent extends BaseComponent implements OnInit {
  mechanics: Observable<Partial<Mechanic>[]>;
  constructor(private dbService: DbService) {
    super();
    console.log('worloing');
    this.mechanics = dbService.allMechanics();
  }

  ngOnInit() {}
}
