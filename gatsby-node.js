// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it

const StoryblokClient = require("storyblok-js-client")
const path = require(`path`)
const imageUrlBuilder = require("@sanity/image-url")
const sanityClient = require("@sanity/client")
const {
  getFluidGatsbyImage,
  getFixedGatsbyImage,
} = require("gatsby-source-sanity")

const { createArtworNodes } = require("./g-node/createArtworkNodes")

const sanityConfig = { projectId: "ypuaahj7", dataset: "test2" }
const client = sanityClient({
  ...sanityConfig,
  token: process.env.SANITY_TOKEN,
})

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOCK_TOKEN,
  cache: {
    clear: "auto",
    type: "memory",
  },
})

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const bla = await createArtworNodes(
    actions,
    createNodeId,
    createContentDigest
  )
  const poster = await loadPoster()

  const { createNode } = actions

  poster.forEach(story => {
    const {
      uuid: id,
      content: {
        artworkName,
        artistName,
        Image: { filename: imageUrl },
      },
    } = story

    const data = {
      artistName,
      artworkName,
      id,
      imageUrl,
    }

    const nodeContent = JSON.stringify(data)
    const nodeMeta = {
      id: createNodeId(`my-data-${id}`),
      parent: null,
      children: [],
      internal: {
        type: `FriiidaPoster`,
        mediaType: `text/html`,
        content: nodeContent,
        contentDigest: createContentDigest(data),
      },
    }
    const node = Object.assign({}, data, nodeMeta)
    createNode(node)
  })
}

const loadPoster = async () => {
  let poster = null,
    page = 0,
    results = [],
    per_page = 100
  do {
    poster = await Storyblok.get("cdn/stories/", {
      per_page: per_page,
      page: page++,
      starts_with: "poster/",
    })

    results = results.concat(poster.data.stories)
  } while (poster.total > per_page * (page - 1))
  return results
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
