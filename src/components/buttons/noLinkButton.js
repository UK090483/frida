import React from "react"

import style from "./button.module.scss"

export default function buttons({ label, onClick }) {
  return (
    <div className={style.root} onClick={onClick}>
      <div className={style.inner}>{label}</div>
    </div>
  )
}
