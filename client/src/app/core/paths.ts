export class Path {
  constructor(
    public name: string,
    public path: string[],
    public status: 'ACTIVE' | 'INACTIVE' = 'ACTIVE',
  ) {}

  get routerLink() {
    return '/' + this.path.join('/');
  }

  get lastElement() {
    return this.path[this.path.length - 1];
  }
}
export const PATHS = {
  start: new Path('Min Mekaniker', ['']),
  admin: new Path('Admin', ['admin']),
  adminMechanics: new Path('Admin', ['admin', 'mechanics']),
  adminMechanicDetails: new Path('Admin', ['admin', 'mechanics', 'details']),
  adminMechanicProfile: new Path('Admin', [
    'admin',
    'mechanics',
    'details',
    'profile',
  ]),
  adminMechanicMap: new Path('Admin', ['admin', 'mechanics', 'details', 'map']),
  adminSetTimeAvailable: new Path('Admin', [
    'admin',
    'mechanics',
    'details',
    'set-time-available',
  ]),
};

export type PageIDs = keyof typeof PATHS;
// type Values = typeof P1[PageIDs];

export const ALL_PATHS = Object.keys(PATHS)
  .map(key => PATHS[key])
  .filter(p => p.status === 'ACTIVE')
  .map(p => p.routerLink);

// type Values = typeof P1[PageIDs];
