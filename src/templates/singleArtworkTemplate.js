import React from "react"
import Layout from "../components/generic/layout/layout"
import SEO from "../components/seo/seo"
import SingleArtwork from "../components/artworks/singleArtwork/singleArtwork"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import Header from "../components/generic/header/header"
import Kreutz from "../assets/Menu_Kreutz.svg"
import { setMouse } from "../components/generic/Mouse/mouseRemote"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import ArtworkHeaderInfo from "~components/artworks/headerInfo/headerInfo"

export default function SingleArtworkTemplate(props) {
  const { data } = props
  const artwork = data.artwork
  const relatedArtworks = data.relatedArtworks.nodes
  const randomArtworks = data.randomArtworks.nodes
  const [headerArtworkInfo, setHeaderArtworkInfo] = React.useState(false)

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
                  {headerArtworkInfo && <ArtworkHeaderInfo artwork={artwork} />}
                  <Link
                    style={{ minWidth: 40, pointerEvents: "all" }}
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
                  relatedArtworks={relatedArtworks}
                  randomArtworks={randomArtworks}
                  setHeaderArtworkInfo={setHeaderArtworkInfo}
                ></SingleArtwork>
              </React.Fragment>
            ) : (
              <Layout header={""}>
                <SEO
                  title={artwork.artistName}
                  path={props.location.pathname}
                  description={artwork.description}
                  artwork={artwork}
                />
                <Header
                  title={artwork ? artwork.artistName : ""}
                  color="lila"
                  link={false}
                >
                  {headerArtworkInfo && <ArtworkHeaderInfo artwork={artwork} />}
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
                  relatedArtworks={relatedArtworks}
                  randomArtworks={randomArtworks}
                  setHeaderArtworkInfo={setHeaderArtworkInfo}
                ></SingleArtwork>
              </Layout>
            )}
          </div>
        )
      }}
    </ModalRoutingContext.Consumer>
  )
}

export const query = graphql`
  query($artistId: String!, $uuid: String!, $ranNum: Float!) {
    relatedArtworks: allFridaArtwork(
      filter: { artistId: { eq: $artistId }, uuid: { ne: $uuid } }
    ) {
      nodes {
        slug
        availability
        artworkName
        artistName
        price
        banner
        image {
          imageAssetId
        }
      }
    }
    randomArtworks: allFridaArtwork(
      sort: { order: ASC, fields: ransortNumber }
      filter: { ransortNumber: { gt: $ranNum } }
      limit: 8
    ) {
      nodes {
        slug
        availability
        artworkName
        artistName
        price
        banner
        image {
          imageAssetId
        }
      }
    }

    artwork: fridaArtwork(uuid: { eq: $uuid }) {
      uuid
      slug
      artistDescription
      artistWebLink
      artistName
      artistId
      artworkName
      availability
      depth
      description
      height
      width
      price
      medium
      stil
      banner
      image {
        imageAssetId
      }
    }
  }
`
