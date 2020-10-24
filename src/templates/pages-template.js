import React from "react"
import Components from "../storyblock/components"
export default function PageTemplate(pros) {
  const content = JSON.parse(pros.pageContext.content)
  return (
    <React.Fragment>
      {React.createElement(Components(content.component), {
        key: content._uid,
        blok: content,
      })}
    </React.Fragment>
  )
}
