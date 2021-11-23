import { doc, setDoc, addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { RootState } from "../store";

const noteCloudCollection = 'noteCloud';
const notesCollection = 'notes';

const addNewNote = () => {
    return async (dispatch: Dispatch<Action>, getState: any) => {
        const { auth } = getState() as RootState; //* For the future, this is not right way, remember it. Read the oficial documentation.

        try {

            // const docRef = doc(db, notesCollection, auth.uid, 'myNotes', 'note');

            const docRef = await addDoc(collection(db, auth.uid, noteCloudCollection, notesCollection), {
                title: 'Un nuevo dia 2',
                body: 'Tengo mucha hambre manito. dame algo de comer pleasseee, quiero un chocolate',
                date: new Date().getTime(),
            });
            

        } catch (ex) {
            console.log(ex)
        }

    }
}

export { addNewNote };