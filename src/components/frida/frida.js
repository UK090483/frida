import React from 'react';
import style from './frida.module.scss';

export default function Frida({ text, textColor }) {

    return (

        <React.Fragment>
            #Meet<span className={style.root} style={{ color: textColor || 'white' }}>{text || 'Frida'}</span>
        </React.Fragment>

    )

}