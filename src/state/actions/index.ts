import { AuthActionType } from "../actionTypes";

type LogInAction = {
    type: AuthActionType.LOGIN;
    payload: {
        uid: string;
        displayName: string;
    }
}

type LogOutAction = {
    type: AuthActionType.LOGOUT;
}

export type Action = LogInAction | LogOutAction;