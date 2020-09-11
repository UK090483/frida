import React, { useState, useEffect } from "react"
import style from "./teilnehmen.module.scss"
import useMouse from "../generic/Mouse/hooks/useMouse"

export default function TeilnehmenCTA({ link }) {
  const [show, setShow] = useState(false)
  const { setMouse } = useMouse()

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 500)
  }, [])

  return (
    <div className={`${style.root} ${!show ? "" : style.show}`}>
      <a
        className={`${style.link}`}
        href={link}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => {
          setMouse("link", true)
        }}
        onMouseLeave={() => {
          setMouse("link", false)
        }}
      >
        <h2>Jetzt teilnehmen</h2>
      </a>
    </div>
  )
}
