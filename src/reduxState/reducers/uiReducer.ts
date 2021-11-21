import { Action } from "../actions";
import { UIActionType } from "../actionTypes/actionTypes";

interface UIState {
    isLoading: boolean,
    isError: boolean;
    errorMessage: string;
}

const initialState: UIState = {
    isLoading: false,
    isError: false,
    errorMessage: '',
}

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

        case UIActionType.UI_SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }

        default:
            return state;
    }
}
