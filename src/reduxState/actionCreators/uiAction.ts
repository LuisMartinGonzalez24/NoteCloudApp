import { Action } from "../actions";
import { UIActionType } from "../actionTypes/actionTypes";

const setLoading = (isLoading: boolean): Action => (
    {
        type: UIActionType.UI_SET_LOADING,
        payload: isLoading,
    }
);

const setError = (errorMessage: string): Action => (
    {
        type: UIActionType.UI_SET_ERROR,
        payload: {
            isError: true,
            errorMessage,
        },
    }
);

const removeError = (): Action => (
    {
        type: UIActionType.UI_REMOVE_ERROR,
        payload: {
            isError: false,
            errorMessage: '',
        },
    }
);

export { setLoading, setError, removeError };