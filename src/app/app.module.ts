import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { authReducer } from './auth/redux/auth.reducer';
import { configReducer } from './config/redux/config.reducer';

import { environment } from '../environments/environment';
// import { APP_INITIALIZER } from '@angular/core';
// import { SecretsService } from './shared/services/secrets.service';
// import { first } from 'rxjs';

// export function configFactory(secretsService: SecretsService) {
//   return () =>
//     secretsService.getConfig().pipe(first()).toPromise().then((config) => {
//       const appConfig = {
//         apiKey: config.apiKeyconfig,
//         authDomain: config.authDomain,
//         projectId: config.projectId,
//         storageBucket: config.storageBucket,
//         messagingSenderId: config.messagingSenderId,
//         appId: config.appId,
//         measurementId: config.measurementId
//       };

//       provideFirebaseApp(() => initializeApp(appConfig));
//     });
// }


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    provideAuth(() => getAuth()),
    provideFirebaseApp(() => initializeApp(environment.FB_CONFIG)),
    StoreModule.forRoot({
      userData: authReducer,
      configData: configReducer
    }),
    StoreDevtoolsModule.instrument(environment.FB_DEVTOOLS_CONFIG),
    NavbarComponent
  ],
  providers: [
    // SecretsService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: configFactory,
    //   deps: [SecretsService],
    //   multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
