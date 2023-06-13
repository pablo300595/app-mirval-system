import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import {
  Auth,
  UserCredential,
  signInWithEmailAndPassword,
  authInstance$,
  signOut
} from '@angular/fire/auth';
import { Student } from 'src/app/models/student';

interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  login(credentials: Credentials): Observable<UserCredential> {
    try {
      const { email, password } = credentials;
      const result = signInWithEmailAndPassword(this.auth, email, password);
      return from(result);
    } catch (error: any) {
      throw new Error(error.message);
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

  getMessage(): string {
    return 'message';
  }

}
