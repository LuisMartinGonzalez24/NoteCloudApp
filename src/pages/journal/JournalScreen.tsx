import React from 'react'
import NothingSelectedComponent from '../../components/NothingSelectedComponent/NothingSelectedComponent';
import SideBarComponent from '../../components/SideBarComponent/SideBarComponent';

const JournalScreen = () => {
    return (
        <div className='journal__main-content'>

            <SideBarComponent />

            <main>
                <NothingSelectedComponent />
            </main>

        </div>
    )
}

export default JournalScreen;