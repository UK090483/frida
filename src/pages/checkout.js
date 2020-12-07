import React from "react"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import Layout from "../components/generic/layout/layout"
import Checkout from "../components/shopcomponents/checkOut/checkOut"

const ModalExamplePage = ({ data }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => {
      return (
        <div>
          {modal && true ? (
            <Checkout checkoutOpen={true} closeTo={closeTo} data={data} />
          ) : (
            <Layout initialColor={"white"}>
              <Checkout checkoutOpen={true} closeTo={"/"} data={data} />
            </Layout>
          )}
        </div>
      )
    }}
  </ModalRoutingContext.Consumer>
)

export default ModalExamplePage

export const query = graphql`
  query checkout {
    allFridaArtwork {
      nodes {
        uuid
        slug
        artistDescription
        artistWebLink
        artistName
        artworkName
        availability
        depth
        description
        height
        price
        medium
        stil
        image {
          imageAssetId
        }
      }
    }
  }
`
