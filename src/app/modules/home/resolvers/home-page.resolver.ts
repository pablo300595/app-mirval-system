import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../../shared/services/auth.service';


export const homePageResolver: ResolveFn<Auth> = (): Observable<Auth> => {
  const authService = inject(AuthService);
  return authService.getCurrentUser();
}