import React from "react"
import Layout from "../components/generic/layout/layout"
import SEO from "../components/generic/seo/seo"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import Header from "../components/generic/header/header"
import Kreutz from "../assets/Menu_Kreutz_black.svg"
import { setMouse } from "../components/generic/Mouse/mouseRemote"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import ProductSingeView from "../components/Products/SingleView/ProductSingleView"

export default function SingleProductTemplate(props) {
  const { data } = props
  const {
    shopifyProduct: { title },
  } = data

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => {
        return (
          <Wrap
            modal={modal}
            pathname={props.location.pathname}
            product={data.shopifyProduct}
          >
            <Header title={"Shop"} color="lila">
              <Link
                style={{ minWidth: 40, pointerEvents: "all" }}
                to={modal ? closeTo : "/shop"}
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
                  style={{ cursor: "none" }}
                />
              </Link>
            </Header>

            <ProductSingeView data={data.shopifyProduct}></ProductSingeView>
          </Wrap>
        )
      }}
    </ModalRoutingContext.Consumer>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct: shopifyProduct2(handle: { eq: $handle }) {
      description
      title
      options {
        name
        values
      }
      images {
        id
        src
      }
      variants {
        price
        id
        availableForSale
        quantityAvailable
        selectedOptions {
          name
          value
        }
        image {
          id
          src
        }
        title
      }
    }
  }
`

const Wrap = ({ modal, children, pathname, product }) => {
  const { title, description } = product

  return !modal ? (
    <Layout header={""}>
      <SEO
        title={title}
        path={pathname}
        description={description}
        product={product}
      />
      {children}
    </Layout>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  )
}
