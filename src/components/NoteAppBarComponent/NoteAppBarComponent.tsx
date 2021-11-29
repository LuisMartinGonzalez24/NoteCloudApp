import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { saveNote, uploadPicture } from '../../redux/actionCreators/noteCreator';
import { errorNotify } from '../../helpers/alerts';

const NoteAppBarComponent = () => {

    const dispatch = useDispatch();
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
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

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
                <span className='note__title-date'>28 August 2020</span>
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