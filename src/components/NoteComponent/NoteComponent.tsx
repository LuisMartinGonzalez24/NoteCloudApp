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
        <div className='journal__entry mb20' onClick={handleSetActiveNote}>

            {(imageURL && imageURL.length > 0) && (
                <div className='journal__entry-picture' style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${imageURL})`
                }}></div>
            )}

            <div className='journal__entry-body'>
                <h4 className='journal__entry-title'>
                    {title}
                </h4>
                <p className='journal__entry-content pt4'>
                    {body}
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{dayjs(date).format('dddd')}</span>
                <p>{dayjs(date).format('MM/DD/YYYY')}</p>
            </div>
        </div>
    )
}

export default NoteComponent;