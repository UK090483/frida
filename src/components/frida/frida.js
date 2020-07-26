import React from "react"
import style from "./frida.module.scss"

export default function Frida({ text, textColor }) {
  return (
    <div className={style.root}>
      #Meet
      <span className={style.spanRoot} style={{ color: textColor || "white" }}>
        {text || "Frida"}
      </span>
    </div>
  )
}
