import React from "react"
import btnstyle from "./Button.module.scss"

export default function components({
  disabled = false,
  label,
  onClick,
  style = {},
}) {
  return (
    <button
      style={style}
      onClick={onClick}
      className={`${btnstyle.button} ${disabled ? btnstyle.diabled : ""} `}
      disabled={disabled}
    >
      {label}
    </button>
  )
}
