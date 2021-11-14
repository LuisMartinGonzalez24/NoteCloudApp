import React from 'react'
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
    return (
        <>
            {/** Tittle form */}
            <div className='auth__title-login mb16'>
                <h3>Create an Account!</h3>
            </div>

            {/** Login Forn*/}
            <form>
                <div className='auth__container-input-1'>
                    <label htmlFor="" className='mb8'>Email</label>
                    <input
                        type='text'
                        value=''
                        placeholder='Email address'
                        className='auth__input-form mb14'
                    />
                </div>

                <div className='auth__container-input-2'>
                    <label htmlFor="" className='mb8'>Password</label>

                    <input
                        type='text'
                        value=''
                        placeholder='Password'
                        className='auth__input-form mb14'
                    />
                </div>

                <div className='auth__container-input-2'>
                    <label htmlFor="" className='mb8'>Confirm Password</label>
                    <input
                        type='text'
                        value=''
                        placeholder='Confirm password'
                        className='auth__input-form mb14'
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