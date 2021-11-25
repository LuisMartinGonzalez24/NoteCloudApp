import { doc, setDoc, addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { RootState } from "../store";
import { Note } from "../actions/noteAction";
import { NoteActionType } from "../actionTypes/actionTypes";
import { loadNotesFromFirebase } from "../../helpers/loadNotes";
import { errorNotify, promiseNotify, successNotify } from "../../helpers/alerts";

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

        dispatch(updateNote(activeNote));
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

        try {

            const docData: Note = {
                id: '',
                title: '',
                body: '',
                imageURL: '',
                date: new Date(Date.now()).toLocaleString(),
            }

            const docRef = await addDoc(collection(db, notesCollection, auth.uid, myNotesCollection), docData);

            dispatch(setActiveNote({
                ...docData,
                id: docRef.id,
            }))

        } catch (ex) {
            console.log(ex)
        }

    }
}

export { setActiveNote, saveNote, loadNotes, addNewNote, setNotesToState };