import { Action } from "../actions";
import { AuthActionType } from "../actionTypes/actionTypes";

interface AuthState {
    uid: string;
    name: string;
}

const initialState: AuthState = { uid: '1234', name: 'Luis' };

export const authReducer = (state = initialState, action: Action): AuthState => {
    switch (action.type) {
        case AuthActionType.LOG_IN:
            console.log('login action');
            return {
                ...state,
                uid: action.payload.uid,
                name: action.payload.displayName
            };

        case AuthActionType.LOG_OUT:
            console.log('logout action');
            return state;

        default:
            return state;
    };
}
