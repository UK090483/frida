import React from "react"
import styled from "styled-components"

import Head from "./Head/head"
// import ArtworkQuote from "../../Quote/ArtworkQuote/ArtworkQuote"
import RelatedArtworks from "./relatedArtworks/relatedArtworks"
import ArtworkQuote from "~components/Quote/ArtworkQuote/ArtworkQuote"

export default function Artworks({
  artwork,
  relatedArtworks,
  randomArtworks,
  quotes,
  shopifyProduct,
}) {
  const { artistDescription, description } = artwork

  return (
    <Root>
      <Head artwork={artwork} shopifyProduct={shopifyProduct} />
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
      {relatedArtworks.length > 0 && (
        <RelatedArtworks
          artworks={relatedArtworks}
          header={"Weitere Werke des Künstlers"}
          color={"white"}
        />
      )}
      {quotes.map(quote => (
        <ArtworkQuote key={quote.id} quote={quote} />
      ))}
      <RelatedArtworks
        artworks={randomArtworks}
        header={"Diese Werke könnten Dir auch gefallen"}
        color={"pink"}
      />
      <Spacer />
    </Root>
  )
}

const Spacer = styled.div`
  height: 100px;
  background-color: ${({ theme }) => theme.colors.pink};
  @media ${({ theme }) => theme.device.laptopM} {
    height: 0;
  }
`

const TextSection = styled.div`
  padding: 50px 20px;
  max-width: 1000px;
  margin: 0 auto;
`
const Root = styled.div`
  p {
    font-size: 20px;
  }
`
