import { Component, OnInit } from '@angular/core';

interface Infobox {
  icon: string;
  header: string;
  text: string;
}

@Component({
  selector: 'mm-info-boxes',
  templateUrl: './info-boxes.component.html',
  styleUrls: ['./info-boxes.component.scss'],
})
export class InfoBoxesComponent implements OnInit {
  infoBoxes = [
    {
      icon: 'local_cafe',
      header: 'Vi gör det bekvämt',
      text:
        'Boka service när det passar dig. Våra mekaniker kommer till ditt hem eller kontor, även på kvällar och helger.',
    },
    {
      icon: 'thumb_up',
      header: 'Tydliga priser',
      text: 'Du får reda på vad det kostar redan innan du bokar. ',
    },
    {
      icon: 'mood',
      header: 'Garanterat nöjd',
      text:
        'Vi samarbetar endast med mekaniker som genomgått vår certifiering. All reparation får automatiskt en 12 månaders garanti.',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
