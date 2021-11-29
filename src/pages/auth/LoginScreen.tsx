import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logInWithEmailPassword, signInWithGoogleProvider } from '../../redux/actionCreators/authCreator';
import { useForm } from '../../hooks/useForm';
import { RootState } from '../../redux/store';

const LoginScreen = () => {

    const dispatch = useDispatch();
    const { isLoading } = useSelector((state: RootState) => state.ui);

    const { formValues, onChangeForm } = useForm({
        email: 'nando@gmail.com',
        password: '123456'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(logInWithEmailPassword(formValues.email, formValues.password));
    }

    const hanldeGoogleLogin = () => {
        dispatch(signInWithGoogleProvider());
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
                        id='email'
                        name='email'
                        type='text'
                        placeholder='Email address'
                        className='auth__input-form mb14'
                        value={formValues.email}
                        onChange={e => onChangeForm('email', e.target.value)}
                    />
                </div>

                <div className='auth__form-group'>
                    <div className='auth__container-password mb16'>
                        <label htmlFor="password">Password</label>
                        <Link to='/'>Forgot Password?</Link>
                    </div>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        placeholder='Password'
                        className='auth__input-form mb14'
                        value={formValues.password}
                        onChange={e => onChangeForm('password', e.target.value)}
                    />
                </div>

                <input
                    type='submit'
                    value={isLoading ? 'Loading...' : 'Log in'}
                    className=''
                    id='auth__btn-login'
                    disabled={isLoading}
                />
            </form>

            {/** Login With */}
            <div className='auth__singin-social'>

                <span className='auth__title-login-socials'>
                    <span className='auth__line-span'></span>
                    <span className='p16' id='auth__span-title'>or login with</span>
                    <span className='auth__line-span'></span>
                </span>

                <button className="auth__btn-google mb16" onClick={hanldeGoogleLogin}>
                    <i className="ri-google-fill ri-xl"></i>
                    <span className='ml10'>Google</span>
                </button>

                <button className="auth__btn-facebook">
                    <i className="ri-facebook-circle-fill ri-xl"></i>
                    <span className='ml10'>Facebook</span>
                </button>

                <div className='mt16'>                    
                    <Link to='/auth/register'>Don't have an account? Sign up!</Link>
                </div>
            </div>

        </>
    )
}

export default LoginScreen;