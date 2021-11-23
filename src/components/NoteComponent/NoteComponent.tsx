import React from 'react'
import NoteAppBarComponent from '../NoteAppBarComponent/NoteAppBarComponent';

const NoteComponent = () => {
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
                />

                <textarea
                    name=""
                    id=""
                    placeholder='Describe your note'
                    autoComplete='off'
                    className='note__textarea'
                    autoCorrect='off'
                    spellCheck={false}
                ></textarea>

                <div className='note__image'>
                    <img src="https://cdn.pixabay.com/photo/2013/07/18/15/01/beach-164288_960_720.jpg" alt="img preview" />
                </div>
            </div>
        </div>
    )
}

export default NoteComponent;