import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import NoteComponent from '../NoteComponent/NoteComponent';

const NoteListComponent = () => {

    const { notes } = useSelector((state: RootState) => state.notes)

    return (
        <div className='home__entries mt20 pl10 pr10'>
            {
                notes.length > 0 && (
                    notes.map(note => <NoteComponent key={note.id} note={note} />)
                )
            }
        </div>
    )
}

export default NoteListComponent;