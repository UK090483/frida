import React from 'react';

export default function BigButton({ label, link }) {

    return (

        <div style={{
            height: 140,
            width: '50%',
            backgroundColor: '#fa464c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4rem',
            color: 'white',
            fontWeight: 800
        }}>
            {label}
        </div>

    )

}