import React from 'react'

interface TitleComponentProps {
    title: string;
}

export const TitleComponent = ({title}: TitleComponentProps) => {
    return (
        <h1 style={{
            color: 'white',
            fontSize: '5rem',
            fontFamily: 'Roboto',
            fontWeight: 900,
            marginBottom: 40,
            textAlign: 'center',
            fontStyle: 'italic'
        }}>{title}</h1>
    )
}