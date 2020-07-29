import React, { useState, useEffect } from 'react';
import style from './teilnehmen.module.scss';
import useMouse from '../Mouse/hooks/useMouse'


export default function CookieConsent() {

    const [show, setShow] = useState(false);
    const { setMouse } = useMouse()

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 500);
    }, []);


    return (

        <div className={`${style.root} ${!show ? '' : style.show}`}>
            <a
                className={`${style.link}`}
                href={'https://form.jotform.com/201885178999377'}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => { setMouse('link', true) }}
                onMouseLeave={() => { setMouse('link', false) }}
            >
                <h2>Jetzt teilnehmen</h2>
            </a>
        </div>

    )

}