import React from "react"
import Section from "../../container/section"
import BigButton from "../../buttons/bigButton/bigButton"
import TextFlow from "./textFlow"
import style from "./footer.module.scss"
import AllSupporter from "../../Supporter/allSupporter"
import { Link } from "gatsby"
import useMouse from "../Mouse/hooks/useMouse"

export default function Footer({ title }) {
  const { setMouse } = useMouse()
  return (
    <div>
      {title !== "OurSupporters" && (
        <React.Fragment>
          <Section backgroundColor="lila">
            <div style={{ padding: "200px 0 50px 0" }}>
              <h6>SUPPORTER</h6>
              <h2>
                Ohne Euch wäre diese Aktion nicht möglich.
                <span style={{ color: "white" }}>Danke.</span>
              </h2>
            </div>
          </Section>
          <Section backgroundColor="lila" type={"full"}>
            <AllSupporter></AllSupporter>
          </Section>
          <TextFlow></TextFlow>
        </React.Fragment>
      )}

      <Section backgroundColor="red">
        <div style={{ padding: "50px 0" }}>
          <h1 className={"text-white"}>GET IN TOUCH WITH FRIDA</h1>
        </div>
      </Section>

      <BigButton></BigButton>

      <Section backgroundColor="red">
        <div className={style.sub}>
          <a
            className={style.schwan}
            href="http://schwan-communications.com/"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => {
              setMouse("link", true)
            }}
            onMouseLeave={() => {
              setMouse("link", false)
            }}
          >
            <p>© 2020 Schwan Communications</p>
          </a>

          <Link
            className={style.impressum}
            to={"/impressum"}
            onMouseEnter={() => {
              setMouse("link", true)
            }}
            onMouseLeave={() => {
              setMouse("link", false)
            }}
          >
            <p>Impressum & Datenschutz</p>
          </Link>
          <Link
            className={style.impressum}
            to={"/agb"}
            onMouseEnter={() => {
              setMouse("link", true)
            }}
            onMouseLeave={() => {
              setMouse("link", false)
            }}
          >
            <p>AGB</p>
          </Link>
        </div>
      </Section>
    </div>
  )
}
