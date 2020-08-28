import React from "react"
import style from "./posterGrid.module.scss"

export default function PosterGrid({ children }) {
  return <div className={style.root}>{children}</div>
}
