import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './modules/config/store/reducers/auth.reducer';
import { configReducer } from './modules/auth/store/reducers/config.reducer';
import { environment } from './environment';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        provideFirebaseApp(() => initializeApp(environment.FB_CONFIG)),
        provideAuth(() => getAuth()),
        StoreModule.forRoot({
          userData: authReducer,
          configData: configReducer
        }),
        NavbarComponent
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
