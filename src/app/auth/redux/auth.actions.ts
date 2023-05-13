import { createAction, props } from "@ngrx/store";

export const setUserDataEmail = createAction(
    '[Auth] SetUserDataEmail', 
    props<{email: string}>()
);

export const setUserDataIsActive = createAction(
    '[Auth] SetUserDataIsActive', 
    props<{isActive: boolean}>()
);