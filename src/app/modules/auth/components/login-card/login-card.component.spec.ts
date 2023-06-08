import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';

import { LoginCardComponent } from './login-card.component';
import { ModalService } from 'src/app/modules/shared/services/modal.service';
import { AuthService } from 'src/app/modules/shared/services/auth.service';
import { AppState } from 'src/app/models/state/app-state';
import { Router } from '@angular/router';

import { of } from 'rxjs';

import * as authActions from '../../store/actions/auth.actions';
import * as configActions from '../../../config/store/actions/config.actions';

xdescribe('LoginCardComponent', () => {
  let component: LoginCardComponent;
  let fixture: ComponentFixture<LoginCardComponent>;
  let compiled: any;
  let authService: AuthService;
  let modalService: ModalService;
  let store: Store<AppState>;
  let router: Router;

  const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
  const modalMessageSpy = {
    getEvent: jasmine.createSpy('getEvent').and.returnValue(of('')),
    removeModal: jasmine.createSpy('removeModal'),
    updateModalConfigs: jasmine.createSpy('updateModalConfigs'),
  };
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const storeSpy = jasmine.createSpyObj('Store', ['dispatch']);

  beforeEach(async () => {
    authServiceSpy.login.and.returnValue(of({ user: null, credential: null }));

    await TestBed.configureTestingModule({
      declarations: [LoginCardComponent],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule],
      providers: [
        {
          provide: AuthService,
          useValue: authServiceSpy
        },
        {
          provide: Router,
          useValue: routerSpy
        },
        {
          provide: ModalService,
          useValue: modalMessageSpy,
        },
        {
          provide: Store,
          useValue: storeSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginCardComponent);
    router = TestBed.inject(Router);
    compiled = fixture.nativeElement;
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<any>;
    modalService = TestBed.inject(ModalService);
    store = TestBed.inject(Store);
    fixture.detectChanges();

    authServiceSpy.login.calls.reset();
    storeSpy.dispatch.calls.reset();
    routerSpy.navigateByUrl.calls.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render the header title 'Log In'`, () => {
    fixture.detectChanges();
    expect(compiled.querySelector('.login-card-header h2').textContent).toEqual('Log In');
  });

  it('should change to register page, goToRegisterPage()', () => {
    component.goToRegisterPage();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/auth/register');
  });

  it('should fail login when the loginForm is invalid', async () => {
    const loginForm = component.loginForm;
    component.loginForm.get('email')!.setValue('');
    component.loginForm.get('password')!.setValue('');
    component.login();

    expect(loginForm.invalid).toBeTruthy();
    expect(loginForm.get('email')!.hasError('required')).toBeTruthy();
    expect(loginForm.get('password')!.hasError('required')).toBeTruthy();
  });

  it('should call userService.login when loginForm is valid', () => {
    const loginFormValue = { email: 'test@example.com', password: 'password123' };

    component.loginForm.setValue(loginFormValue);
    component.login();

    expect(authService.login).toHaveBeenCalledWith(loginFormValue);
  });

  // it('should dispatch actions and navigate when login is successful', fakeAsync(() => {
  //   const subscription = component.loginSubscription;
  //   const loginFormValue = { email: 'test@example.com', password: 'password123' };

  //   component.loginForm.setValue(loginFormValue);
  //   component.login();

  //   tick();

  //   expect(store.dispatch).toHaveBeenCalledTimes(2); // Dispatched four actions
  //   expect(store.dispatch).toHaveBeenCalledWith(authActions.setUserDataEmail({ email: 'email@gmail.com' }));
  //   expect(store.dispatch).toHaveBeenCalledWith(configActions.setConfigModalMessage({ modalMessage: 'welcome modal' }));
  //   expect(router.navigateByUrl).toHaveBeenCalledWith('/config/profile');

  //   subscription.unsubscribe(); 
  // }));

});
