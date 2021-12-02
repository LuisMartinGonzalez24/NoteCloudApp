
enum FirebaseErrorCode {
    emailAlreadyExists = 'auth/email-already-in-use',
    invalidPassword = 'auth/invalid-password',
    userNotFound = 'auth/user-not-found',
}


export const getMessageFirebaseErrorCode = (errorType: string): string => {

    switch (errorType) {
        case FirebaseErrorCode.emailAlreadyExists:
            return 'This email already-exists';

        case FirebaseErrorCode.invalidPassword:
            return 'The provided value for the password is not valid';

        case FirebaseErrorCode.userNotFound:
            return 'Email/password incorrects'

        default:
            return 'Error no identified';
    }
}
