import React from "react"
import style from "./button.module.scss"
import useMouse from '../Mouse/hooks/useMouse'

export default function Buttons({ label, link }) {

    const { setMouse } = useMouse()

    return (
        <a
            className={style.root}
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            <div
                className={style.inner}
                onMouseEnter={() => { setMouse('link', true) }}
                onMouseLeave={() => { setMouse('link', false) }}

            >{label}</div>
        </a>
    )
}
