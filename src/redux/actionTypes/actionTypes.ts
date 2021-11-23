
export enum AuthActionType {
    LOG_IN = '[Auth] Login',
    LOG_OUT = '[Auth] Logout',
}

export enum UIActionType {
    UI_SET_ERROR = '[UI] Set Error',
    UI_REMOVE_ERROR = '[UI] Set Remove Error',
    UI_SET_LOADING = '[UI] Set Loading',
}

export enum NoteActionType {
    NEW_NOTE = '[Note] New Note',
    DELETE_NOTE = '[Note] Delete Note',
    UPDATE_NOTE = '[Note] Update Note',
    LOAD_NOTES = '[Note] Load Notes',
    SET_ACTIVE_NOTE = '[Note] Set Active Note',
    CLEAN_NOTES = '[Note] Clean Notes',
}