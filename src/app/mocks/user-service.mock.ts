import { Auth, User, UserCredential, UserInfo, Unsubscribe, NextOrObserver, ErrorFn, CompleteFn } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';

const authStateChangeHandler: (nextOrObserver: NextOrObserver<User | null>, error?: ErrorFn, completed?: CompleteFn) => Unsubscribe = (nextOrObserver, error, completed) => {
    return () => { };
};

const beforeAuthStateChangedHandler: (callback: (user: User | null) => void | Promise<void>, onAbort?: () => void) => Unsubscribe = (callback, onabort) => {
    return () => { };
};

const onIdTokenChangedHandler: (nextOrObserver: NextOrObserver<User | null>, error?: ErrorFn, completed?: CompleteFn) => Unsubscribe = (nextOrObserver, error, completed) => {
    return () => { };
};

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
    user: user,
    providerId: null,
    operationType: 'signIn'
};

const auth: Auth = {
    app: {
        name: 'string',
        options: {},
        automaticDataCollectionEnabled: true,
    },
    name: '',
    config: {
        apiKey: '',
        apiHost: '',
        apiScheme: '',
        tokenApiHost: '',
        sdkClientVersion: '',
    },
    setPersistence: () => Promise.resolve(),
    languageCode: null,
    tenantId: null,
    settings: {
        appVerificationDisabledForTesting: false
    },
    onAuthStateChanged: authStateChangeHandler,
    beforeAuthStateChanged: beforeAuthStateChangedHandler,
    onIdTokenChanged: onIdTokenChangedHandler,
    currentUser: null,
    emulatorConfig: null,
    updateCurrentUser: () => Promise.resolve(),
    useDeviceLanguage: () => { },
    signOut: () => Promise.resolve()
};

export interface MockedUserService {
    login: () => Observable<UserCredential>,
    getCurrentUser: () => Observable<Auth>,
    getAuth: () => Auth,
    logout: () => Observable<void>
}

export const mockedUserService: MockedUserService = {
    login: () => of(userCredential),
    getCurrentUser: () => of(auth),
    getAuth: () => auth,
    logout: () => of()
};