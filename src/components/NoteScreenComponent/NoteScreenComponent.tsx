import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { setActiveNote, updateNote } from '../../redux/actionCreators/noteCreator';
import { RootState } from '../../redux/store';
import NoteAppBarComponent from '../NoteAppBarComponent/NoteAppBarComponent';

const NoteScreenComponent = () => {

    const dispatch = useDispatch();
    const { activeNote } = useSelector((state: RootState) => state.notes)
    const { formValues, onChangeForm, resetForm } = useForm(activeNote);

    const { title, body, imageURL } = formValues;
    const activeNoteChangeRef = useRef(activeNote);

    useEffect(() => {
        if (activeNote.id !== activeNoteChangeRef.current.id) {
            activeNoteChangeRef.current = activeNote;
            resetForm(activeNote);
        }

    }, [activeNote, resetForm])

    useEffect(() => {

        if (activeNote.id === activeNoteChangeRef.current.id) {
            dispatch(updateNote(formValues));
        }

    }, [dispatch, formValues, activeNote])



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

                {(imageURL && imageURL.length > 0) && (
                    <div className='note__image'>
                        <img src="https://cdn.pixabay.com/photo/2013/07/18/15/01/beach-164288_960_720.jpg" alt="img preview" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default NoteScreenComponent;