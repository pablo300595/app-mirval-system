import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { Auth, User, UserCredential, UserInfo, Unsubscribe, NextOrObserver, ErrorFn, CompleteFn } from '@angular/fire/auth';

interface CustomAuth extends Partial<Auth> {
  signInWithEmailAndPassword: jasmine.Spy<jasmine.Func>;
  signOut: jasmine.Spy<jasmine.Func>;
}

describe('AuthService', () => {
  let authService: AuthService;
  // let authMock: CustomAuth;
  let authSpy: jasmine.SpyObj<Auth>;

  beforeEach(() => {
    // authMock = jasmine.createSpyObj('authMock', ['signInWithEmailAndPassword', 'signOut']);
    // authMock.signInWithEmailAndPassword.and.returnValue(Promise.resolve({} as UserCredential));
    // authMock.signOut.and.returnValue(Promise.resolve());


    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Auth, useValue: {} }
      ]
    });
    authService = TestBed.inject(AuthService);
  });


  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  fit('should get correct message', () => {
    expect(authService.getMessage()).toBe('message');
  })

});
