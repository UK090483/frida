import React, { useState } from "react"
import style from "./tab.module.scss"
import xss from "xss"

export default function Tab({ text1, text2 }) {
  const [active, setActive] = useState(true)
  const [firstRender, setFirstRender] = useState(true)

  const handleClick = () => {
    if (firstRender) {
      setFirstRender(false)
    }
    setActive(!active)
  }

  return (
    <div className={style.root}>
      <div
        className={style.button}
        onClick={() => {
          handleClick()
        }}
      >
        <div className={active ? style.active : ""}>Künstler Info</div>
        <div className={!active ? style.active : ""}>Kunstwerk Info</div>
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