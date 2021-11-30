import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const confirmationNotify = async (
    title: string,
    confirmButtonText: string,
    denyButtonText: string,
) => {
    return await Swal.fire({
        icon: 'warning',
        title,
        confirmButtonText,
        confirmButtonColor: '#293250',
        denyButtonText,
        denyButtonColor: '#e63946',
        showDenyButton: true,
        focusConfirm: false,
        allowOutsideClick: false,
    })
}

const dimissNotify = (toastId: string) => toast.dismiss(toastId);

const loadingNotify = (loadingMessage: string) => {
    const toastId = toast.loading(loadingMessage);
    return toastId;
};

const successNotify = (message: string) => toast.success(message);

const errorNotify = (message: string) => toast.error(message);

const promiseNotify = (
    myPromise: Promise<any>, 
    loadingMessage: string, 
    successMessage: string, 
    errorMessage: string,
) => {

    toast.promise(myPromise, {
        loading: loadingMessage,
        success: successMessage,
        error: errorMessage,
    });
}

export { successNotify, errorNotify, promiseNotify, loadingNotify, dimissNotify, confirmationNotify };