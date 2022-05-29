import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { distinctUntilChanged, shareReplay } from 'rxjs/operators';
import { Path, PATHS } from '../paths';
import { entries } from 'lodash-es';

/*
Gather all possible params here
 */
export interface QueryParams {
  mechId?: string;
}

function paramsAreEqual(x: QueryParams, y: QueryParams) {
  return x.mechId === y.mechId;
}

@Injectable()
export class UrlService implements CanActivate {
  private queryParams = new BehaviorSubject(null);
  public queryParams$: Observable<QueryParams> = this.queryParams.pipe(
    // filter(Boolean),
    distinctUntilChanged((x, y) => paramsAreEqual(x, y)),
    shareReplay(1),
    // tap(qp => console.log('Query params are', qp))
  );
  public isFirstTime$: Observable<boolean>;

  constructor(private router: Router, private ngZone: NgZone) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    // console.log('ROUTE QueryParams:', route.queryParams);
    // Put this in CanActivate to make it run before any resolvers are run
    // console.log('-- SETTING QP STATE', route.queryParams);
    this.setQueryParamsState(route.queryParams);
    return true;
  }

  public setQueryParamsState(params: QueryParams) {
    this.queryParams.next(params);
  }

  changeQueryParams(queryParams: { [key: string]: string }) {
    const urlTree = this.router.createUrlTree([], {
      queryParams,
      queryParamsHandling: 'merge',
      preserveFragment: true,
    });

    this.router.navigateByUrl(urlTree);
  }

  get currentRoute(): { route: string; parameters: string } {
    const routerUrl = this.router.url.split('?');
    return {
      route: routerUrl[0],
      parameters: routerUrl[1] ? routerUrl[1] : null,
    };
  }

  findPathFromUrl(url: string) {
    const allPaths = entries(PATHS).map(p => ({ id: p[0], path: p[1] }));
    return allPaths.find(p => {
      return p.path.routerLink === url;
    }).path;
  }

  get currentPath(): Path {
    const allPaths = entries(PATHS).map(p => ({ id: p[0], path: p[1] }));
    const currentRoute = this.currentRoute;

    const thisPath = allPaths.find(p => {
      return p.path.routerLink === currentRoute.route;
    });
    if (!thisPath) {
      return undefined;
    }
    return thisPath.path;
  }

  get parentPath(): Path {
    let parentUrl = this.currentRoute.route
      .split('/')
      .slice(0, -1)
      .join('/');
    if (parentUrl === '') {
      parentUrl = '/';
    }
    return this.findPathFromUrl(parentUrl);
  }

  navigateUp() {
    this.navigatePreserve(this.parentPath);
  }

  navigatePreserve(path: Path) {
    this.router.navigate(path.path, {
      queryParams: this.queryParams.getValue(),
    });
  }

  navigateWithParams(path: Path, params?: any) {
    console.log('Navigating to ', path.path, params);
    if (params) {
      // https://stackoverflow.com/questions/53133544/angular-7-routerlink-directive-warning-navigation-triggered-outside-angular-zon
      this.ngZone.run(() =>
        this.router.navigate(path.path, { queryParams: params }),
      );
    } else {
      this.ngZone.run(() => this.router.navigate(path.path));
    }
  }

  navigateMergeParams(path: Path, params: QueryParams = {}) {
    this.router.navigate(path.path, {
      queryParams: { ...this.queryParams.getValue(), ...params },
    });
  }
}
