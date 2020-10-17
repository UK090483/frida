import React, { useState } from "react"
// import style from "./dropDown.module.scss"
import styled from "styled-components"
import useMouse from "../generic/Mouse/hooks/useMouse"
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
  const { setMouse } = useMouse()

  const setActive = i => {
    setSelfActive(i)
    setFilter(filterName, i)
  }

  return (
    <React.Fragment>
      <Root
        active={open}
        // className={`${style.root} ${open ? style.active : ""}`}
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
        <MList
          options={options}
          open={open}
          setActive={setActive}
          setOpen={setOpen}
          fixedHeight={fixedHeight}
        >
          {" "}
        </MList>
      </Root>
    </React.Fragment>
  )
}

const Option = styled.div`
  transform: ${({ open }) =>
    open ? "translate3d(0, 0, 0)" : "translate3d(0, -100vw, 0)"};
  height: 50px;
  width: 300px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.pink};
  align-items: center;
  color: white;
  padding-left: 20px;
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ index }) => index * -1};
  transition: background-color 0.3s, color 0.3s, padding-left 0.5s, opacity 0.3s,
    transform 0.3s ${({ index }) => index * 0.02 + "s"};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.pink};
    padding-left: 40px;
  }
`
const Options = styled.div`
  overflow: hidden;
`
const Label = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
`
const Root = styled.button`
  width: 300px;
  margin: 0 auto;
  height: 50px;
  max-height: 50px;
  position: relative;
  z-index: 10;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.pink};
  border: none;
  border-bottom: ${({ theme }) => theme.colors.pink} 3px solid;
  outline: none;
  padding: 0;
  margin: 0 20px;
  font-size: 17px;
  /* border: red solid 1px; */
  cursor: none;
  z-index: ${({ active }) => (active ? 10 : 0)};
`

const MList = ({ options, open, setActive, setOpen, fixedHeight }) => {
  return (
    <React.Fragment>
      <Options>
        <Option
          open={open}
          index={0}
          onClick={() => {
            setActive(false)
            setOpen(false)
          }}
        >
          {"Kein Filter"}
        </Option>
        {options.map((option, index) => (
          <Option
            open={open}
            index={index + 1}
            key={option.value}
            onClick={() => {
              setActive(option.label)
              setOpen(false)
            }}
          >
            {option.label}
          </Option>
        ))}
      </Options>
    </React.Fragment>
  )
}
