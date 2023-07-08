import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelsPageComponent } from './pages/levels-page/levels-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'levels-page', component: LevelsPageComponent },
      { path: '**', redirectTo: 'levels-page' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideogameRoutingModule { }
