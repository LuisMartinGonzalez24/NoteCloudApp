import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logInWithEmailPassword, signInWithGoogleProvider } from '../../redux/actionCreators/authCreator';
import { useForm } from '../../hooks/useForm';
import Utility from '../../helpers/Utility';
import { errorNotify } from '../../helpers/alerts';
import { RootState } from '../../redux/store';
import { setLoading } from '../../redux/actionCreators/uiCreator';

const LoginScreen = () => {

    const dispatch = useDispatch();
    const { isAppLoading } = useSelector((state: RootState) => state.ui)

    const { formValues, onChangeForm, emptyForm } = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!isFormValid()) {
            return;
        }

        dispatch(setLoading(true));
        dispatch(logInWithEmailPassword(formValues.email, formValues.password));
    }

    const hanldeGoogleLogin = () => {
        dispatch(setLoading(true))
        dispatch(signInWithGoogleProvider());
    }

    const isFormValid = (): boolean => {
        const errorMessageList: string[] = [];

        if (Utility.isEmptyInput(email)) {
            emailInputRef.current!.style.borderColor = 'red';
            if (Utility.isEmptyInput(password)) passwordInputRef.current!.style.borderColor = 'red';
            errorMessageList.push('Please fill the inputs');
        }

        if (Utility.isValidEmail(email) === false) {
            errorMessageList.push('Email is not valid');
        }

        errorMessageList.forEach(errorMessage => {
            errorNotify(errorMessage);
        });

        emptyForm();
        return errorMessageList.length === 0;
    }

    const handleOnBlurInput = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value.length > 0) {
            e.target.style.borderColor = '#293250';
        }
    }

    return (
        <>
            {/** Tittle form */}
            <div className='auth__title-login mb16'>
                <p>Welcome back</p>
                <h3>Sign in to access your account</h3>
            </div>

            {/** Login Forn*/}
            <form onSubmit={handleSubmit} spellCheck={false}>
                <div className='auth__form-group'>
                    <label htmlFor="email" className='mb16'>Email</label>
                    <input
                        ref={emailInputRef}
                        id='email'
                        name='email'
                        type='text'
                        placeholder='Email address'
                        className='auth__input-form mb14'
                        value={email}
                        onChange={e => onChangeForm('email', e.target.value)}
                        onBlur={handleOnBlurInput}
                    />
                </div>

                <div className='auth__form-group'>
                    <label htmlFor="password" className='mb16'>Password</label>
                    <input
                        ref={passwordInputRef}
                        id='password'
                        name='password'
                        type='password'
                        placeholder='Password'
                        className='auth__input-form mb14'
                        value={password}
                        onChange={e => onChangeForm('password', e.target.value)}
                        onBlur={handleOnBlurInput}
                    />
                </div>

                <input
                    type='submit'
                    value={isAppLoading ? 'Loading...' : 'Log in'}
                    className=''
                    id='auth__btn-login'
                    disabled={isAppLoading}
                />
            </form>

            {/** Login With */}
            <div className='auth__singin-social'>

                <span className='auth__title-login-socials'>
                    <span className='auth__line-span'></span>
                    <span className='p16' id='auth__span-title'>or login with</span>
                    <span className='auth__line-span'></span>
                </span>

                <button className="auth__btn-google" onClick={hanldeGoogleLogin} disabled={isAppLoading}>
                    <i className="ri-google-fill ri-xl"></i>
                    <span className='ml10'>Google</span>
                </button>

                <div className='mt16'>
                    <Link to='/auth/register'>Don't have an account? Sign up!</Link>
                    <div className='mt4'>
                        Icons made by
                        <a href="https://www.freepik.com" title="Freepik"> Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginScreen;