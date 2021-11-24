import { NoteActionType } from "../actionTypes/actionTypes";

export type Note = {
    id: string,
    title: string,
    body: string,
    imageURL: string,
    date: string,
}

type SaveNote = {
    type: NoteActionType.SAVE_NOTE,
    payload: Note
}

type SetActiveNote = {
    type: NoteActionType.SET_ACTIVE_NOTE,
    payload: Note,
}

type LoadNotes = {
    type: NoteActionType.LOAD_NOTES,
    payload: Note [],
}

export type NoteAction = SaveNote | SetActiveNote | LoadNotes;