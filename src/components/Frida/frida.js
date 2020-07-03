import React from 'react';
import './frida.css'

export default function Frida({ text, textColor }) {

    return (

        <>
            #Meet<span className='frida-span' style={{ color: textColor || 'white' }}>{text || 'Frida'}</span>
        </>

    )

}