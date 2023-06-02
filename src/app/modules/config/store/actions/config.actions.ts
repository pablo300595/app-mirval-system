import { createAction, props } from "@ngrx/store";

export const setConfigModalType = createAction(
    '[Config] SetConfigModalType', 
    props<{modalType: string}>()
);

export const setConfigModalMessage = createAction(
    '[Config] SetConfigModalMessage', 
    props<{modalMessage: string}>()
);

export const setConfigModalStatus = createAction(
    '[Config] SetConfigModalStatus', 
    props<{modalStatus: string}>()
);
