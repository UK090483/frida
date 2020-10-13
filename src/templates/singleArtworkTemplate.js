import React from "react"
import Layout from "../components/generic/layout/layout"
import SEO from "../components/seo"
import SingleArtwork from "../components/artworks2/singleArtwork/singleArtwork"
// import Section from "../components/container/section"
import { graphql } from "gatsby"
import getArtwork from "../components/artworks2/helper/getArtwork"

export default function SingleArtworkTemplate({ data }) {
  const artwork = parseArtwork(data.allStoryblokEntry.edges[0].node)

  //   console.log(data.allStoryblokEntry.edges[0].node)

  function parseArtwork(artwork) {
    const t = {
      content: { ...JSON.parse(artwork.content) },
    }
    t.id = artwork.id
    return getArtwork(t)
  }

  return (
    <Layout title={artwork.artistName} color={"lila"}>
      <SEO title={artwork.artistName} />
      {/* <Section> */}
      <SingleArtwork artwork={artwork}></SingleArtwork>
      {/* </Section> */}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allStoryblokEntry(
      filter: { full_slug: { regex: "/artwork/" }, slug: { eq: $slug } }
    ) {
      edges {
        node {
          id
          content
        }
      }
    }
  }
`
