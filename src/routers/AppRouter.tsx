import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ReduxState } from '../reduxState/reducers';
import { auth } from '../firebase/firebaseConfig';
import { authLogIn } from '../reduxState/actionCreators/authAction';
import AuthRouter from './AuthRouter';
import JournalScreen from '../pages/journal/JournalScreen';
import { PublicRoute } from './PublicRoute';
import { ProtectedRoute } from './ProtectedRoute';

const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setchecking] = useState(true);
    const { auth:{ isLoggued } } = useSelector((state: ReduxState) => state)

    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                console.log(user);

                dispatch(authLogIn({
                    uid: user.uid,
                    displayName: user.displayName!,
                }))
            } else {
                console.log('User is not exists');
            }
            setchecking(false);
        })

        return () => {
            unsubscribe();
        }

    }, [ dispatch ]);

    return checking ? (
        <h1>LOADING...</h1>
    ) : (
        <BrowserRouter>
            <>
                <Switch>
                    <PublicRoute path='/auth' isLogged={isLoggued} component={AuthRouter} />
                    <ProtectedRoute exact path='/' isLogged={isLoggued} component={JournalScreen} />
                    <Redirect to='/auth/login' />
                </Switch>
            </>
        </BrowserRouter>
    )
}

export default AppRouter;