import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SingleArtwork from "../components/artworks/singleArtwork/singleArtwork"
import Section from "../components/container/section"
import { graphql } from "gatsby"
import getArtwork from "../components/artworks/helper/getArtwork"

export default function SingleArtworkTemplate({ data }) {
  const artwork = getArtwork(data.fridaArtwork)

  return (
    <Layout title={artwork.artistName}>
      <SEO title="aboute" />
      <Section>
        {data.fridaArtwork && <SingleArtwork artwork={artwork}></SingleArtwork>}
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    fridaArtwork(slug: { eq: $slug }) {
      artistDescription
      artistEmail
      artistName
      artworkDescription
      artworkName
      availability
      height
      id
      instagramLink
      medium
      price
      stil
      width
      cdn {
        url
        width
        height
      }
      images {
        local {
          childImageSharp {
            fluid(maxWidth: 600) {
              src
              srcSet
            }
            original {
              height
              width
            }
          }
        }
      }
    }
  }
`
