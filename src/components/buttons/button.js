import React from "react"
import { Link } from "gatsby"
import style from "./button.module.scss"
import useMouse from '../Mouse/hooks/useMouse'

export default function Buttons({ label, link }) {

  const { setMouse } = useMouse()

  return (
    <Link
      className={style.root}
      to={link}
    >
      <div
        className={style.inner}
        onMouseEnter={() => { setMouse('link', true) }}
        onMouseLeave={() => { setMouse('link', false) }}

      >{label}</div>
    </Link>
  )
}
