import { Action } from "../actions";
import { UIActionType } from "../actionTypes/actionTypes";

interface UIState {
    isAppLoading: boolean,
}

const initialState: UIState = {
    isAppLoading: false,
}

export const uiReducer = (state = initialState, action: Action): UIState => {
    switch (action.type) {
        case UIActionType.UI_APP_LOADING:
            return {
                ...state,
                isAppLoading: action.payload,
            }

        default:
            return state;
    }
}
