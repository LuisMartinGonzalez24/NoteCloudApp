import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { errorNotify } from '../../helpers/alerts';
import Utility from '../../helpers/Utility';
import { useForm } from '../../hooks/useForm';
import { registerWithEmailPassword } from '../../redux/actionCreators/authCreator';
import { setLoading } from '../../redux/actionCreators/uiCreator';
import { RootState } from '../../redux/store';

const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { isAppLoading } = useSelector((state: RootState) => state.ui);

    const { formValues, onChangeForm } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const { firstName, lastName, email, password, passwordConfirm } = formValues;

    const firstInputNameRef = useRef<HTMLInputElement>(null);
    const lastInputNameRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const passwordConfirmInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid()) {
            return;
        }

        dispatch(setLoading(true))
        dispatch(registerWithEmailPassword(email, password, `${firstName.trim()} ${lastName.trim()}`));
    }

    const isFormValid = (): boolean => {
        const errorMessageList: string[] = [];

        if (Utility.isEmptyInput(firstName)) {
            if (firstInputNameRef.current) {
                firstInputNameRef.current.style.borderColor = 'red';
            }
            errorMessageList.push('First name must has at least 3 character');
        }

        if (Utility.isEmptyInput(lastName)) {
            if (lastInputNameRef.current) {
                lastInputNameRef.current.style.borderColor = 'red';
            }
            errorMessageList.push('Last name must has at least 3 character');
        }

        if (Utility.isValidEmail(email) === false) {
            if (emailInputRef.current) {
                emailInputRef.current.style.borderColor = 'red';
            }
            errorMessageList.push('Email is not valid');
        }

        if (Utility.isPasswordValid(password, passwordConfirm) === false) {
            if (
                passwordInputRef.current &&
                passwordConfirmInputRef.current
            ) {
                passwordInputRef.current.style.borderColor = 'red';
                passwordConfirmInputRef.current.style.borderColor = 'red';
            }
            errorMessageList.push('The password must be at least 8 characters long and match both');
        }

        errorMessageList.forEach(errorMessage => {
            errorNotify(errorMessage);
        });

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
                <h3>Create an Account!</h3>
            </div>

            {/** Login Forn*/}
            <form onSubmit={handleSubmit}>
                {/**TODO: change name of input group */}
                <div className='auth__container-name'>
                    <div className='auth__form-group'>
                        <label htmlFor='last-name' className='mb16'>First Name</label>
                        <input
                            ref={firstInputNameRef}
                            id='name'
                            name='name'
                            type='text'
                            value={firstName}
                            placeholder='First Name'
                            className='auth__input-form mb14'
                            onChange={e => onChangeForm('firstName', e.target.value)}
                            onBlur={handleOnBlurInput}
                        />
                    </div>

                    <div className='auth__form-group'>
                        <label htmlFor='last-name' className='mb16'>Last Name</label>
                        <input
                            ref={lastInputNameRef}
                            id='last-name'
                            name='last-name'
                            type='text'
                            value={lastName}
                            placeholder='Last Name'
                            className='auth__input-form mb14'
                            onChange={e => onChangeForm('lastName', e.target.value)}
                            onBlur={handleOnBlurInput}
                        />
                    </div>
                </div>

                <div className='auth__form-group'>
                    <label htmlFor="email-register" className='mb16'>Email</label>
                    <input
                        ref={emailInputRef}
                        id='email-register'
                        name='email-register'
                        type='text'
                        value={email}
                        placeholder='Email address'
                        className='auth__input-form mb14'
                        onChange={e => onChangeForm('email', e.target.value)}
                        onBlur={handleOnBlurInput}
                    />
                </div>

                <div className='auth__form-group'>
                    <label htmlFor="" className='mb16'>Password</label>
                    <input
                        ref={passwordInputRef}
                        type='password'
                        id={'password-register'}
                        name={'password-register'}
                        value={password}
                        placeholder='Password'
                        className='auth__input-form mb14'
                        onChange={e => onChangeForm('password', e.target.value)}
                        onBlur={handleOnBlurInput}
                    />
                </div>

                <div className='auth__form-group'>
                    <label htmlFor="password-confirm-register" className='mb16'>Confirm Password</label>
                    <input
                        ref={passwordConfirmInputRef}
                        type='password'
                        id={'password-confirm-register'}
                        name={'password-confirm-register'}
                        value={passwordConfirm}
                        placeholder='Confirm password'
                        className='auth__input-form mb14'
                        onChange={e => onChangeForm('passwordConfirm', e.target.value)}
                        onBlur={handleOnBlurInput}
                    />
                </div>

                <input
                    type='submit'
                    value={isAppLoading ? 'Loading...' : 'Register Account'}
                    className=''
                    id='auth__btn-login'
                />

                <div className='mt16'>
                    <Link to='/auth/login' >Already have an account? Sign in!</Link>
                </div>
            </form>
        </>
    )
}

export default RegisterScreen;