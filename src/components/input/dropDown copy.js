import React, { useState } from "react"
import style from "./dropDown.module.scss"
// import Flip from "react-reveal/Flip"
import useMouse from "../generic/Mouse/hooks/useMouse"
import { motion, AnimatePresence } from "framer-motion"
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
        <MList
          options={options}
          open={open}
          setActive={setActive}
          setOpen={setOpen}
          fixedHeight={fixedHeight}
        >
          {" "}
        </MList>
      </button>
    </React.Fragment>
  )
}

const MList = ({ options, open, setActive, setOpen, fixedHeight }) => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        when: "beforeChildren",
        staggerChildren: 0.01,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    exit: {
      opacity: 0,
    },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -10 },
  }

  return (
    <React.Fragment>
      <div
        className={`${style.options} ${fixedHeight ? style.fixedHeight : ""} `}
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={list}
              exit={{ opacity: 0 }}
            >
              <motion.div
                variants={item}
                className={style.option}
                onClick={() => {
                  setActive(false)
                  setOpen(false)
                }}
              >
                {"Kein Filter"}
              </motion.div>
              {options.map(option => (
                <motion.div
                  variants={item}
                  exit={{ opacity: 0 }}
                  key={option.value}
                  className={style.option}
                  onClick={() => {
                    setActive(option.label)
                    setOpen(false)
                  }}
                >
                  {option.label}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </React.Fragment>
  )
}
