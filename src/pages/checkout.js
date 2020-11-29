import React from "react"

import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
// import { graphql } from "gatsby"
// import Layout from "../components/generic/layout/layout"
// import Checkout from "../components/shopcomponents/checkOut/checkOut"
const ModalExamplePage = ({ data }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => {
      return (
        <div>
          {/* {modal && true ? (
            <Checkout checkoutOpen={true} closeTo={closeTo} data={data} />
          ) : (
            <Layout>
              <Checkout checkoutOpen={true} closeTo={"/"} data={data} />
            </Layout>
          )} */}
        </div>
      )
    }}
  </ModalRoutingContext.Consumer>
)

export default ModalExamplePage

// export const query = graphql`
//   query checkout {
//     allCSanityFridaArtworks {
//       nodes {
//         uuid
//         slug
//         artistDescription
//         artistWebLink
//         artistName
//         artworkName
//         availability
//         depth
//         description
//         height
//         price
//         medium
//         stil
//         image {
//           fluid100 {
//             base64
//             aspectRatio
//             sizes
//             src
//             srcSet
//             srcSetWebp
//             srcWebp
//           }
//         }
//       }
//     }
//   }
// `
