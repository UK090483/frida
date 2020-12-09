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
            <Checkout checkoutOpen={true} closeTo={closeTo} />
          ) : (
            <Layout initialColor={"white"}>
              <Checkout checkoutOpen={true} closeTo={"/"} />
            </Layout>
          )}
        </div>
      )
    }}
  </ModalRoutingContext.Consumer>
)

export default ModalExamplePage
