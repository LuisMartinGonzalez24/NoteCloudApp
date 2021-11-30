import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import { authReducer } from "./authReducer";
import { noteReducer } from "./noteReducer";

const reducers = combineReducers ({
    ui: uiReducer,
    auth: authReducer,
    notes: noteReducer,
});

export {reducers};
