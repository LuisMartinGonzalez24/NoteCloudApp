import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Utility from '../../helpers/Utility';
import { useForm } from '../../hooks/useForm';
import { registerWithEmailPassword } from '../../reduxState/actionCreators/authAction';
import { removeError, setError } from '../../reduxState/actionCreators/uiAction';
import { ReduxState } from '../../reduxState/reducers';

const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { ui } = useSelector((state: ReduxState) => state);

    const { form, onChange } = useForm({
        firstName: '',
        lastName: '',
        email: 'elvergalar@gmail.com',
        password: '12345678',
        passwordConfirm: '12345678',
    });

    console.log(ui.isError)

    const { email, password, passwordConfirm } = form;

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
                <div className='auth__container-input-1'>
                    <label htmlFor="" className='mb8'>Email</label>
                    <input
                        type='text'
                        value={email}
                        placeholder='Email address'
                        className='auth__input-form mb14'
                        onChange={e => onChange('email', e.target.value)}
                    />
                </div>

                <div className='auth__container-input-2'>
                    <label htmlFor="" className='mb8'>Password</label>

                    <input
                        type='text'
                        id={'password'}
                        name={'password'}
                        value={password}
                        placeholder='Password'
                        className='auth__input-form mb14'
                        onChange={e => onChange('password', e.target.value)}
                    />
                </div>

                <div className='auth__container-input-2'>
                    <label htmlFor="" className='mb8'>Confirm Password</label>
                    <input
                        type='text'
                        id={'passwordConfirm'}
                        name={'passwordConfirm'}
                        value={passwordConfirm}
                        placeholder='Confirm password'
                        className='auth__input-form mb14'
                        onChange={e => onChange('passwordConfirm', e.target.value)}
                    />
                </div>

                <input
                    type='submit'
                    value='Register Account'
                    className=''
                    id='auth__btn-login'
                />
            </form>

            <span className='auth__title-login-socials'>
                <Link to='/auth/login' className='p16' id='auth__span-title'>Already have an account? Login!h</Link>
            </span>

        </>
    )
}

export default RegisterScreen;