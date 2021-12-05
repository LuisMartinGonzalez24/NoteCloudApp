import React from 'react';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../redux/actionCreators/noteCreator';
import { Note } from '../../redux/actions/noteAction';

interface NoteComponentProps {
    note: Note;
}

const NoteComponent = ({ note }: NoteComponentProps) => {

    const { title, body, date, imageURL } = note;
    const dispatch = useDispatch();

    const handleSetActiveNote = () => {
        dispatch(setActiveNote(note));
    }

    return (
        <div className='home__entry mb20' onClick={handleSetActiveNote}>

            {(imageURL && imageURL.length > 0) && (
                <div className='home__entry-picture' style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${imageURL})`
                }}></div>
            )}

            <div className='home__entry-body'>
                <h4 className='home__entry-title'>
                    {title}
                </h4>
                <p className='home__entry-content pt4'>
                    {body}
                </p>
            </div>

            <div className="home__entry-date-box">
                <span>{dayjs(date).format('dddd')}</span>
                <p>{dayjs(date).format('MM/DD/YYYY')}</p>
            </div>
        </div>
    )
}

export default NoteComponent;