import React from "react"
import ProductGrid from "./productGrid"
import ProductItem from "./productItem"
import Section from "../../container/section"
import { useStaticQuery, graphql } from "gatsby"

export default function Products() {
  const data = useStaticQuery(graphql`
    query ProductQuery {
      allShopifyProduct: allShopifyProduct2(
        filter: { productType: { ne: "artwork" } }
      ) {
        nodes {
          title
          id
          handle
          variants {
            id
            title
            price
            image {
              src
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
