import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';
import { authLogIn } from '../redux/actionCreators/authCreator';
import AuthRouter from './AuthRouter';
import JournalScreen from '../pages/journal/JournalScreen';
import { PublicRoute } from './PublicRoute';
import { ProtectedRoute } from './ProtectedRoute';
import { RootState } from '../redux/store';
import { loadNotes } from '../helpers/loadNotes';

const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setchecking] = useState(true);
    const { auth:{ isLoggued } } = useSelector((state: RootState) => state)

    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                console.log(user);

                dispatch(authLogIn({
                    uid: user.uid,
                    displayName: user.displayName!,
                }));

                loadNotes(user.uid);
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