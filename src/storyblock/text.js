import React, { useMemo } from "react"
// import RichTextResolver from "../../node_modules/storyblok-js-client/dist/rich-text-resolver.es"
// import SbEditable from "storyblok-react"
export default function Text(props) {
  const { text } = props.blok
  // const resolver = useMemo(() => new RichTextResolver(), [])
  // const html = resolver.render(text)
  return (
    <div></div>
    // <SbEditable content={props.blok}>
    //   <div dangerouslySetInnerHTML={{ __html: html }} />
    // </SbEditable>
  )
}
