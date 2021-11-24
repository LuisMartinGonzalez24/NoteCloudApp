import { Action } from "../actions";
import { Note } from "../actions/noteAction";
import { NoteActionType } from "../actionTypes/actionTypes";


interface NoteState {
    notes: Note[],
    isNoteSelected: boolean,
    activeNote: Note,
}

const initialState: NoteState = {
    notes: [],
    isNoteSelected: false,
    activeNote: {
        id: '',
        title: '',
        body: '',
        imageURL: '',
        date: new Date(Date.now()).toLocaleString(),
    },
};

export const noteReducer = (state = {} as NoteState, action: Action): NoteState => {
    switch (action.type) {
        case NoteActionType.SAVE_NOTE:
            return {
                ...state,
            };

        case NoteActionType.SET_ACTIVE_NOTE:
            return {
                ...state,
                isNoteSelected: true,
                activeNote: {
                    ...action.payload
                }
            };

        case NoteActionType.LOAD_NOTES:
            return {
                ...state,
                notes: action.payload,
            }

        default:
            return state;
    }
}
