import React from 'react';
import JournalEntriesComponent from '../JournalEntriesComponent/JournalEntriesComponent';

const SideBarComponent = () => {
    return (
        <div className='journal__sidebar'>

            <div className='journal__sidebar-navbar mt10 pl10 pr10'>
                <h3>
                    <i className="ri-moon-fill ri-xl"></i>
                    <span className='pl12'>Luis Gonzalez</span>
                </h3>

                <input
                    className='journal__btn-logout'
                    type="button"
                    value="Logout"
                />
            </div>

            <div className='journal__add-new-entry mt24'>
                <i className="ri-calendar-todo-fill ri-8x"></i>
                <span>Add new entry</span>
            </div>

            <JournalEntriesComponent />

        </div>
    )
}

export default SideBarComponent;