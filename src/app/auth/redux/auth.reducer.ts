import { Action, createReducer, on } from "@ngrx/store";
import * as actions from './auth.actions';

export interface AuthState {
    email: string,
    isActive: boolean
}

export const initState = {
    email: '',
    isActive: false
};

const _authReducer = createReducer(initState,
    on(actions.setUserDataEmail, (state, { email }) => generateStateForEmail(state, email)),
    on(actions.setUserDataIsActive, (state, { isActive }) => generateStateForIsActive(state, isActive))
);

function generateStateForEmail(currentState: AuthState, email: string): AuthState {
    return {
        ...currentState,
        email
    }
}

function generateStateForIsActive(currentState: AuthState, isActive: boolean): AuthState {
    return {
        ...currentState,
        isActive
    }
}

export function authReducer(state: AuthState = initState, action: Action) {
    return _authReducer(state, action);
}