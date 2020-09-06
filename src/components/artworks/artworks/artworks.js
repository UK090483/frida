import React, { useEffect, useState, useRef } from "react"

import Filter from "../filter/filter"
import Section from "../../container/section"
import { useStaticQuery, graphql } from "gatsby"
import ArtworsContainer from "./artworksContainer/artworksContainer"
import getArtwork from "../helper/getArtwork"
import Slider from "../slider/slider"
import style from "./artworks.module.scss"

export default function Artworks({ filter = false, infinite = false }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFridaArtwork {
        edges {
          node {
            imageUrls {
              medium
              large
            }
            id
            medium
            stil
            width
            price
            slug
            artworkName
            artistName
            artistDescription
            artworkDescription
            availability
            height
            depth
            artistEmail
            cdn {
              url
              width
              height
            }
            images {
              local {
                childImageSharp {
                  fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                  }
                  fluid(maxWidth: 600, quality: 70) {
                    ...GatsbyImageSharpFluid
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

  const [open, setOpen] = useState(false)
  const [artwork, setArtwork] = useState(null)
  const [filert, setFElements] = useState(null)

  function getArtworks() {
    let a = []
    data.allFridaArtwork.edges.forEach(artwork => {
      let _artwork = artwork.node
      let res = getArtwork(_artwork)

      if (res) {
        a.push(res)
      }
    })
    return a
  }

  const artworks = getArtworks()
  const bodyRef = useRef()

  useEffect(() => {
    bodyRef.current = document.querySelector("html")
  }, [])

  const handleClick = artwork => {
    setArtwork(artwork)
    setOpen(true)
    bodyRef.current.style.overflow = "hidden"
  }

  const handleCloseClick = () => {
    setOpen(false)
    bodyRef.current.style.overflow = "auto"
  }
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <React.Fragment>
      <div id={"filter"} style={{ transform: "translateY(-10vh)" }}></div>
      <Section type={"full"}>
        {filter && (
          <Filter artworks={artworks} setFElements={setFElements}></Filter>
        )}
        <div className={style.root}>
          <Slider
            artwork={artwork}
            open={open}
            handleCloseClick={handleCloseClick}
          />

          <ArtworsContainer
            artworks={filert || artworks}
            handleClick={handleClick}
            infinite={infinite}
          ></ArtworsContainer>
        </div>
      </Section>
    </React.Fragment>
  )
}
