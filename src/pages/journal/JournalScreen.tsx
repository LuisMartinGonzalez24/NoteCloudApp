import React from 'react'
import NoteComponent from '../../components/NoteComponent/NoteComponent';
import NothingSelectedComponent from '../../components/NothingSelectedComponent/NothingSelectedComponent';
import SideBarComponent from '../../components/SideBarComponent/SideBarComponent';

const JournalScreen = () => {
    return (
        <div className='journal__main-content'>

            <SideBarComponent />

            <main>
                {/* <NothingSelectedComponent /> */}
                <NoteComponent/>
            </main>

        </div>
    )
}

export default JournalScreen;