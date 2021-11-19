import React from 'react';
import JournalEntryComponent from '../JournalEntryComponent/JournalEntryComponent';

function JournalEntriesComponent() {

    const entries = [1, 2, 3, 4];

    return (
        <div className='journal__entries mt20 pl10 pr10'>
            {entries.map(entry => (
                <JournalEntryComponent key={entry} />
            ))}
        </div>
    )
}

export default JournalEntriesComponent;