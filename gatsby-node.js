const path = require(`path`)
const sanityClient = require("@sanity/client")

const { createArtworNodes } = require("./g-node/createArtworkNodes")
const { createQuoteNodes } = require("./g-node/createQuoteNodes")

const sanityConfig = { projectId: "ypuaahj7", dataset: "test2" }
const client = sanityClient({
  ...sanityConfig,
  token: process.env.SANITY_TOKEN,
})

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  await createArtworNodes(actions, createNodeId, createContentDigest)
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
            },
          })
        }
      })
    })

    client.fetch(`*[_type == 'page']`, {}).then(pages => {
      pages.forEach(page => {
        const preparedSlug =
          page.slug.current === "home" ? "" : page.slug.current

        createPage({
          path: `/${preparedSlug}`,
          component: path.resolve("./src/templates/page-template.js"),
          context: {
            uuid: page.uuid,
            slug: preparedSlug,
            content: page.content,
            title: page.title,
          },
        })
      })
      resolve()
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}
