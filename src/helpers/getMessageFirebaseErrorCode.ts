
enum FirebaseErrorCode {
    emailAlreadyExists = 'auth/email-already-in-use',
    invalidPassword = 'auth/invalid-password',
    userNotFound = 'auth/user-not-found',
    wrongPassword = 'auth/wrong-password',
}


export const getMessageFirebaseErrorCode = (errorType: string): string => {

    switch (errorType) {
        case FirebaseErrorCode.emailAlreadyExists:
            return 'This email already-exists';

        case FirebaseErrorCode.invalidPassword:
            return 'The provided value for the password is not valid';

        case FirebaseErrorCode.userNotFound:
            return 'This account doesn\'t exists'

        case FirebaseErrorCode.wrongPassword:
            return 'Email/password incorrects'

        default:
            return 'Error no identified';
    }
}
