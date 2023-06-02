import { Action, createReducer, on } from "@ngrx/store";
import { AuthState } from "src/app/models/state/auth-state";
import * as actions from '../../../auth/store/actions/auth.actions';
import { User, UserCredential } from '@angular/fire/auth';

const user: User = {
    uid: 'mockUserId',
    email: 'mock@example.com',
    emailVerified: true,
    displayName: 'Mock User',
    phoneNumber: null,
    photoURL: null,
    providerId: '',
    isAnonymous: false,
    tenantId: null,
    metadata: {},
    providerData: [],
    getIdToken: async () => 'mockIdToken',
    refreshToken: '',
    getIdTokenResult: () => Promise.resolve({
        token: 'mockToken',
        claims: {},
        authTime: new Date().toUTCString(),
        expirationTime: new Date().toUTCString(),
        issuedAtTime: new Date().toUTCString(),
        signInProvider: null,
        signInSecondFactor: null,
    }),
    reload: () => Promise.resolve(),
    delete: () => Promise.resolve(),
    toJSON: () => ({})
}

const userCredential: UserCredential = {
    user: {...user},
    providerId: '',
    operationType: 'signIn'
};

export const initState = {
    email: '',
    password: '',
    userCredential: { ...userCredential},
    loginSuccess: false,
    logoutSuccess: false
};

const _authReducer = createReducer(initState,
    on(actions.login, (state, { email, password }) => ({...state, email, password})),
    on(actions.loginSuccess, (state, { userCredential }) => ({...state, userCredential})),
    on(actions.loginFailed, (state, {loginSuccess}) => ({...state, loginSuccess})),
    on(actions.logout, (state) => ({...state })),
    on(actions.logoutSuccees, (state, {logoutSuccess}) => ({...state,  logoutSuccess}))
);

export function authReducer(state: AuthState = initState, action: Action) {
    return _authReducer(state, action);
}