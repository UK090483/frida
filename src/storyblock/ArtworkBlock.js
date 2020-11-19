import React from "react"
import Artworks from "../components/artworks"

export default function ArtworksBlock(props) {
  const { preview } = props
  return <Artworks filter={!preview} infinite={!preview} />
}
