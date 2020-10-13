import React from "react"
import Button from "../components/buttons/button"
import SbEditable from "storyblok-react"
export default function storyblock(props) {
  const { text, color, link, align } = props.blok
  const type = link.linktype === "story" ? "link" : "externalLink"
  const linkUrl =
    link.linktype === "story" ? link.cached_url.replace("pages", "") : link.url
  return (
    <SbEditable content={props.blok}>
      <Button
        label={text}
        backgroundColor={color}
        type={type}
        link={linkUrl}
        align={align}
      />
    </SbEditable>
  )
}
