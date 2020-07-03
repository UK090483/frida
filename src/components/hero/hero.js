import React from 'react';
import Container from '../container/container'

export default function Hero({ children, color }) {

    return (
        <div style={{ backgroundColor: color || 'white', height: '100vh', display: 'flex', alignItems: 'center' }}>
            <Container>
                {children}
            </Container>
        </div>
    )

}