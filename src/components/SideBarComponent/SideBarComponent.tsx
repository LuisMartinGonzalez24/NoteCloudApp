import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { confirmationNotify } from '../../helpers/alerts';
import { signOutProvider } from '../../redux/actionCreators/authCreator';
import { addNewNote } from '../../redux/actionCreators/noteCreator';
import { RootState } from '../../redux/store';
import NoteListComponent from '../NoteListComponent/NoteListComponent';

const SideBarComponent = () => {

    const dispatch = useDispatch();
    const { name } = useSelector((state: RootState) => state.auth);

    const handleLogOut = async () => {
        const result = await confirmationNotify('Are you sure you want to log-off?', 'Logout', 'Cancel');

        if (result) {
            if (result.isConfirmed) {
                dispatch(signOutProvider());
            }
        }
    }

    const handleNewNote = () => {
        dispatch(addNewNote());
    }

    return (
        <div className='home__sidebar'>

            <div className='home__sidebar-navbar mt10 pl10 pr10'>
                <h3>
                    <i className="ri-moon-fill ri-xl"></i>
                    <span className='pl12'>{name}</span>
                </h3>

                <button
                    className='home__btn-logout'
                    type="button"
                    onClick={handleLogOut}
                >
                    <i className="ri-login-box-line ri-xl mr10"></i>
                    <span>Logout</span>
                </button>
            </div>

            <div
                onClick={handleNewNote}
                className='home__add-new-entry mt24'
            >
                <i className="ri-calendar-todo-fill ri-8x"></i>
                <span>Add new note</span>
            </div>

            <NoteListComponent />

        </div>
    )
}

export default SideBarComponent;