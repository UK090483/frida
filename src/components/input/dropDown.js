import React, { useState } from "react"
import style from "./dropDown.module.scss"
import Flip from "react-reveal/Flip"
import useMouse from "../Mouse/hooks/useMouse"

export default function Input({
  label = "no label",
  options,
  open,
  setOpen,
  setFilter,
  filterName,
}) {
  // const [open, setOpen] = useState(false);
  const [selfActive, setSelfActive] = useState(false)
  const { setMouse } = useMouse()

  const setActive = i => {
    setSelfActive(i)
    setFilter(filterName, i)
  }

  return (
    <React.Fragment>
      <button
        className={`${style.root} ${open ? style.active : ""}`}
        onMouseEnter={() => {
          setMouse("link", true)
        }}
        onMouseLeave={() => {
          setMouse("link", false)
        }}
      >
        <div
          onClick={() => {
            open ? setOpen(false) : setOpen(label)
          }}
          className={style.label}
        >
          {label} {selfActive ? " : " + selfActive : ""}
        </div>
        <Flip
          top
          cascade
          when={open}
          unmountOnExit={true}
          mountOnEnter={true}
          duration={1000}
        >
          <div className={style.options}>
            <div
              className={style.option}
              onClick={() => {
                setActive(false)
                setOpen(false)
              }}
            >
              {" "}
              {"Kein Filter"}{" "}
            </div>
            {options.map(option => (
              <div
                key={option.value}
                className={style.option}
                onClick={() => {
                  setActive(option.label)
                  setOpen(false)
                }}
              >
                {" "}
                {option.label}{" "}
              </div>
            ))}
          </div>
        </Flip>
      </button>
    </React.Fragment>
  )
}
