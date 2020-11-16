import React from "react"
import Layout from "../components/generic/layout/layout"
import SEO from "../components/seo"
import SingleArtwork from "../components/artworks/singleArtwork/singleArtwork"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import Header from "../components/generic/header/header"
import Kreutz from "../assets/Menu_Kreutz.svg"
import { setMouse } from "../components/generic/Mouse/mouseRemote"
import { Link } from "gatsby"
import { graphql } from "gatsby"

export default function SingleArtworkTemplate(props) {
  const { pageContext, data } = props
  const { content: artwork } = pageContext

  const relativeArtworks = data.allCSanityFridaArtworks.nodes

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => {
        return (
          <div>
            {modal ? (
              <React.Fragment>
                <Header
                  title={artwork ? artwork.artistName : ""}
                  color="lila"
                  link={false}
                >
                  <Link
                    style={{ width: 40, pointerEvents: "all" }}
                    to={closeTo}
                    state={{
                      noScroll: true,
                    }}
                  >
                    <Kreutz
                      onMouseEnter={() => {
                        setMouse("link", true)
                      }}
                      onMouseLeave={() => {
                        setMouse("link", false)
                      }}
                    />
                  </Link>
                </Header>
                <SingleArtwork
                  isModal={true}
                  artwork={artwork}
                  relativeArtworks={relativeArtworks}
                ></SingleArtwork>
              </React.Fragment>
            ) : (
              <Layout>
                <SEO title={artwork.artistName} />
                <Header
                  title={artwork ? artwork.artistName : ""}
                  color="lila"
                  link={false}
                >
                  <Link
                    style={{ width: 40, pointerEvents: "all" }}
                    to={"/"}
                    state={{
                      noScroll: true,
                    }}
                  >
                    <Kreutz
                      onMouseEnter={() => {
                        setMouse("link", true)
                      }}
                      onMouseLeave={() => {
                        setMouse("link", false)
                      }}
                    />
                  </Link>
                </Header>
                <SingleArtwork
                  isModal={false}
                  artwork={artwork}
                  relativeArtworks={relativeArtworks}
                ></SingleArtwork>
                {/* <SingleArtwork
                  artwork={artwork}
                  relativeArtworks={relativeArtworks}
                ></SingleArtwork> */}
              </Layout>
            )}
          </div>
        )
      }}
    </ModalRoutingContext.Consumer>
  )
}

export const query = graphql`
  query($artistId: String!) {
    allCSanityFridaArtworks(filter: { artistId: { eq: $artistId } }) {
      nodes {
        slug
        image {
          fluid100 {
            base64
            aspectRatio
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
      }
    }
  }
`
