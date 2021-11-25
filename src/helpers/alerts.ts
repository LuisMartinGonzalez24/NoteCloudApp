import toast from 'react-hot-toast';

const successNotify = (message: string) => toast.success(message);

const errorNotify = (message: string) => toast.error(message);

const promiseNotify = (myPromise: Promise<any>, loadingMessage: string, successMessage: string, errorMessage: string) => {
    toast.promise(myPromise, {
        loading: loadingMessage,
        success: successMessage,
        error: errorMessage,
    });
}

export { successNotify, errorNotify, promiseNotify };