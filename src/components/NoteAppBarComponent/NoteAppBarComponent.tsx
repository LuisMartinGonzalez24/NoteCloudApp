import React from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { saveNote } from '../../redux/actionCreators/noteCreator';

const NoteAppBarComponent = () => {

    const dispatch = useDispatch();

    const handleSaveNote = () => {
        dispatch(saveNote());
    }

    return (
        <div className='note__appbar'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div>
                <span>28 August 2020</span>
            </div>

            <div>
                <button>Pictre</button>
                <button onClick={handleSaveNote} >Save</button>
            </div>
        </div>
    )
}

export default NoteAppBarComponent;