import { NoteActionType } from "../actionTypes/actionTypes";

export type Note = {
    id: string,
    title: string,
    body: string,
    imageURL: string,
    date: string,
}

type LoadNotes = {
    type: NoteActionType.LOAD_NOTES,
    payload: Note [],
}

type UpdateNote = {
    type: NoteActionType.UPDATE_NOTE,
    payload: Note
}

type SetActiveNote = {
    type: NoteActionType.SET_ACTIVE_NOTE,
    payload: Note,
}

export type NoteAction = LoadNotes | UpdateNote | SetActiveNote;