import React from 'react';

const JournalEntryComponent = () => {
    return (
        <div className='journal__entry mb20'>
            
            <div className='journal__entry-picture' style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg)'
            }}></div>

            <div className='journal__entry-body'>
                <h4 className='journal__entry-title'>
                    Un nuevo día
                </h4>
                <p className='journal__entry-content pt4'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repudiandae eos iure? Excepturi quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quis voluptates laboriosam excepturi, natus alias vitae commodi vero autem eos non impedit debitis! Reprehenderit nisi earum fuga recusandae doloribus similique.                    
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <p>28/24/20021</p>
            </div>
        </div>
    )
}

export default JournalEntryComponent;