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

const sanityConfig = { projectId: "ypuaahj7", dataset: "test2" }
const client = sanityClient({
  ...sanityConfig,
  token: process.env.SANITY_TOKEN,
})
const builder = imageUrlBuilder(sanityConfig)

function urlFor(source) {
  return builder.image(source)
}

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
  const poster = await loadPoster()
  const sanityArtworks = await loadArtworksSanity()
  shuffleArray(sanityArtworks)

  const { createNode } = actions

  function getPriceWithTax(price) {
    if (!price) {
      return ""
    }
    const withTax = (price / 84) * 100
    const roundTen = Math.ceil(withTax / 10) * 10
    // console.log(`Preis: ${price}/ mitMwSt: ${withTax}/ gerundet: ${roundTen}`)
    return roundTen
  }

  sanityArtworks.forEach(item => {
    const {
      slug: { current: slug },
      _id: uuid,
      name: artworkName,
      availability,
      description,
      width,
      height,
      depth,
      price,

      stil: { name: stil },
      medium: { name: medium },
      artist: {
        anzeigeName: artistName,
        webLink: artistWebLink,
        description: artistDescription,
        instagramLink: instagramLink,
        _id: artistId,
      },
      image: {
        asset: { _ref: imageAssetId },
      },
    } = item

    const fluid50 = getFluidGatsbyImage(
      imageAssetId,
      { maxWidth: 50, quality: 60 },
      sanityConfig
    )
    const fluid100 = getFluidGatsbyImage(
      imageAssetId,
      { maxWidth: 100, quality: 60 },
      sanityConfig
    )
    const fluid500 = getFluidGatsbyImage(
      imageAssetId,
      { maxWidth: 500, quality: 60 },
      sanityConfig
    )
    const fluid1000 = getFluidGatsbyImage(
      imageAssetId,
      { maxWidth: 1000, quality: 60 },
      sanityConfig
    )
    const base64 = urlFor(imageAssetId).width(20).url()

    fluid50.base64 = base64
    fluid500.base64 = base64
    fluid1000.base64 = base64
    fluid100.base64 = base64

    const data = {
      uuid,
      availability,
      description,
      artistName,
      artistWebLink,
      artistDescription,
      instagramLink,
      medium,
      stil,
      artworkName,
      artistId,
      slug,
      width,
      height,
      depth,
      price: getPriceWithTax(price),
      image: {
        fluid50,
        fluid100,
        fluid500,
        fluid1000,
      },
    }

    const nodeContent = JSON.stringify(data)
    const nodeMeta = {
      id: createNodeId(`sanity-artwork-${uuid}`),
      parent: null,
      children: [],
      internal: {
        type: `CSanityFridaArtworks`,
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

const loadArtworksSanity = async () => {
  console.log("sanity _ start")
  console.time("SANITY_____Load")
  const query = `
  *[_type == 'artwork']{
    _id,
    slug,
    name,
    availability,
    description,
    width,
    height,
    depth,
    price,
    stil->{name},
    medium->{name},
    artist->{anzeigeName,description,instagramLink,webLink,_id},
    image
  }`
  const params = {}

  const res = await client.fetch(query, params)

  console.timeEnd("SANITY_____Load")

  return res
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

  return new Promise((resolve, reject) => {
    graphql(`
      query MyQuery {
        allCSanityFridaArtworks {
          nodes {
            uuid
            slug
            artistDescription
            artistWebLink
            artistName
            artistId
            artworkName
            availability
            depth
            description
            height
            width
            price
            medium
            stil
            image {
              fluid500 {
                base64
                aspectRatio
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
              }
              fluid1000 {
                base64
                aspectRatio
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
              }
            }
          }
        }
      }
    `).then(result => {
      // first check if there is no errors
      if (result.errors) {
        // reject Promise if error
        reject(result.errors)
      }

      result.data.allCSanityFridaArtworks.nodes.forEach(artwork => {
        createPage({
          path: `/artwork/${artwork.slug}`,
          component: path.resolve("./src/templates/singleArtworkTemplate.js"),
          context: {
            slug: artwork.slug,
            content: artwork,
            artistId: artwork.artistId,
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
