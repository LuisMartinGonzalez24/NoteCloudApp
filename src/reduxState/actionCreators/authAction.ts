import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { googleProvider } from '../../firebase/firebaseConfig';
import { Action } from '../actions';
import { AuthActionType } from '../actionTypes/actionTypes';

//TODO: remeber use this for typescript and read documentation -> ThunkAction<void, any, unknown, any>

const auth = getAuth();

const startLogin = (email: string, password: string) => {
    return (dispatch: any) => {
        setTimeout(() => {
            dispatch(authLogin({ uid: password, displayName: email }))
        }, 3500);
    }
}

const loginWithGoogleProvider = () => {
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

export { authLogin, authLogout, startLogin, loginWithGoogleProvider };