import React from "react"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import Layout from "../components/generic/layout/layout"
import Checkout from "../components/shopcomponents/checkOut/checkOut"
import SEO from "../components/generic/seo/seo"

const CheckoutPage = props => {
  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => {
        return (
          <div>
            {modal && true ? (
              <Checkout checkoutOpen={true} closeTo={closeTo} />
            ) : (
              <Layout initialColor={"white"}>
                <SEO title="Checkout" path={props.location.pathname} />
                <Checkout checkoutOpen={true} closeTo={"/"} />
              </Layout>
            )}
          </div>
        )
      }}
    </ModalRoutingContext.Consumer>
  )
}

export default CheckoutPage
