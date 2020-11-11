// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it

const StoryblokClient = require("storyblok-js-client")
const path = require(`path`)

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
  const artworks = await loadArtworks()
  const poster = await loadPoster()
  shuffleArray(artworks)
  // console.log("---------------------------------------------------------")
  // console.log(process.env.STORYBLOCK_TOKEN)
  // console.log("---------------------------------------------------------")
  const { createNode } = actions

  artworks.forEach(story => {
    const {
      slug,
      uuid,
      content: {
        name: artworkName,
        availability,
        description,
        width,
        height,
        depth,
        price,
        Image: { filename: imageUrl },
        stil: {
          content: { name: stil },
        },
        medium: {
          content: { name: medium },
        },
        artist: {
          content: {
            anzeige_name: artistName,
            web_link: artistWebLink,
            description: artistDescription,
            artist_instagram_link: instagramLink,
          },
        },
      },
    } = story

    const cleanAvailability =
      typeof availability === "object" ? availability[0] : availability

    const data = {
      uuid,
      availability: cleanAvailability,
      description,
      artistName,
      artistWebLink,
      artistDescription,
      instagramLink,
      medium,
      stil,
      artworkName,
      slug,
      width,
      height,
      depth,
      price,
      imageUrl,
    }

    const nodeContent = JSON.stringify(data)
    const nodeMeta = {
      id: createNodeId(`my-data-${uuid}`),
      parent: null,
      children: [],
      internal: {
        type: `FridaArtworks`,
        mediaType: `text/html`,
        content: nodeContent,
        contentDigest: createContentDigest(data),
      },
    }
    const node = Object.assign({}, data, nodeMeta)
    createNode(node)
  })

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

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

// const loadArtworks = async () => {
//   let artworks = null,
//     page = 0,
//     results = [],
//     per_page = 100
//   do {
//     artworks = await Storyblok.get("cdn/stories/", {
//       per_page: per_page,
//       page: page++,
//       starts_with: "artwork/",
//       resolve_relations: "artist,stil,medium",
//     })

//     results = results.concat(artworks.data.stories)
//   } while (artworks.total > per_page * (page - 1))

//   return results
// }

const loadArtworks = async () => {
  const perpage = 100
  const count = await Storyblok.get("cdn/stories/", {
    per_page: 1,
    page: 1,
    starts_with: "artwork/",
  }).then(res => res.total)

  const run = async p => {
    return Storyblok.get("cdn/stories/", {
      per_page: perpage,
      page: p,
      starts_with: "artwork/",
      resolve_relations: "artist,stil,medium",
    }).then(res => res.data.stories)
  }

  const testArray = new Array(Math.ceil(count / perpage))
  testArray.fill(1)
  const tasks = testArray.map((item, index) => {
    return run(index + 1)
  })
  const results = await Promise.all(tasks)
  return results.flat()
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
  const { createPage } = actions

  // we use a Promise to make sure the data are loaded
  // before attempting to create the pages with them
  return new Promise((resolve, reject) => {
    // fetch your data here, generally with graphQL.
    // for example, let say you use your data from Contentful using its associated source plugin
    graphql(`
      query MyQuery {
        allFridaArtworks {
          nodes {
            uuid
            id
            artworkName
            availability
            width
            height
            slug
            depth
            artistName
            artistWebLink
            instagramLink
            medium
            stil
            price
            artistDescription
            artworkDescription: description
            imageUrl
          }
        }
      }
    `).then(result => {
      // first check if there is no errors
      if (result.errors) {
        // reject Promise if error
        reject(result.errors)
      }

      // if no errors, you can map into the data and create your static pages
      result.data.allFridaArtworks.nodes.forEach(artwork => {
        // create page according to the fetched data

        createPage({
          path: `/artwork/${artwork.slug}`, // your url -> /categories/animals
          component: path.resolve("./src/templates/singleArtworkTemplate.js"), // your template component
          context: {
            // optional,
            // data here will be passed as props to the component ``,
            // as well as to the graphql query as graphql arguments.
            slug: artwork.slug,
            content: artwork,
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
// const path = require(`path`) // you will need it later to point at your template component

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   // we use a Promise to make sure the data are loaded
//   // before attempting to create the pages with them
//   return new Promise((resolve, reject) => {
//     // fetch your data here, generally with graphQL.
//     // for example, let say you use your data from Contentful using its associated source plugin
//     graphql(`
//       query MyQuery {
//         pages: allStoryblokEntry(filter: { full_slug: { regex: "/pages/" } }) {
//           ...StoryblokPages
//         }
//         artworks: allStoryblokEntry(
//           filter: { full_slug: { regex: "/artwork/" } }
//           sort: { fields: field_randSort_number, order: ASC }
//         ) {
//           ...StoryblokArtworks
//         }
//       }

//       fragment StoryblokPages on StoryblokEntryConnection {
//         edges {
//           node {
//             slug
//             content
//           }
//         }
//       }

//       fragment StoryblokArtworks on StoryblokEntryConnection {
//         edges {
//           node {
//             slug
//             id
//           }
//         }
//       }
//     `).then(result => {
//       // first check if there is no errors
//       if (result.errors) {
//         // reject Promise if error
//         reject(result.errors)
//       }

//       // if no errors, you can map into the data and create your static pages
//       result.data.artworks.edges.forEach(artwork => {
//         // create page according to the fetched data

//         createPage({
//           path: `/artwork/${artwork.node.slug}`, // your url -> /categories/animals
//           component: path.resolve("./src/templates/singleArtworkTemplate.js"), // your template component
//           context: {
//             // optional,
//             // data here will be passed as props to the component ``,
//             // as well as to the graphql query as graphql arguments.

//             slug: artwork.node.slug,
//           },
//         })
//       })

//       result.data.pages.edges.forEach(page => {
//         // create page according to the fetched data

//         createPage({
//           path: `/${page.node.slug}`, // your url -> /categories/animals
//           component: path.resolve("./src/templates/pages-template.js"), // your template component
//           context: {
//             // optional,
//             // data here will be passed as props to the component ``,
//             // as well as to the graphql query as graphql arguments.
//             content: page.node.content,
//             slug: page.node.slug,
//           },
//         })
//       })
//       resolve()
//     })
//   })
// }
