import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { HeroTopBarComponent } from './hero-top-bar/hero-top-bar.component';
import { HeroCenterContentComponent } from './hero-center-content/hero-center-content.component';

@NgModule({
  declarations: [
    HeroComponent,
    HeroTopBarComponent,
    HeroCenterContentComponent,
  ],
  exports: [HeroComponent, HeroTopBarComponent, HeroCenterContentComponent],
  imports: [CommonModule],
})
export class HeroModule {}
