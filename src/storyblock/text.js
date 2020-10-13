import React from "react"
import RichTextResolver from "../../node_modules/storyblok-js-client/dist/rich-text-resolver.es"
import SbEditable from "storyblok-react"
export default function storyblock(props) {
  const { text } = props.blok
  const resolver = new RichTextResolver()
  const html = resolver.render(text)

  return (
    <SbEditable content={props.blok}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </SbEditable>
  )
}
