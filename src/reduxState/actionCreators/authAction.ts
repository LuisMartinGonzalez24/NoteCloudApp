import {
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth, googleProvider } from '../../firebase/firebaseConfig';
import { Action } from '../actions';
import { AuthActionType } from '../actionTypes/actionTypes';
import { setLoading } from './uiAction';

//TODO: remeber use this for typescript and read documentation -> ThunkAction<void, any, unknown, any>

const authLogin = (payload: { uid: string, displayName: string }): Action => (
    {
        type: AuthActionType.LOG_IN,
        payload,
    }
);

const authLogout = (): Action => (
    {
        type: AuthActionType.LOG_OUT,
    }
);

const logInWithEmailPassword = (email: string, password: string,) => {
    return (dispatch: any) => {

        dispatch(setLoading(true))

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                dispatch(authLogin(
                    {
                        uid: user.uid,
                        displayName: user.displayName!,
                    }
                ))
                dispatch(setLoading(false))                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log('error code: ', errorCode);
                console.log('error Message: ', errorMessage);
                dispatch(setLoading(false))
            });
    }
}

const registerWithEmailPassword = (email: string, password: string, name: string) => {
    return (dispatch: any) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // ...

                await updateProfile(userCredential.user, {
                    displayName: name,
                })

                // console.log(userCredential.user);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }
}

const signInWithGoogleProvider = () => {
    return (dispatch: any) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential?.accessToken;
                // The signed-in user info.
                // const user = result.user;
                // ...

                console.log(result);

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
}


export { authLogin, authLogout, logInWithEmailPassword, registerWithEmailPassword, signInWithGoogleProvider };