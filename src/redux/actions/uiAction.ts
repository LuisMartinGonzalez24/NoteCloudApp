import { UIActionType } from "../actionTypes/actionTypes";

type LoadingAction = {
    type: UIActionType.UI_APP_LOADING,
    payload: boolean,
}

export type UIAction = LoadingAction;