import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { configGuard } from './modules/config/guards/config.guard';
import { authGuard } from './modules/auth/guards/auth.guard';
import { homePageResolver } from './modules/home/resolvers/home-page.resolver';
import { staticPageResolver } from './modules/home/resolvers/static-page.resolver';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    canActivate: [authGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    resolve: [
      homePageResolver,
      staticPageResolver
    ]
  },
  {
    path: 'config',
    loadChildren: () => import('./modules/config/config.module').then(m => m.ConfigModule),
    canActivate: [configGuard]
  },
  {
    path: 'videogame',
    loadChildren: () => import('./modules/videogame/videogame.module').then(m => m.VideogameModule),
    // canActivate: []
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
