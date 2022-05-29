import { PATHS } from './paths';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

export class BaseComponent implements OnDestroy {
  PATHS = PATHS;
  private subs: Subscription[] = [];

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  addSubs(...sub: Subscription[]) {
    this.subs.push(...sub);
  }
}
