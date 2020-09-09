import React, { useState } from "react"
import style from "./tab.module.scss"
import xss from "xss"
import InstagramIcon from "../../../../assets/instagram_icon.svg"
import LinkIcon from "../../../../assets/link_icon.svg"
import useMouse from "../../../Mouse/hooks/useMouse"

export default function Tab({ text1, text2, instagramLink, artistWebLink }) {
  const [active, setActive] = useState(true)
  const [firstRender, setFirstRender] = useState(true)
  const { setMouse } = useMouse()

  const handleClick = () => {
    if (firstRender) {
      setFirstRender(false)
    }
    setActive(!active)
  }

  return (
    <div className={style.root}>
      <div className={style.controls}>
        <div
          className={style.button}
          onClick={() => {
            handleClick()
          }}
        >
          <div
            onMouseEnter={() => {
              setMouse("link", true)
            }}
            onMouseLeave={() => {
              setMouse("link", false)
            }}
            className={active ? style.active : ""}
          >
            Künstler Info
          </div>
          <div
            onMouseEnter={() => {
              setMouse("link", true)
            }}
            onMouseLeave={() => {
              setMouse("link", false)
            }}
            className={!active ? style.active : ""}
          >
            Kunstwerk Info
          </div>
        </div>
        <div className={style.linkIconWrap}>
          {artistWebLink && (
            <a
              target="_blank"
              rel="noreferrer"
              href={artistWebLink}
              className={style.linkIcon}
              onMouseEnter={() => {
                setMouse("link", true)
              }}
              onMouseLeave={() => {
                setMouse("link", false)
              }}
            >
              <LinkIcon></LinkIcon>
            </a>
          )}
          {instagramLink && (
            <a
              target="_blank"
              rel="noreferrer"
              href={instagramLink}
              className={style.linkIcon}
              onMouseEnter={() => {
                setMouse("link", true)
              }}
              onMouseLeave={() => {
                setMouse("link", false)
              }}
            >
              <InstagramIcon></InstagramIcon>
            </a>
          )}
        </div>
      </div>

      {active && (
        <div
          className={`${style.text} ${!firstRender ? style.textActive : ""}`}
          dangerouslySetInnerHTML={{ __html: xss(text1) }}
        ></div>
      )}
      {!active && (
        <div
          className={`${style.text} ${!firstRender ? style.textActive : ""}`}
          dangerouslySetInnerHTML={{ __html: xss(text2) }}
        ></div>
      )}
    </div>
  )
}
