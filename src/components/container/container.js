import React from 'react';

export default function Container({ children, maxWidth }) {

    return (

        <div style={{ width: '100%', maxWidth: maxWidth || 2600, margin: '0 auto', padding: '0 20px', padding: '0 7%' }}>
            {children}
        </div>

    )

}