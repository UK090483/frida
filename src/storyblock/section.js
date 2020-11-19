import React from "react"
import DSection from "../components/container/section"
import Components from "./components.js"

export default function Section(props) {
  const { type, bgColor, content, bottomSpace, topSpace } = props

  return (
    <DSection
      topSpace={topSpace}
      bottomSpace={bottomSpace}
      type={type}
      backgroundColor={bgColor || "default"}
    >
      {content &&
        content.map(blok =>
          React.createElement(Components(blok._type), {
            ...blok,
            key: blok._key,
          })
        )}
    </DSection>
  )
}
