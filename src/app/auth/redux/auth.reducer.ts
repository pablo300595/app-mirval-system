import { Action, createReducer, on } from "@ngrx/store";
import { AuthState } from "src/app/models/state/auth-state";
import * as actions from './auth.actions';

export const initState = {
    email: '',
    isActive: false
};

const _authReducer = createReducer(initState,
    on(actions.setUserDataEmail, (state, { email }) => ({...state, email})),
    on(actions.setUserDataIsActive, (state, { isActive }) => ({...state, isActive}))
);

export function authReducer(state: AuthState = initState, action: Action) {
    return _authReducer(state, action);
}