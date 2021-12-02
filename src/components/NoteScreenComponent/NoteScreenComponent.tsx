import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { confirmationNotify } from '../../helpers/alerts';
import { useForm } from '../../hooks/useForm';
import { deleteNote, updateNote } from '../../redux/actionCreators/noteCreator';
import { RootState } from '../../redux/store';
import NoteAppBarComponent from '../NoteAppBarComponent/NoteAppBarComponent';

const NoteScreenComponent = () => {

    const dispatch = useDispatch();
    const { activeNote } = useSelector((state: RootState) => state.notes)
    const { formValues, onChangeForm, resetForm } = useForm(activeNote);

    const { title, body } = formValues;
    const activeNoteChangeRef = useRef(activeNote);

    useEffect(() => {
        if (activeNote.id !== activeNoteChangeRef.current.id) {
            activeNoteChangeRef.current = activeNote;
            resetForm(activeNote);
        }

    }, [activeNote, resetForm])

    useEffect(() => {

        dispatch(updateNote(formValues));

    }, [dispatch, formValues])

    const handleDeleteNote = async () => {
        const result = await confirmationNotify('Do you want to delete it?', 'Yes, delete it', `I don't`);

        if (result) {
            if (result.isConfirmed) {
                dispatch(deleteNote());
            }
        }
    }

    const seeImage = () => {
        Swal.fire({
            confirmButtonColor: '#293250',
            imageUrl: activeNote.imageURL,
            imageHeight: 500,
            imageWidth: 850,
            width: 850,
            imageAlt: 'image here'
        })
    }

    return (
        <div className='note__main-content'>
            <NoteAppBarComponent />

            <div className='note__content'>
                <input
                    type="text"
                    placeholder='Title of your note'
                    className='note__input mb10'
                    autoComplete={'off'}
                    spellCheck={false}
                    maxLength={45}
                    value={title}
                    onChange={e => onChangeForm('title', e.target.value)}
                />

                <textarea
                    placeholder='Describe your note'
                    autoComplete='off'
                    className='note__textarea'
                    autoCorrect='off'
                    spellCheck={false}
                    value={body}
                    onChange={e => onChangeForm('body', e.target.value)}
                ></textarea>

                {(activeNote.imageURL && activeNote.imageURL.length > 0) && (
                    <div className='note__image' onClick={seeImage}>
                        <img src={activeNote.imageURL} alt="img preview" />
                    </div>
                )}

            </div>

            <button className='note__btn-delete' onClick={handleDeleteNote}>
                <span>Delete Note</span>
                <i className="ml10 ri-delete-bin-6-line ri-2x"></i>
            </button>
        </div>
    )
}

export default NoteScreenComponent;