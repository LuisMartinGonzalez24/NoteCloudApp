import { AuthActionType, UIActionType } from "../actionTypes/actionTypes";

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

type UILoadingAction = {
    type: UIActionType.UI_SET_LOADING,
    payload: boolean,
}

type UIErrorAction = {
    type: UIActionType.UI_SET_ERROR | UIActionType.UI_REMOVE_ERROR,
    payload: {
        isError: boolean;
        errorMessage: string;
    }
}

export type Action = LogInAction | LogOutAction | UILoadingAction | UIErrorAction;