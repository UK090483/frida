import React from 'react';
import Container from '../container/container';
import style from './hero.module.scss'

export default function Hero({ children, color }) {

    return (
        <div className={style.root} style={{ backgroundColor: color || 'white' }}>
            <Container>
                {children}
            </Container>
        </div>
    )

}