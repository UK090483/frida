import React, { useState } from 'react';


import style from './tab.module.scss'

export default function Tab({ text1, text2 }) {
    const [active, setActive] = useState(true);



    return (
        <div className={style.root}>

            <div className={style.button} onClick={() => { setActive(!active) }}>
                <div className={active ? style.active : ''} >Artist Info</div>
                <div className={!active ? style.active : ''} >Artwork Info</div>
            </div>

            {active && <div className={style.text} dangerouslySetInnerHTML={{ __html: text1 }}>
                {/* {text1} */}
            </div>}
            {!active && <div className={style.text} dangerouslySetInnerHTML={{ __html: text2 }}>
                {/* {text2} */}
            </div>}
        </div>
    )


}