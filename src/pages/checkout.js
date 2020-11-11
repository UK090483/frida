import React from "react"

import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import { graphql } from "gatsby"
import Layout from "../components/generic/layout/layout"
import Checkout from "../components/shopcomponents/checkOut/checkOut"
const ModalExamplePage = ({ data }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => {
      return (
        <div>
          {modal ? (
            <Checkout checkoutOpen={true} closeTo={closeTo} data={data} />
          ) : (
            <Layout>
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
    allFridaArtworks {
      nodes {
        uuid
        id
        availability
        width
        artworkName
        height
        slug
        imageUrl
        depth
        artistName
        artistWebLink
        instagramLink
        medium
        stil
        price
        artistDescription
        artworkDescription: description
      }
    }
  }
`
