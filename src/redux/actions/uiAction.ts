import { UIActionType } from "../actionTypes/actionTypes";

type LoadingAction = {
    type: UIActionType.UI_SET_LOADING,
    payload: boolean,
}

type ErrorAction = {
    type: UIActionType.UI_SET_ERROR | UIActionType.UI_REMOVE_ERROR,
    payload: {
        isError: boolean;
        errorMessage: string;
    }
}

export type UIAction = LoadingAction | ErrorAction;