import React, { useState } from 'react';
import style from './dropDown.module.scss';
import Flip from 'react-reveal/Flip';





export default function input({ label = 'no label', options, open, setOpen, setFilter }) {

    // const [open, setOpen] = useState(false);
    const [selfActive, setSelfActive] = useState(false);

    const setActive = (i) => {
        setSelfActive(i)
        setFilter(label, i)
    }


    return (
        <React.Fragment>
            <a className={`${style.root} ${open ? style.active : ''}`} >
                <div onClick={() => { open ? setOpen(false) : setOpen(label) }} className={style.label}>{label} {selfActive ? ' : ' + selfActive : ''}</div>
                <Flip top cascade when={open} unmountOnExit={true} mountOnEnter={true} duration={1000}>
                    <div className={style.options} >
                        <div className={style.option} onClick={() => { setActive(false); setOpen(false) }} > {'Kein Filter'} </div>
                        {options.map(option => (
                            <div key={option.value} className={style.option} onClick={() => { setActive(option.label); setOpen(false) }} > {option.label} </div>
                        ))}
                    </div>
                </Flip>
            </a>
        </React.Fragment>
    )

}