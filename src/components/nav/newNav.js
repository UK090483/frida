import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Burger from "../../assets/Menu_Burger.svg"
import BigButton from "../buttons/bigButton"
import Header from "../header/header"
import Kreutz from "../../assets/Menu_Kreutz.svg"
import Fade from "react-reveal/Fade"
import useMouse from "../Mouse/hooks/useMouse"
import { motion, useAnimation } from "framer-motion"

import style from "./oldnav.module.scss"

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [counter, setCounter] = useState(false)
  const { setMouse } = useMouse()

  const RootControl = useAnimation()
  const BlackCircleControl1 = useAnimation()
  const BlackCircleControl2 = useAnimation()
  const BigButtonsControl = useAnimation()

  useEffect(() => {
    return () => {
      document.querySelector("html").style.overflow = "auto"
    }
  }, [])

  const handleMenu = () => {
    if (open) {
      setOpen(!open)
      animateOut()
      document.querySelector("html").style.overflow = "auto"
    } else {
      animateIn()
      document.querySelector("html").style.overflow = "hidden"
      setOpen(!open)
      setCounter(true)
    }
  }

  const animateIn = () => {
    RootControl.start({ opacity: 1 })
    BlackCircleControl1.start({ scale: 40, transition: { duration: 0.5 } })
    BlackCircleControl2.start({
      scale: 40,
      y: 200,
      transition: { duration: 0.3 },
    })
    BigButtonsControl.start({ y: 0, transition: { delay: 0.4 } })
  }
  const animateOut = () => {
    RootControl.start({ opacity: 0 })
    BlackCircleControl1.start({ scale: 0 })
    BlackCircleControl2.start({ scale: 0, y: 0 })
    BigButtonsControl.start({ y: "100%" })
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

      <motion.div
        className={`${style.root}`}
        initial={{ opactity: 0 }}
        animate={RootControl}
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <motion.div
          className={style.aniCircle1}
          animate={BlackCircleControl1}
        ></motion.div>
        <motion.div
          className={style.aniCircle2}
          animate={BlackCircleControl2}
        ></motion.div>

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
        {/* <h1>Bla</h1> */}

        <motion.div className={style.linksRoot}>
          {fridaLink("/ausstellung/", "AUSSTELLUNG")}
          {fridaLink("/teilnehmen/", "TEILNEHMEN")}
          {fridaLink("/unterstützen/", "UNTERSTÜTZEN")}
          {fridaLink("/about/", "WER IST FRIDA?")}
          {fridaLink("/kontakt/", "KONTAKT")}
        </motion.div>

        <motion.div
          style={{ position: "fixed", bottom: 0, width: "100%" }}
          initial={{ y: "100%" }}
          animate={BigButtonsControl}
        >
          <BigButton></BigButton>
        </motion.div>
      </motion.div>
    </div>
  )
}
