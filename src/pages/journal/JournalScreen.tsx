import React from 'react'
import { useSelector } from 'react-redux';
import NoteComponent from '../../components/NoteScreenComponent/NoteScreenComponent';
import NothingSelectedComponent from '../../components/NothingSelectedComponent/NothingSelectedComponent';
import SideBarComponent from '../../components/SideBarComponent/SideBarComponent';
import { RootState } from '../../redux/store';

const JournalScreen = () => {

    const { isNoteSelected } = useSelector((state: RootState) => state.notes);

    return (
        <div className='journal__main-content'>

            <SideBarComponent />

            <main>

                {isNoteSelected ? (
                    <NoteComponent />
                ) : (
                    <NothingSelectedComponent />
                )}

            </main>

        </div>
    )
}

export default JournalScreen;