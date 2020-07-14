import React, { useContext, useEffect, useRef } from 'react';
import UserContext from '../userContext/userContext';
import style from './message.module.scss';
export default function Message() {

    const context = useContext(UserContext);
    const { message, setMessage } = context;

    let TimerRef = useRef()

    useEffect(() => {
        if (TimerRef.current) {
            clearTimeout(TimerRef.current)
        }
        TimerRef.current = setTimeout(() => {
            setMessage(null)
        }, 2000)

    }, [message]);
    return (

        <div className={`${style.root} ${message ? style.active : ''}`}>

            {message}
        </div>

    )

}