import React from "react"
import styled from "styled-components"
import ArtikelList from "./ArtikelList/ArtikelList"
import RelatedArtworks from "~components/artworks/singleArtwork/relatedArtworks/relatedArtworks"

export default function CheckOut({ closeTo, data }) {
  return (
    <Root>
      <div data-color="white">
        <Header>Warenkorb</Header>
        <ArtikelList />
      </div>
      <RelatedArtworks
        header={"Diese Kunstwerke Könnten Dir Auch gefallen"}
        artworks={data.allFridaArtwork.nodes}
        color={"pink"}
      />
    </Root>
  )
}

const Header = styled.h3`
  text-align: center;
  padding-bottom: 100px;
`

const Root = styled.div`
  width: 100%;
  padding-top: 150px;
`
