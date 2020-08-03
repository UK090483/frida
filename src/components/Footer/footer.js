import React from "react"
import Section from "../container/section"
import BigButton from "../buttons/bigButton"
import TextFlow from "./textFlow"
import style from "./footer.module.scss"
import AllSupporter from "../Supporter/allSupporter"
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
              <h4>SUPPORTER</h4>
              <h2>
                Ohne Euch wäre diese Aktion nicht möglich.{" "}
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
          <p>© 2020 Schwan Studio</p>
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
            <p>Impressum</p>
          </Link>
        </div>
      </Section>
    </div>
  )
}
