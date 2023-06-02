import { UserCredential } from '@angular/fire/auth';

export interface AppState {
    userData: {
        email: string,
        password: string,
        loginSuccess: false
        logoutSuccess: boolean,
        userCredential: UserCredential
    },
    configData: {
        modalType: string,
        modalMessage: string,
        modalStatus: string
    }
}