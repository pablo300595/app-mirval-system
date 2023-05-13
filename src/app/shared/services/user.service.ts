import { Injectable } from '@angular/core';
// import { User } from '../../models/user';
import { Observable, from, of } from 'rxjs';
import { Auth, UserCredential, signInWithEmailAndPassword, User, authInstance$ } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // users: User[];

  constructor(private auth: Auth) { 
    // this.users = [
    //   { id: '001', name: 'Pablo Valenzuela', age: 27 },
    //   { id: '002', name: 'Miguel Contreras', age: 28 },
    //   { id: '003', name: 'Hernan Lopez', age: 27 }
    // ];
  }

  // getUsers(): Observable<User[]> {
  //   return of(this.users);
  // }

  // getUserById(id: string): Observable<User> {
  //   const user = this.users.filter((user) => {
  //     return id === user.id
  //   });

  //   return of(user[0]);
  // }

  login( credentials: { email: string, password: string } ): Observable<UserCredential> {
    try {
      const { email, password } = credentials;
      const result = signInWithEmailAndPassword(this.auth, email, password);
      return from(result);
    } catch (error) {
      throw new Error('error');
    }
  }

  getCurrentUser(): Observable<Auth> {
    return authInstance$;
  }


}
