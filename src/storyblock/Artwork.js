import React from "react"
import SingleArtwork from "../components/artworks2/singleArtwork/singleArtwork"
import getArtwork from "../components/artworks2/helper/getArtwork"
export default function storyblock(props) {
  return <SingleArtwork artwork={getArtwork({ content: props.blok })} />
}
