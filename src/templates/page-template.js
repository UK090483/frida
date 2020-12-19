import React from "react"
import Page from "../storyblock/page"
export default function PageTemplate(props) {
  return (
    <Page
      tree={{
        title: props.pageContext.title,
        content: props.pageContext.content,
      }}
    />
  )
}
