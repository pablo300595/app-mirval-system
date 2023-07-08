import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideogameRoutingModule } from './videogame-routing.module';
import { LevelsPageComponent } from './pages/levels-page/levels-page.component';
import { CardComponent } from 'src/app/components/card/card.component';


@NgModule({
  declarations: [
    LevelsPageComponent
  ],
  imports: [
    CommonModule,
    VideogameRoutingModule,
    CardComponent
  ]
})
export class VideogameModule { }
