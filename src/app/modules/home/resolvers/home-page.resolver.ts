import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { UserService } from '../../shared/services/user.service';


export const homePageResolver: ResolveFn<Auth> = (): Observable<Auth> => {
  const userService = inject(UserService);
  console.log('auth resolver executed!');
  return userService.getCurrentUser();
}