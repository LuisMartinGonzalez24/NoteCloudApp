import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { errorNotify } from '../../helpers/alerts';
import Utility from '../../helpers/Utility';
import { useForm } from '../../hooks/useForm';
import { registerWithEmailPassword } from '../../redux/actionCreators/authCreator';
import { removeError, setError } from '../../redux/actionCreators/uiCreator';
import { RootState } from '../../redux/store';

const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { ui } = useSelector((state: RootState) => state);

    const { formValues, onChangeForm } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const { firstName, lastName, email, password, passwordConfirm } = formValues;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();        
        if (isFormValid()) {
            return;
        }

        // dispatch(removeError());
        dispatch(registerWithEmailPassword(email, password, `${firstName.trim()} ${lastName.trim()}`));
    }

    const isFormValid = (): boolean => {
        if (
            Utility.isEmptyInput(firstName) ||
            Utility.isEmptyInput(lastName)
        ) {
            errorNotify('First name/last name are not valid and must have at least 3 character');
            return true;

        } else if (Utility.isValidEmail(email) === false) {
            errorNotify('Email is not valid');
            return true;

        } else if (Utility.isPasswordValid(password, passwordConfirm) === false) {
            errorNotify('The password must be at least 8 characters long and match both');
            return true;

        } else return false;
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
                            id='name'
                            name='name'
                            type='text'
                            value={firstName}
                            placeholder='First Name'
                            className='auth__input-form mb14'
                            onChange={e => onChangeForm('firstName', e.target.value)}
                        />
                    </div>

                    <div className='auth__form-group'>
                        <label htmlFor='last-name' className='mb16'>Last Name</label>
                        <input
                            id='last-name'
                            name='last-name'
                            type='text'
                            value={lastName}
                            placeholder='Last Name'
                            className='auth__input-form mb14'
                            onChange={e => onChangeForm('lastName', e.target.value)}
                        />
                    </div>
                </div>

                <div className='auth__form-group'>
                    <label htmlFor="email-register" className='mb16'>Email</label>
                    <input
                        id='email-register'
                        name='email-register'
                        type='text'
                        value={email}
                        placeholder='Email address'
                        className='auth__input-form mb14'
                        onChange={e => onChangeForm('email', e.target.value)}
                    />
                </div>

                <div className='auth__form-group'>
                    <label htmlFor="" className='mb16'>Password</label>
                    <input
                        type='password'
                        id={'password-register'}
                        name={'password-register'}
                        value={password}
                        placeholder='Password'
                        className='auth__input-form mb14'
                        onChange={e => onChangeForm('password', e.target.value)}
                    />
                </div>

                <div className='auth__form-group'>
                    <label htmlFor="password-confirm-register" className='mb16'>Confirm Password</label>
                    <input
                        type='password'
                        id={'password-confirm-register'}
                        name={'password-confirm-register'}
                        value={passwordConfirm}
                        placeholder='Confirm password'
                        className='auth__input-form mb14'
                        onChange={e => onChangeForm('passwordConfirm', e.target.value)}
                    />
                </div>

                <input
                    type='submit'
                    value='Register Account'
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