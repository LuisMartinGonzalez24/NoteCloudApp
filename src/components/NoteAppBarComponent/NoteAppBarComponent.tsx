import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { saveNote, uploadPicture } from '../../redux/actionCreators/noteCreator';
import { errorNotify } from '../../helpers/alerts';
import { RootState } from '../../redux/store';

const NoteAppBarComponent = () => {

    const dispatch = useDispatch();
    const { date } = useSelector((state: RootState) => state.notes.activeNote)
    const fileSelectorRef = useRef<HTMLInputElement>(null);

    const handleSaveNote = () => {
        dispatch(saveNote());
    }

    const handleUploadPicture = async () => {
        fileSelectorRef.current?.click();
    }

    const handleFileSelectorChange = (selectorFiles: FileList | null) => {
        if (selectorFiles && selectorFiles.length > 0) {
            const file = selectorFiles[0];

            if (file.type.includes('image')) {
                dispatch(uploadPicture(file));
            } else {
                errorNotify('The file must be a image');
            }
        }
    }

    return (
        <div className='note__appbar'>
            <input
                ref={fileSelectorRef}
                type="file"
                id='fileSelector'
                name='fileSelector'
                hidden
                accept='image/*'
                onChange={e => handleFileSelectorChange(e.target.files)}
            />

            <div>
                <span className='note__title-date'>{dayjs(date).format('MMMM D, YYYY')}</span>
            </div>

            <div className='note__btn-actions'>
                <button className='note__btn-picture' onClick={handleUploadPicture}>
                    <i className="ri-image-add-fill ri-xl"></i>
                    <span className='ml10'>Picture</span>
                </button>

                <button className='note__btn-save' onClick={handleSaveNote} >
                    <i className="ri-upload-cloud-2-fill ri-xl"></i>
                    <span className='ml10'>Save</span>
                </button>
            </div>
        </div>
    )
}

export default NoteAppBarComponent;