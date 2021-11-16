import { Action } from '../actions';
import { AuthActionType } from '../actionTypes';

const authLogin = (payload: { uid: string, displayName: string }): Action => (
    {
        type: AuthActionType.LOGIN,
        payload,
    }
);

const authLogout = (): Action => (
    {
        type: AuthActionType.LOGOUT,
    }
)

export { authLogin, authLogout };