import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase/firebaseConfig"
import { Note } from "../redux/actions/noteAction";

const notesCollection = 'notes';
const myNotesCollection = 'myNotes';

export const loadNotesFromFirebase = (uid: string) => {
    return new Promise<Note []>((resolve: any, reject: any) => {
        const notes: any [] = [];

        getDocs(collection(db, notesCollection, uid, myNotesCollection))
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                    notes.push({
                        ...doc.data(),
                        id: doc.id,
                    });
                });

                resolve(notes);
            })
            .catch(ex => {
                console.log(ex);
                reject(new Error(`Error to load notes from firebase: ${ex}`))
            });
    })
}