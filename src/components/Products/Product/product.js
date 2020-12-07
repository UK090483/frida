import React from "react"
import ProductGrid from "./productGrid"
import ProductItem from "./productItem"
import Section from "../../container/section"
import { useStaticQuery, graphql } from "gatsby"

export default function Products() {
  const data = useStaticQuery(graphql`
    query ProductQuery {
      allShopifyProduct(filter: { productType: { ne: "artworks" } }) {
        nodes {
          title
          id
          handle
          variants {
            shopifyId
            title
            price
            image {
              originalSrc
              localFile {
                childImageSharp {
                  resize(width: 500) {
                    height
                    src
                    width
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Section type={"full"}>
      <ProductGrid>
        {data.allShopifyProduct.nodes.map(productItem => (
          <ProductItem key={productItem.id} product={productItem}></ProductItem>
        ))}
      </ProductGrid>
    </Section>
  )
}
