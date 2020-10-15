import React from "react"
import Artworks from "../components/artworks"
import SbEditable from "storyblok-react"

export default function ArtworksBlock(props) {
  return (
    <SbEditable content={props.blok}>
      <Artworks
        filter={props.blok.Filter}
        infinite={props.blok.Infinite_Scroll}
      ></Artworks>
    </SbEditable>
  )
}
