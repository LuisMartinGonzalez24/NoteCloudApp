import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from '../pages/auth/LoginScreen';
import RegisterScreen from '../pages/auth/RegisterScreen';
// import { TitleComponent } from '../components/TitleComponent/TitleComponent';

const AuthRouter = () => {
    return (
        <div className='auth__main'>

            <div className='auth__column-1'>
                <h1>JOURNAL APP</h1>
            </div>

            <div className='auth__column-2'>
                {/* <TitleComponent title={'Journal App'} /> */}
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