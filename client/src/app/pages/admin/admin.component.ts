import { Component, OnInit } from '@angular/core';

interface NavLink {
  path: string;
  label: string;
}

@Component({
  selector: 'mm-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  navLinks: NavLink[] = [
    { path: './mechanics', label: 'Alla mekaniker' },
    // { path: './book-time', label: 'Boka tid' },
    // { path: './select-area', label: 'Select Area' },
  ];
  constructor() {}

  ngOnInit() {}
}
