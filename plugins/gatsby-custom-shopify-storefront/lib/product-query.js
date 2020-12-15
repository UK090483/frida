module.exports = `query ProductsQuery($first: Int, $after: String) {
  shop {
    name
    products(first: $first, after: $after ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          availableForSale
          id
          title
          createdAt
          updatedAt
          handle
          variants(first: 250) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                availableForSale
                id
                title
                selectedOptions {
                  name
                  value
                }
                image {
                  id
                  src
                }
                price
              }
            }
          }
          images(first: 250) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                src
              }
            }
          }
          options {
                    name
                    values
                 }
          description
          descriptionHtml
          productType
        }
      }
    }
  }
}`
