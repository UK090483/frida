const path = require(`path`)
const { sanity } = require("./lib/sanityClient")

const { createArtworNodes } = require("./lib/createArtworkNodes")
const { createQuoteNodes } = require("./lib/createQuoteNodes")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  // await createArtworNodes(actions, createNodeId, createContentDigest)
  await createQuoteNodes(actions, createNodeId, createContentDigest)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      query MyQuery {
        allFridaArtwork {
          nodes {
            uuid
            artistId
            slug
            shopify_handle
          }
        }
      }
    `).then(result => {
      // first check if there is no errors
      if (result.errors) {
        // reject Promise if error
        reject(result.errors)
      }

      result.data.allFridaArtwork.nodes.forEach(artwork => {
        createPage({
          path: `/artwork/${artwork.slug}`,
          component: path.resolve("./src/templates/singleArtworkTemplate.js"),
          context: {
            artistId: artwork.artistId,
            uuid: artwork.uuid,
            ranNum: Math.random(),
            slug: artwork.slug,
            shopify_handle: artwork.shopify_handle,
          },
        })

        if (
          artwork.slug ===
          "metamorphose-seelische-gestalt-auf-reisen-ergaenzung"
        ) {
          createPage({
            path: `/MeetChristin`,
            component: path.resolve("./src/templates/singleArtworkTemplate.js"),
            context: {
              artistId: artwork.artistId,
              uuid: artwork.uuid,
              ranNum: Math.random(),
              slug: artwork.slug,
              shopify_handle: artwork.shopify_handle,
            },
          })
        }
      })
    })

    graphql(`
      query ProductPageQuery {
        allShopifyProduct2(filter: { productType: { ne: "artwork" } }) {
          nodes {
            handle
          }
        }
      }
    `).then(result => {
      // first check if there is no errors
      if (result.errors) {
        // reject Promise if error
        reject(result.errors)
      }

      result.data.allShopifyProduct2.nodes.forEach(product => {
        createPage({
          path: `/product/${product.handle}`,
          component: path.resolve("./src/templates/productPageTemplate.js"),
          context: {
            handle: product.handle,
          },
        })
      })
      resolve()
    })

    // sanity.fetch(`*[_type == 'page']`, {}).then(pages => {
    //   pages.forEach(page => {
    //     const preparedSlug =
    //       page.slug.current === "home" ? "" : page.slug.current

    //     createPage({
    //       path: `/${preparedSlug}`,
    //       component: path.resolve("./src/templates/page-template.js"),
    //       context: {
    //         uuid: page.uuid,
    //         slug: preparedSlug,
    //         content: page.content,
    //         title: page.title,
    //       },
    //     })
    //   })

    // })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}
