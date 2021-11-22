import { Action } from "../actions";
import { AuthActionType } from "../actionTypes/actionTypes";

interface AuthState {
    isLoggued: boolean;
    uid: string;
    name: string;
}

const initialState: AuthState = { isLoggued: false, uid: '', name: '' };

export const authReducer = (state = initialState, action: Action): AuthState => {
    switch (action.type) {
        case AuthActionType.LOG_IN:
            return {
                ...state,
                isLoggued: true,
                uid: action.payload.uid,
                name: action.payload.displayName,
            };

        case AuthActionType.LOG_OUT:
            return {
                ...state,
                isLoggued: false,
                uid: '',
                name: '',
            };

        default:
            return state;
    };
}
