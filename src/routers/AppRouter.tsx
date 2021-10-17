import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthRouter from './AuthRouter';
import JournalScreen from '../pages/journal/JournalScreen';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/auth' component={AuthRouter}/>
                    <Route exact path='/' component={JournalScreen}/>
                    <Redirect to='/auth/login'/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;