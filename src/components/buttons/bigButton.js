import React from "react"
import style from "./bigButtons.module.scss"
import useMouse from '../Mouse/hooks/useMouse';

export default function BigButtons({ label, link }) {

  const { setMouse } = useMouse();

  return (
    <div
      className={style.root}
      onMouseEnter={() => {
        setMouse('link', true)

      }}
      onMouseLeave={() => {
        setMouse('link', false)

      }}
    >
      <BigButton
        label={"Instagram"}
        link={"https://www.instagram.com/meetfrida.art/"}
      ></BigButton>
      <BigButton
        label={"Facebook"}
        link={"https://www.facebook.com/meetfrida.art"}
      ></BigButton>
    </div>
  )
}

function BigButton({ label, link }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className={style.button}
    >
      {label}
    </a>
  )
}
