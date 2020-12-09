import React from "react"
import Layout from "../components/generic/layout/layout"
import SEO from "../components/generic/seo/seo"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import Header from "../components/generic/header/header"
import Kreutz from "../assets/Menu_Kreutz.svg"
import { setMouse } from "../components/generic/Mouse/mouseRemote"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import ProductSingeView from "../components/Products/SingleView/ProductSingleView"

export default function SingleProductTemplate(props) {
  const { data } = props

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => {
        return (
          <Wrap modal={modal} pathname={props.location.pathname}>
            <Header title={"shop"} color="lila">
              <Link
                style={{ minWidth: 40, pointerEvents: "all" }}
                to={modal ? closeTo : "/mearch"}
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

const Wrap = ({ modal, children, pathname }) => {
  return !modal ? (
    <Layout header={""}>
      <SEO
        title={"artwork.artistName"}
        path={pathname}
        description={"artwork.description"}
      />
      {children}
    </Layout>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  )
}
