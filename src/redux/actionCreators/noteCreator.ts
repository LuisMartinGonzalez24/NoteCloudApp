import { doc, setDoc, addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { RootState } from "../store";
import { Note } from "../actions/noteAction";
import { NoteActionType } from "../actionTypes/actionTypes";

const notesCollection = 'notes';
const myNotesCollection = 'myNotes';

const setActiveNote = (payload: Note): Action => (
    {
        type: NoteActionType.SAVE_NOTE,
        payload,
    }
)

const addNewNote = () => {
    return async (dispatch: Dispatch<Action>, getState: any) => {
        const { auth } = getState() as RootState; //* For the future, this is not right way, remember it. Read the oficial documentation.

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

export { addNewNote };