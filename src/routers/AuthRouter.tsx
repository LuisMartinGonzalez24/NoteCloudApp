import React from 'react'
import { Toaster } from 'react-hot-toast';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from '../pages/auth/LoginScreen';
import RegisterScreen from '../pages/auth/RegisterScreen';

const AuthRouter = () => {
    return (
        <div className='auth__main'>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />

            <div className='auth__column-1'>
                <div className='auth__logo-container'>
                    <h1>Note Cloud</h1>
                    <i className="ri-cloud-line ri-3x pl14"></i>
                </div>
            </div>

            <div className='auth__column-2'>
                <div className='auth__form-contaniner p20'>
                    <Switch>
                        <Route exact path='/auth/login' component={LoginScreen} />
                        <Route exact path='/auth/register' component={RegisterScreen} />
                        <Redirect to='/auth/login' />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default AuthRouter;