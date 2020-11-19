import React from "react"
import Button from "../components/buttons/button"

export default function storyblock(props) {
  const { label, bgColor, link, align } = props
  const type = link ? "link" : "externalLink"

  // const linkUrl =
  //   link.linktype === "story" ? link.cached_url.replace("pages", "") : link.url
  return (
    <Button
      label={label}
      backgroundColor={bgColor}
      type={type}
      link={link}
      align={align}
    />
  )
}
