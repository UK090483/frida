import React, { useState } from "react"
import style from "./dropDown.module.scss"
import Flip from "react-reveal/Flip"
import { setMouse } from "../../../components/generic/Mouse/mouseRemote"
import styled from "styled-components"

export default function Input({
  label = "no label",
  options,
  open,
  setOpen,
  setFilter,
  filterName,
  fixedHeight = false,
}) {
  // const [open, setOpen] = useState(false);
  const [selfActive, setSelfActive] = useState(false)

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
        <Label
          onClick={() => {
            open ? setOpen(false) : setOpen(label)
          }}
          // className={style.label}
        >
          {label} {selfActive ? " : " + selfActive : ""}
        </Label>
        <Flip
          top
          cascade
          when={open}
          unmountOnExit={true}
          mountOnEnter={true}
          duration={500}
        >
          <div
            className={`${style.options} ${
              fixedHeight ? style.fixedHeight : ""
            } `}
          >
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

const Label = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 18px;
`
