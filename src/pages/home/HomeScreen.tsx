import React from 'react'
import { useSelector } from 'react-redux';
import NoteScreenComponent from '../../components/NoteScreenComponent/NoteScreenComponent';
import NothingSelectedComponent from '../../components/NothingSelectedComponent/NothingSelectedComponent';
import SideBarComponent from '../../components/SideBarComponent/SideBarComponent';
import { RootState } from '../../redux/store';

const HomeScreen = () => {

    const { isNoteSelected } = useSelector((state: RootState) => state.notes);

    return (
        <div className='home__main-content'>

            <SideBarComponent />

            <main>

                {isNoteSelected ? (
                    <NoteScreenComponent />
                ) : (
                    <NothingSelectedComponent />
                )}

            </main>

        </div>
    )
}

export default HomeScreen;