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
            <Header title={title} color="lila">
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
    shopifyProduct(handle: { eq: $handle }) {
      description
      descriptionHtml
      shopifyId
      tags
      title
      options {
        name
        values
      }
      images {
        id
        originalSrc
        localFile {
          childImageSharp {
            smallImage: resize(width: 1000) {
              src
            }
            bigImage: resize(width: 2000) {
              src
            }
            sizes {
              aspectRatio
            }
          }
        }
      }
      variants {
        price
        shopifyId
        availableForSale
        selectedOptions {
          name
          value
        }
        image {
          id
          originalSrc
          localFile {
            childImageSharp {
              smallImage: resize(width: 500) {
                src
              }
              bigImage: resize(width: 1000) {
                src
              }
              sizes {
                aspectRatio
              }
            }
          }
        }
        title
      }
    }
  }
`

const Wrap = ({ modal, children, pathname, product }) => {
  const { title } = product

  return !modal ? (
    <Layout header={""}>
      <SEO title={title} path={pathname} description={"artwork.description"} />
      {children}
    </Layout>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  )
}
