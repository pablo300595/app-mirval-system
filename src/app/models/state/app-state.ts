export interface AppState {
    userData: {
        email: string,
        isActive: boolean
    },
    configData: {
        modalType: string,
        modalMessage: string,
        modalStatus: string
    }
}