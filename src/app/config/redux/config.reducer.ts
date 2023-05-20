import { Action, createReducer, on } from "@ngrx/store";
import { ConfigState } from "src/app/models/state/config-state";
import * as actions from './config.actions';
import { ModalMessage, ModalStatus, ModalTypes } from "src/app/models/enums/modal";

export const initState = {
    modalType: ModalTypes.ErrorType as string,
    modalMessage: ModalMessage.EmptyMessage as string,
    modalStatus: ModalStatus.EnterStatus as string
};

const _configReducer = createReducer(initState,
    on(actions.setConfigModalType, (state, { modalType }) => ({ ...state, modalType })),
    on(actions.setConfigModalMessage, (state, { modalMessage }) => ({ ...state, modalMessage })),
    on(actions.setConfigModalStatus, (state, { modalStatus }) => ({ ...state, modalStatus }))
);

export function configReducer(state: ConfigState = initState, action: Action) {
    return _configReducer(state, action);
}