import { Action } from "../actions";
import { NoteActionType } from "../actionTypes/actionTypes";

interface NoteState {
    notes: [],
    isNoteSelected: boolean,
    activeNote: {
        id: string,
        title: string,
        body: string,
        imageURL: string,
        date: string,
    },
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

export const noteReducer = (state = {} as NoteState, action: Action ): NoteState => {
    switch (action.type) {
        case NoteActionType.NEW_NOTE:            
            return {
                ...state,
                isNoteSelected: true,
                activeNote: {
                    ...action.payload
                }
            };
    
        default:
            return state;
    }
}
