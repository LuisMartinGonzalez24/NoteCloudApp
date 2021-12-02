
export enum AuthActionType {
    LOG_IN = '[Auth] Login',
    LOG_OUT = '[Auth] Logout',
}

export enum UIActionType {
    UI_APP_LOADING = '[UI] Set Loading',
}

export enum NoteActionType {
    SAVE_NOTE = '[Note] Save Note',
    ADD_NEW_NOTE = '[Note] Add New Note',
    DELETE_NOTE = '[Note] Delete Note',
    UPDATE_NOTE = '[Note] Update Note',
    LOAD_NOTES = '[Note] Load Notes',
    SET_ACTIVE_NOTE = '[Note] Set Active Note',
    CLEAN_NOTES = '[Note] Clean Notes',
}