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
            <form onSubmit={handleSubmit}>
                <div className='auth__container-input-1'>
                    <label htmlFor="" className='mb8'>Email</label>
                    <input
                        type='text'
                        placeholder='Email address'
                        className='auth__input-form mb14'
                        value={formValues.email}
                        onChange={e => onChangeForm('email', e.target.value)}
                    />
                </div>

                <div className='auth__container-input-2'>
                    <div className='mb8'>
                        <label htmlFor="">Password</label>
                        <Link to='/'>Forgot Password?</Link>
                    </div>
                    <input
                        type='text'
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

                <button className="btn-google mb16" onClick={hanldeGoogleLogin}>
                    <img className="" src="https://i.imgur.com/arC60SB.png" alt="" />
                    <span className='ml10'>Google</span>
                </button>

                <button className="btn-facebook">
                    <svg
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24" width="26" height="26"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
                        ></path>
                    </svg>

                    <span className='ml10'>Facebook</span>
                </button>

                <Link to='/auth/register' className='mt10'>Don't have an account? Sign up</Link>
            </div>

        </>
    )
}

export default LoginScreen;