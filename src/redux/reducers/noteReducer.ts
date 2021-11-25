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
        date: '',
    },
};

export const noteReducer = (state = initialState, action: Action): NoteState => {
    switch (action.type) {
        case NoteActionType.UPDATE_NOTE:
            return {
                ...state,
                notes: state.notes.map(note => note.id === action.payload.id ? action.payload : note),
                activeNote: action.payload,
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
