import { AuthActionType } from "../actionTypes/actionTypes";

type LogInAction = {
    type: AuthActionType.LOG_IN;
    payload: {
        uid: string;
        displayName: string;
    }
}

type LogOutAction = {
    type: AuthActionType.LOG_OUT;
}

export type AuthAction = LogInAction | LogOutAction;