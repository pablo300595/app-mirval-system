import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/common.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { authReducer } from './auth/redux/auth.reducer';
import { configReducer } from './config/redux/config.reducer';

import { Environment } from './environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(Environment.FB_CONFIG)),
    provideAuth(() => getAuth()),
    StoreModule.forRoot({
      userData: authReducer,
      configData: configReducer
    }),
    StoreDevtoolsModule.instrument(Environment.FB_DEVTOOLS_CONFIG),
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
