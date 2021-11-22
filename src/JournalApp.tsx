import React from 'react'
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store } from './reduxState/store';

const JournalApp = () => (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
)

export default JournalApp;