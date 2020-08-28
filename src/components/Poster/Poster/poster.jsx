import React from "react"
import PosterGrid from "../posterGrid/postergrid"
import PosterItem from "../PosterItem/posterItem"
import Section from "../../container/section"
import { useStaticQuery, graphql } from "gatsby"

export default function Poster() {
  const data = useStaticQuery(graphql`
    query posterQuerry {
      allFridaArtwork(limit: 10) {
        edges {
          node {
            id
            artworkName
            artistName
            images {
              local {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 70) {
                    src
                    srcSet
                  }
                  original {
                    height
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

  const posters = normalizeData(data)

  return (
    <Section>
      <PosterGrid>
        {posters.map(posterItem => (
          <PosterItem key={posterItem.id} poster={posterItem}></PosterItem>
        ))}
      </PosterGrid>
    </Section>
  )
}

function normalizeData(data) {
  return data.allFridaArtwork.edges.map(item => {
    const { artistName, artworkName, id, images } = item.node
    return {
      id,
      artistName,
      artworkName,
      image: {
        src: images[0].local.childImageSharp.fluid.src,
        width: images[0].local.childImageSharp.original.width,
        height: images[0].local.childImageSharp.original.height,
      },
    }
  })
}
