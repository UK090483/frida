import React, { useState } from 'react';

import style from './tab.module.css'

export default function Tab({ text1, text2 }) {
    const [active, setActive] = useState(true);



    return (
        <div className={style.root}>

            <div className={style.button} onClick={() => { setActive(!active) }}>
                <div>Artist Info</div>
                <div>Artwork Info</div>
            </div>


            {active && <div className={style.text}>
                {text1}
            </div>}
            {!active && <div className={style.text}>
                {text2}
            </div>}
        </div>
    )


}