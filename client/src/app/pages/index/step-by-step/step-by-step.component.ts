import { Component, OnInit } from '@angular/core';

interface StepByStep {
  imageUrl: string;
  header: string;
  text: string;
}

@Component({
  selector: 'mm-step-by-step',
  templateUrl: './step-by-step.component.html',
  styleUrls: ['./step-by-step.component.scss'],
})
export class StepByStepComponent implements OnInit {
  steps: StepByStep[] = [
    {
      imageUrl: '/assets/images/step-by-step/step-1-services.svg',
      header: 'Välj typ av service eller reparation.',
      text:
        'Få reda på priset direkt när du väljer din tjänst. Enkelt och transparent!',
    },
    {
      imageUrl: '/assets/images/step-by-step/step-2-date-place.svg',
      header: 'Välj ett datum, tid och plats.',
      text:
        'Fyll i när och var du vill att vår kvalificerade mekaniker ska komma till dig.',
    },
    {
      imageUrl: '/assets/images/step-by-step/step-3-relax.svg',
      header: 'Luta dig tillbaka. Vi kommer till dig.',
      text:
        'Våra uppskattade mekaniker fixar din bil på nolltid. Slösa inte bort din tid på att ta dig fram och tillbaka till en verkstad.',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
