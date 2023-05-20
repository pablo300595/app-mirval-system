import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import {
  Auth,
  UserCredential, 
  signInWithEmailAndPassword, 
  authInstance$,
  signOut
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  login(credentials: { email: string, password: string }): Observable<UserCredential> {
    try {
      const { email, password } = credentials;
      const result = signInWithEmailAndPassword(this.auth, email, password);
      return from(result);
    } catch (error) {
      console.error(error); 
      throw new Error('error');
    }
  }

  getCurrentUser(): Observable<Auth> {
    return authInstance$;
  }

  getAuth(): Auth {
    return this.auth;
  }

  logout(): Observable<void> {
    return from(signOut(this.auth));
  }

}
