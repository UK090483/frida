import React from "react"
import DSection from "../components/container/section"
import Components from "./components.js"
import SbEditable from "storyblok-react"

export default function Section(props) {
  const { type, body, color } = props.blok

  return (
    <SbEditable content={props.blok}>
      <DSection type={type} backgroundColor={color}>
        <React.Fragment>
          {body.map(blok =>
            React.createElement(Components(blok.component), {
              key: blok._uid,
              blok: blok,
            })
          )}
        </React.Fragment>
      </DSection>
    </SbEditable>
  )
}
