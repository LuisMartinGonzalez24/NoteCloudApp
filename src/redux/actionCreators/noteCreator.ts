import { doc, setDoc, deleteDoc } from "@firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { db } from "../../firebase/firebaseConfig";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { RootState } from "../store";
import { Note } from "../actions/noteAction";
import { NoteActionType } from "../actionTypes/actionTypes";
import { loadNotesFromFirebase } from "../../helpers/loadNotes";
import { dimissNotify, errorNotify, loadingNotify, promiseNotify, successNotify } from "../../helpers/alerts";
import { uploadFile } from "../../helpers/uploadFIle";

const notesCollection = 'notes';
const myNotesCollection = 'myNotes';

const setActiveNote = (payload: Note): Action => (
    {
        type: NoteActionType.SET_ACTIVE_NOTE,
        payload,
    }
)

const loadNotes = (uid: string) => {
    return (dispatch: Dispatch<Action>) => {
        loadNotesFromFirebase(uid).then(notes => {
            console.log(notes);
            dispatch(setNotesToState(notes));
        });
    }
};

const saveNote = () => {
    return (dispatch: Dispatch<Action>, getState: any) => {
        const { auth, notes: { activeNote } } = getState() as RootState; //* For the future, this is not right way, remember it. Read the oficial documentation.

        const noteRef = doc(db, notesCollection, auth.uid, myNotesCollection, activeNote.id);
        promiseNotify(
            setDoc(noteRef, { ...activeNote }, { merge: true }),
            'Saving note...',
            'Note saved',
            'Error saving note'
        )
    }
}

const deleteNote = () => {
    return (dispatch: Dispatch<Action>, getState: any) => {
        const { auth, notes: { activeNote } } = getState() as RootState;

        const noteRef = doc(db, notesCollection, auth.uid, myNotesCollection, activeNote.id);
        promiseNotify(
            deleteDoc(noteRef),
            'Deleting note...',
            'Note deleted',
            'Error deleting note'
        )

        dispatch({
            type: NoteActionType.DELETE_NOTE,
            payload: activeNote.id,
        });
    }
}

const updateNote = (payload: Note): Action => (
    {
        type: NoteActionType.UPDATE_NOTE,
        payload,
    }
)

const setNotesToState = (notes: Note[]): Action => (
    {
        type: NoteActionType.LOAD_NOTES,
        payload: notes,
    }
)

const addNewNote = () => {
    return async (dispatch: Dispatch<Action>, getState: any) => {
        const { auth } = getState() as RootState;

        const noteId: string = uuidv4();

        const docData: Note = {
            id: noteId,
            title: '',
            body: '',
            imageURL: '',
            date: new Date().getTime(),
        }

        dispatch({
            type: NoteActionType.ADD_NEW_NOTE,
            payload: docData,
        });

        dispatch(setActiveNote(docData));

        setDoc(doc(db, notesCollection, auth.uid, myNotesCollection, noteId), docData)
        .catch(ex => console.log(ex));
    }
}

const uploadPicture = (file: File) => {
    return async (dispatch: Dispatch<Action>, getState: any) => {
        const { notes: { activeNote } } = getState() as RootState;
        const toastId = loadingNotify('Uploading picture...');
        const pictureUrl = await uploadFile(file)
        dimissNotify(toastId);

        if (pictureUrl) {
            successNotify('Picture saved');

            dispatch(updateNote({
                ...activeNote,
                imageURL: pictureUrl,
            }))
        } else {
            errorNotify('Error Uploading picture')
        }
    }
}

export { setActiveNote, saveNote, deleteNote, loadNotes, addNewNote, setNotesToState, updateNote, uploadPicture };