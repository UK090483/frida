import React from "react"
import styled from "styled-components"
import ArtistLinks from "./ArtistLinks/artistLinks"
import Head from "./Head/head"
// import ArtworkQuote from "../../Quote/ArtworkQuote/ArtworkQuote"
import RelatedArtworks from "./relatedArtworks/relArtworks"
// import ArtworkQuote from "~components/Quote/ArtworkQuote/ArtworkQuote"

export default function SingleArtwork({
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
        <TextSection data-color={"white"}>
          <h5>Über das Kunstwerk</h5>
          <p>{description}</p>
        </TextSection>
      )}

      <TextSection data-color={"white"}>
        <h5>Über den Künstler</h5>
        {artistDescription && <p>{artistDescription}</p>}
        <ArtistLinks artwork={artwork} />
      </TextSection>

      {/* {quotes.map(quote => (
        <ArtworkQuote key={quote.id} quote={quote} />
      ))} */}
      {relatedArtworks.length > 0 && (
        <RelatedArtworks
          artworks={relatedArtworks}
          header={"Weitere Werke des Künstlers"}
          color={"white"}
        />
      )}
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
