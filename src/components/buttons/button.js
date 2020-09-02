import React from "react"
import { Link } from "gatsby"
import style from "./button.module.scss"
import useMouse from "../Mouse/hooks/useMouse"

export default function Buttons({
  label,
  link,
  size = "default",
  type = "link",
  backgroundColor = "white",
  onClick = () => {},
}) {
  const { setMouse } = useMouse()

  return (
    <React.Fragment>
      {type === "link" && (
        <Link className={`${style.root} ${style[size]}`} to={link}>
          <div
            className={`${style.inner} ${style[backgroundColor]}`}
            onMouseEnter={() => {
              setMouse("link", true)
            }}
            onMouseLeave={() => {
              setMouse("link", false)
            }}
          >
            {label}
          </div>
        </Link>
      )}
      {type === "externalLink" && (
        <a
          className={`${style.root} ${style[size]}`}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={`${style.inner} ${style[backgroundColor]}`}
            onMouseEnter={() => {
              setMouse("link", true)
            }}
            onMouseLeave={() => {
              setMouse("link", false)
            }}
          >
            {label}
          </div>
        </a>
      )}
      {type === "clickButton" && (
        <div
          className={style.root}
          onClick={onClick}
          onMouseEnter={() => {
            setMouse("link", true)
          }}
          onMouseLeave={() => {
            setMouse("link", false)
          }}
        >
          <div className={`${style.inner} ${style[backgroundColor]}`}>
            {label}
          </div>
        </div>
      )}
    </React.Fragment>
  )
}
