import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
        email: 'elvergalar@gmail.com',
        password: '12345678',
        passwordConfirm: '12345678',
    });

    console.log(ui.isError)

    const { email, password, passwordConfirm } = formValues;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isFormValid()) {
            return;
        }

        dispatch(removeError());
        dispatch(registerWithEmailPassword(email, password, 'Elver Galar'));
    }

    const isFormValid = (): boolean => {
        if (Utility.isValidEmail(email) === false) {
            dispatch(setError('Email is not valid'));
            return true;

        } else if (Utility.isPasswordValid(password, passwordConfirm) === false) {
            dispatch(setError('The password must be at least 8 characters long and match both'));
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
                            value={email}
                            placeholder='Email address'
                            className='auth__input-form mb14'
                            onChange={e => onChangeForm('email', e.target.value)}
                        />
                    </div>

                    <div className='auth__form-group'>
                        <label htmlFor='last-name' className='mb16'>Last Name</label>
                        <input
                            id='last-name'
                            name='last-name'
                            type='text'
                            value={email}
                            placeholder='Email address'
                            className='auth__input-form mb14'
                            onChange={e => onChangeForm('email', e.target.value)}
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
                        type='text'
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
                        type='text'
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