import React from 'react';
import Container from './container';

export default function Section({ children, backgroundColor, maxWidth }) {

    return (

        <div style={{ backgroundColor: backgroundColor || 'white' }}>
            <Container maxWidth={maxWidth}>
                {children}
            </Container>
        </div>

    )

}