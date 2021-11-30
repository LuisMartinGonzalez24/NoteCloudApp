import {
    signOut,
    updateProfile,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import { Dispatch } from "redux"
import { auth, googleProvider } from '../../firebase/firebaseConfig';
import { errorNotify } from '../../helpers/alerts';
import { Action } from '../actions';
import { AuthActionType, NoteActionType } from '../actionTypes/actionTypes';
import { setLoading } from './uiCreator';

const authLogIn = (payload: { uid: string, displayName: string }): Action => (
    {
        type: AuthActionType.LOG_IN,
        payload,
    }
);

const authLogOut = (): Action => (
    {
        type: AuthActionType.LOG_OUT,
    }
);

const signOutProvider = () => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            await signOut(auth);
            dispatch(authLogOut());
            dispatch({
                type: NoteActionType.CLEAN_NOTES,
            })
        } catch (ex) {
            console.log(ex)
        }        
    }
}

const logInWithEmailPassword = (email: string, password: string,) => {
    return (dispatch: Dispatch<Action>) => {

        dispatch(setLoading(true))

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                dispatch(authLogIn(
                    {
                        uid: user.uid,
                        displayName: user.displayName!,
                    }
                ))
                dispatch(setLoading(false))                
            })
            .catch((ex) => {
                console.log('>> logInWithEmailPassword error: ', ex);
                errorNotify('Error trying to sign in!')
                dispatch(setLoading(false))
            });
    }
}

const registerWithEmailPassword = (email: string, password: string, name: string) => {
    return (dispatch: Dispatch<Action>) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {

                await updateProfile(userCredential.user, {
                    displayName: name,
                })

                dispatch(authLogIn({
                    uid: userCredential.user.uid,
                    displayName: userCredential.user.displayName!,
                }));
            })
            .catch((ex) => {
                console.log('>> registerWithEmailPassword error: ', ex);
                errorNotify('Error trying to register!')
            });

    }
}

const signInWithGoogleProvider = () => {
    return (dispatch: Dispatch<Action>) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {

            }).catch((ex) => {
                console.log('>> signInWithGoogleProvider: ', ex);
                errorNotify('Error trying sign in with google!')
            });
    }
}


export { 
    authLogIn, authLogOut, signOutProvider, logInWithEmailPassword, registerWithEmailPassword, signInWithGoogleProvider 
};