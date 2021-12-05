import React from 'react'
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const NoteCloudApp = () => (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
)

export default NoteCloudApp;