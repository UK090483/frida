// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it

const path = require(`path`) // you will need it later to point at your template component
const fs = require("fs")
const { object } = require("prop-types")
const apiPath = "./public/fridaApi"
const perPage = 10

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // we use a Promise to make sure the data are loaded
  // before attempting to create the pages with them
  return new Promise((resolve, reject) => {
    // fetch your data here, generally with graphQL.
    // for example, let say you use your data from Contentful using its associated source plugin
    graphql(`
      query MyQuery {
        pages: allStoryblokEntry(filter: { full_slug: { regex: "/pages//" } }) {
          ...StoryblokPages
        }
        artworks: allStoryblokEntry(
          filter: { full_slug: { regex: "/artwork//" } }
          sort: { fields: field_randSort_number, order: ASC }
        ) {
          ...StoryblokArtworks
        }
        medium: allStoryblokEntry(
          filter: { full_slug: { regex: "/medium//" } }
        ) {
          ...StoryblokFilter
        }
        stil: allStoryblokEntry(filter: { full_slug: { regex: "/stil//" } }) {
          ...StoryblokFilter
        }
      }

      fragment StoryblokPages on StoryblokEntryConnection {
        edges {
          node {
            slug
            content
          }
        }
      }

      fragment StoryblokArtworks on StoryblokEntryConnection {
        edges {
          node {
            content
            slug
            id
          }
        }
      }

      fragment StoryblokFilter on StoryblokEntryConnection {
        edges {
          node {
            field_name_string
            uuid
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

      if (!fs.existsSync(apiPath)) fs.mkdirSync(apiPath)
      const medium = {}
      const stil = {}
      const artist = {}
      const allArtworks = []

      result.data.artworks.edges.forEach(artwork => {
        const { cleanArtwork, parsedContent } = prepareArtwork(artwork.node)

        allArtworks.push(cleanArtwork)

        if (medium.hasOwnProperty(parsedContent.medium.slug)) {
          medium[parsedContent.medium.slug].push(cleanArtwork)
        } else {
          medium[parsedContent.medium.slug] = [cleanArtwork]
        }

        if (stil.hasOwnProperty(parsedContent.stil.slug)) {
          stil[parsedContent.stil.slug].push(cleanArtwork)
        } else {
          stil[parsedContent.stil.slug] = [cleanArtwork]
        }

        if (artist.hasOwnProperty(parsedContent.artist.slug)) {
          artist[parsedContent.artist.slug].push(cleanArtwork)
        } else {
          artist[parsedContent.artist.slug] = [cleanArtwork]
        }

        createPage({
          path: `/artwork/${artwork.node.slug}`,
          component: path.resolve("./src/templates/singleArtworkTemplate.js"),
          context: {
            slug: artwork.node.slug,
          },
        })
      })

      console.time("make Api")
      Paginate(allArtworks, apiPath + "/artworks")
      makeSortPagination("medium", medium)
      makeSortPagination("stil", stil)
      makeSortPagination("artist", artist)
      console.timeEnd("make Api")

      result.data.pages.edges.forEach(page => {
        // create page according to the fetched data
        createPage({
          path: `/${page.node.slug}`, // your url -> /categories/animals
          component: path.resolve("./src/templates/pages-template.js"), // your template component
          context: {
            // optional,
            // data here will be passed as props to the component ``,
            // as well as to the graphql query as graphql arguments.
            content: page.node.content,
            slug: page.node.slug,
          },
        })
      })
      resolve()
    })
  })
}

function makeSortPagination(name, object) {
  const path = `${apiPath}/${name}/`

  Object.keys(object).forEach(key => {
    if (!fs.existsSync(path)) fs.mkdirSync(path)

    Paginate(object[key], path + key)
  })
}

function Paginate(array, paginatePath) {
  if (!fs.existsSync(paginatePath)) fs.mkdirSync(paginatePath)
  var i,
    j,
    temparray,
    chunk = 10
  for (i = 0, j = array.length; i < j; i += chunk) {
    temparray = array.slice(i, i + chunk)

    const page = i / 10 + 1
    const hasMore = array.length - page * perPage > 0

    result = {
      data: temparray,
      total: array.length,
      page: page,
      perPage,
      hasMore,
    }

    fs.writeFileSync(`${paginatePath}/${page}.json`, JSON.stringify(result))
  }
}

function prepareArtwork(artwork) {
  const content = JSON.parse(artwork.content)
  const {
    Image: { filename: imageUrl },
    stil: { name: stil },
    medium: { name: medium },
    artist: {
      content: {
        anzeige_name: artistName,
        artist_instagram_link: instagramLink,
        description: artistDescription,
        email: artistEmail,
        web_link: artistWebLink,
      },
    },
    description: artworkDescription,
    name: artworkName,
    depth,
    width,
    height,
    price,
    availability,
    _uid: id,
  } = content

  const cleanAvailability =
    typeof availability === "object" ? availability[0] : availability

  return {
    parsedContent: content,
    cleanArtwork: {
      slug: artwork.slug,
      id,
      artistName,
      artistEmail,
      artistDescription,
      artistWebLink,
      artworkName,
      artworkDescription,
      availability: cleanAvailability,
      imageUrl,
      height,
      width,
      depth,
      price,
      stil,
      medium,
      instagramLink,
    },
  }
}
