import React from "react"
import Layout from "../components/generic/layout/layout"
import SEO from "../components/seo"
import SingleArtwork from "../components/artworks/singleArtwork/singleArtwork"

export default function SingleArtworkTemplate(props) {
  const { pageContext } = props
  const { content: artwork } = pageContext

  return (
    <Layout title={artwork.artistName} color={"lila"}>
      <SEO title={artwork.artistName} />
      {/* <Section> */}
      <SingleArtwork artwork={artwork}></SingleArtwork>
      {/* </Section> */}
    </Layout>
  )
}
