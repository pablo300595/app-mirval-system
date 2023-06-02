import { UserCredential } from '@angular/fire/auth';

export interface AuthState {
    email: string,
    password: string,
    logoutSuccess: boolean,
    loginSuccess: boolean,
    userCredential: UserCredential
}