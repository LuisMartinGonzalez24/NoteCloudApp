import { Action } from "../actions";
import { UIActionType } from "../actionTypes/actionTypes";

interface UIState {
    isError: boolean;
    errorMessage: string;
}

const initialState: UIState = { errorMessage: '', isError: false }

export const uiReducer = (state = initialState, action: Action): UIState => {
    switch (action.type) {
        case UIActionType.UI_SET_ERROR:            
            return {
                ...state,
                isError: true,
                errorMessage: action.payload.errorMessage,
            };

        case UIActionType.UI_REMOVE_ERROR:
            return {
                ...state,
                isError: false,
                errorMessage: ''
            }

        default:
            return state;
    }
}
