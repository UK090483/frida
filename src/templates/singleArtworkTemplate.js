import React from "react"
import Layout from "../components/generic/layout/layout"
import SEO from "../components/generic/seo/seo"
import SingleArtwork from "../components/artworks/singleArtwork/singleArtwork"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import Header from "../components/generic/header/header"
import Kreutz from "../assets/Menu_Kreutz_black.svg"
import { setMouse } from "../components/generic/Mouse/mouseRemote"
import { Link } from "gatsby"
import { graphql } from "gatsby"

export default function SingleArtworkTemplate(props) {
  const { data } = props
  const artwork = data.artwork
  const relatedArtworks = data.relatedArtworks.nodes
  const randomArtworks = data.randomArtworks.nodes

  const quotes = data.quotes.nodes
  const shopifyProduct = data.shopifyProduct

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => {
        return (
          <Wrap
            modal={modal}
            pathname={props.location.pathname}
            artwork={artwork}
          >
            <Header title={artwork ? artwork.artistName : ""} color="lila">
              <Link
                style={{ minWidth: 40, pointerEvents: "all" }}
                to={modal ? closeTo : "/"}
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
                  style={{ cursor: "none", maxWidth: 44 }}
                />
              </Link>
            </Header>
            <SingleArtwork
              isModal={true}
              artwork={artwork}
              relatedArtworks={relatedArtworks}
              randomArtworks={randomArtworks}
              shopifyProduct={shopifyProduct}
              quotes={quotes}
            />
          </Wrap>
        )
      }}
    </ModalRoutingContext.Consumer>
  )
}

const Wrap = ({ modal, children, pathname, artwork }) => {
  return !modal ? (
    <Layout header={""}>
      <SEO
        title={artwork.artistName}
        description={artwork.description}
        artwork={artwork}
        path={pathname}
      />
      {children}
    </Layout>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  )
}

export const query = graphql`
  query(
    $artistId: String!
    $uuid: String!
    $ranNum: Float!
    $shopify_handle: String!
  ) {
    shopifyProduct: shopifyProduct2(handle: { eq: $shopify_handle }) {
      variants {
        id
        availableForSale
        quantityAvailable
        price
        selectedOptions {
          name
          value
        }
        image {
          id
        }
      }
      images {
        id
      }
    }

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

    quotes: allFridaQuote(filter: { artworkUuid: { eq: $uuid } }) {
      nodes {
        id
        quote
        author
        image
        subtitle
      }
    }

    artwork: fridaArtwork(uuid: { eq: $uuid }) {
      uuid
      slug
      artistDescription
      artistWebLink
      instagramLink
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
      shopify_handle
      image {
        imageAssetId
      }
    }
  }
`
