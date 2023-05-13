import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/common.module';
import { Environment } from './environment';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './auth/redux/auth.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(Environment.FB_CONFIG)),
    provideAuth(() => getAuth()),
    StoreModule.forRoot({
      userData: authReducer,
    }),
    StoreDevtoolsModule.instrument(Environment.FB_DEVTOOLS_CONFIG),
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
