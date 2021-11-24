import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase/firebaseConfig"

const notesCollection = 'notes';
const myNotesCollection = 'myNotes';

export const loadNotes = async (uid: string) => {
    const querySnapshot = await getDocs(collection(db, notesCollection, uid, myNotesCollection));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
}