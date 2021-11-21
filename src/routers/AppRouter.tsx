import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';
import { authLogin } from '../reduxState/actionCreators/authAction';
import AuthRouter from './AuthRouter';
import JournalScreen from '../pages/journal/JournalScreen';

const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setchecking] = useState(true);

    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                console.log(user);

                dispatch(authLogin({
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
                    <Route path='/auth' component={AuthRouter} />
                    <Route exact path='/' component={JournalScreen} />
                    <Redirect to='/auth/login' />
                </Switch>
            </>
        </BrowserRouter>
    )
}

export default AppRouter;