import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import { AuthState } from 'src/app/models/state/auth-state';
import { UserService } from 'src/app/modules/shared/services/user.service';
import { UserCredential } from '@angular/fire/auth';
import { Action } from '../../../../models/enums/action';

@Injectable()
export class AuthEffects {
    profilePageRoute = '/config/profile';
    loginPageRoute = '/auth/login';

    login$ = createEffect(() => this.actions$.pipe(
        ofType(Action.LoginAction),
        exhaustMap((action: AuthState) => this.userService.login({ email: action.email, password: action.password })
            .pipe(
                map((userCredential: UserCredential) => {
                    const newUserCredential = JSON.parse(JSON.stringify(userCredential));
                    this.router.navigateByUrl(this.profilePageRoute);
                    return ({
                        type: Action.LoginSuccessAction, 
                        userCredential: newUserCredential
                    })
                })
            )
        )
    ));

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(Action.LogoutAction),
        exhaustMap(() => this.userService.logout()
            .pipe(
                map(() => {
                    this.router.navigateByUrl(this.loginPageRoute);
                    return ({
                        type: Action.LogoutSuccessAction, 
                        logoutSuccess: true
                    })
                }),
                
            )
        )
    ));

    // login$ = createEffect(() => this.actions$
    //     .pipe(
    //         ofType('[Auth] Login'),
    //         tap((value) => {
    //             console.log('Some effect executed.');
    //             console.log(value);
    //             return value;
    //         })
    //     ),
    //     { dispatch: false }
    // );

    constructor(
        private actions$: Actions,
        private userService: UserService,
        private router: Router
    ) { }
}