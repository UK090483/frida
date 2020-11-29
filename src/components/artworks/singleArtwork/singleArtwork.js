import React from "react"
import styled from "styled-components"

import Head from "./Head/head"
// import ArtworkQuote from "../../Quote/ArtworkQuote/ArtworkQuote"
import RelatedArtworks from "./relatedArtworks/relatedArtworks"

export default function Artworks({
  artwork,
  relatedArtworks,
  randomArtworks,
  setHeaderArtworkInfo,
  isModal,
}) {
  const { artistDescription, description } = artwork

  return (
    <Root>
      <Head artwork={artwork} setHeaderArtworkInfo={setHeaderArtworkInfo} />
      {description && (
        <TextSection>
          <h5>Über das Kunstwerk</h5>
          <p>{description}</p>
        </TextSection>
      )}

      {artistDescription && (
        <TextSection>
          <h5>Über den Künstler</h5>
          <p>{artistDescription}</p>
        </TextSection>
      )}

      {/* <ArtworkQuote /> */}

      <RelatedArtworks
        artworks={relatedArtworks}
        header={"Weitere Werke des Künstlers"}
        color={"white"}
      />
      <RelatedArtworks
        artworks={randomArtworks}
        header={"Diese Werke könnten Dir auch gefallen"}
        color={"pink"}
      />
    </Root>
  )
}

const TextSection = styled.div`
  padding: 50px 20px;
  max-width: 1000px;
  margin: 0 auto;
`
const Root = styled.div`

p {
    font-size: 20px;
    
  }
  /* padding: 100px 20px 60px 20px;
  height: 100vh;
  overflow: auto;
  @media ${({ theme }) => theme.device.laptop} {
    padding: 100px 30px 30px 30px;
  } */
`
