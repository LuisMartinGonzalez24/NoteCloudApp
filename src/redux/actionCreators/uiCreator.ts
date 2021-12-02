import { Action } from "../actions";
import { UIActionType } from "../actionTypes/actionTypes";

const setLoading = (isLoading: boolean): Action => (
    {
        type: UIActionType.UI_APP_LOADING,
        payload: isLoading,
    }
);

export { setLoading };