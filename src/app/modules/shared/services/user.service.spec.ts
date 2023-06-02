import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { Auth, User, UserCredential, UserInfo, Unsubscribe, NextOrObserver, ErrorFn, CompleteFn } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { User as NovaUser } from 'src/app/models/user';

interface CustomAuth extends Partial<Auth> {
  signInWithEmailAndPassword: jasmine.Spy<jasmine.Func>;
  signOut: jasmine.Spy<jasmine.Func>;
}

describe('UserService', () => {
  let userService: UserService;
  let authMock: CustomAuth;

  beforeEach(() => {
    authMock = jasmine.createSpyObj('authMock', ['signInWithEmailAndPassword', 'signOut']);
    authMock.signInWithEmailAndPassword.and.returnValue(Promise.resolve({} as UserCredential));
    authMock.signOut.and.returnValue(Promise.resolve());

    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: Auth, useValue: authMock }
      ]
    });
    userService = TestBed.inject(UserService);
  });


  it('should be created', () => {
    expect(userService).toBeTruthy();
  });



});
