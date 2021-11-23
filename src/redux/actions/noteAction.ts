import { NoteActionType } from "../actionTypes/actionTypes";

export type AddAction = {
    type: NoteActionType.NEW_NOTE,
    payload: {
        id: string,
        title: string,
        body: string,
        imageURL: string,
        date: string,
    }
}

export type NoteAction = AddAction;