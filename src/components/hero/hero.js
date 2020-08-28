import React from "react"
import Container from "../container/container"
import style from "./hero.module.scss"
import Section from "../container/section"

export default function Hero({ children, backgroundColor, height = "full" }) {
  return (
    <Section type="full" backgroundColor={backgroundColor}>
      <div className={`${style.root} ${style[height]}`}>
        <Container>{children}</Container>
      </div>
    </Section>
  )
}
