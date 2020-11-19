import React from "react"

const BlockContent = require("@sanity/block-content-to-react")

const RichText = props => {
  const { content } = props
  return <BlockContent blocks={content} />
}

export default RichText
