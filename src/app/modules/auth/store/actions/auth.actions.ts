import { createAction, props } from "@ngrx/store";
import { UserCredential } from '@angular/fire/auth';
import { Action } from '../../../../models/enums/action';

export const login = createAction(
  Action.LoginAction,
  props<{ email: string, password: string }>()
);

export const loginSuccess = createAction(
  Action.LoginSuccessAction,
  props<{ userCredential: UserCredential }>()
);

export const loginFailed = createAction(
  Action.LoginFailedAction,
  props<{ loginSuccess: boolean }>()
);

export const logout = createAction(Action.LogoutAction);

export const logoutSuccees = createAction(
  Action.LogoutSuccessAction,
  props<{ logoutSuccess: boolean }>()
);
