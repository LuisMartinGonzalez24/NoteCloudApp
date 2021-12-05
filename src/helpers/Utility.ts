
export default class Utility {

    static isValidEmail(text: string) {
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (regex.test(text)) {
            return true;
        } else {
            return false;
        }
    };

    static isPasswordValid = (password: string, passwordconfirm: string) => {
        if (password === passwordconfirm) {
            if (password.length >= 8) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };

    static isEmptyInput(text: string) {
        const textInput = text.trim();
        if (textInput === undefined || textInput === null) {
            return true;

        } else if (textInput === '') {
            return true;

        } else if (textInput.length === 0) {
            return true;

        } else if (textInput.length < 3) {
            return true;

        } else return false;
    }
}