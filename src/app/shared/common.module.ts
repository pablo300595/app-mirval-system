import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './common-routing.module';
import { CardComponent } from '../components/card/card.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
  ]
})
export class SharedModule { }
