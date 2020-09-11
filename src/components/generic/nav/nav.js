import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Burger from "../../../assets/Menu_Burger.svg"
import BigButton from "../../buttons/bigButton"
import Header from "../header/header"
import Kreutz from "../../../assets/Menu_Kreutz.svg"
import Fade from "react-reveal/Fade"
import useMouse from "../Mouse/hooks/useMouse"

import style from "./nav.module.scss"

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [counter, setCounter] = useState(false)
  const { setMouse } = useMouse()

  useEffect(() => {
    return () => {
      document.querySelector("html").style.overflow = "auto"
    }
  }, [])

  const handleMenu = () => {
    if (open) {
      setOpen(!open)
      document.querySelector("html").style.overflow = "auto"
    } else {
      document.querySelector("html").style.overflow = "hidden"
      setOpen(!open)
      setCounter(true)
    }
  }

  const fridaLink = (link, label) => (
    <h1>
      <Link
        activeClassName={style.active}
        className={style.link}
        to={link}
        onMouseEnter={() => {
          setMouse("link", true)
        }}
        onMouseLeave={() => {
          setMouse("link", false)
        }}
      >
        {label}
      </Link>
    </h1>
  )

  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <div>
      <div
        className={style.icon}
        onMouseEnter={() => {
          setMouse("link", true)
          setMouse("color", true)
        }}
        onMouseLeave={() => {
          setMouse("link", false)
          setMouse("color", false)
        }}
        onClick={() => {
          handleMenu()
        }}
      >
        <Burger></Burger>
      </div>

      <div
        className={`${style.root} ${
          open ? style.active : counter && style.onClose
        }`}
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div className={style.aniCircle1}></div>
        <div className={style.aniCircle2}></div>

        {open && (
          <Header color="#F5C5D9">
            <div></div>{" "}
            <a className={style.icon} onClick={() => handleMenu()}>
              <Kreutz
                onMouseEnter={() => {
                  setMouse("link", true)
                }}
                onMouseLeave={() => {
                  setMouse("link", false)
                }}
              ></Kreutz>
            </a>
          </Header>
        )}

        <Fade right cascade when={open}>
          <div className={style.linksRoot}>
            {fridaLink("/ausstellung/", "AUSSTELLUNG")}
            {fridaLink("/teilnehmen/", "TEILNEHMEN")}
            {fridaLink("/unterstützen/", "UNTERSTÜTZEN")}
            {fridaLink("/about/", "WER IST FRIDA?")}
            {fridaLink("/kontakt/", "KONTAKT")}
          </div>
        </Fade>

        <Fade bottom when={open} delay={500}>
          <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
            <BigButton></BigButton>
          </div>
        </Fade>
      </div>
    </div>
  )
}
