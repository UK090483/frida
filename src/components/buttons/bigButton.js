import React from 'react';
import style from './bigButtons.module.scss';



export default function BigButtons({ label, link }) {

    return (

        <div className={style.root} >
            <BigButton label={'Instagram'} link={'https://www.instagram.com/schwan_communications/'}></BigButton>
            <BigButton label={'Facebook'} link={'https://www.facebook.com/schwancomm/'}></BigButton>
        </div>

    )

}



function BigButton({ label, link }) {

    return (

        <a target="_blank" rel="noopener noreferrer" href={link} className={style.button} >
            {label}
        </a>

    )

}