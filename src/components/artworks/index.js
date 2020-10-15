import React, { useEffect, useState, useRef } from "react"

import Filter from "./filter/filter"
import Section from "../container/section"
import Button from "../buttons/button"
import { useStaticQuery, graphql } from "gatsby"
import ArtworsContainer from "./artworksContainer/artworksContainer"
import Frida from "../frida/frida"
import getArtwork from "./helper/getArtwork"
import Slider from "./slider/slider"
import style from "./artworks.module.scss"

export default function Artworks({ filter = false, infinite = false }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allStoryblokEntry(
        filter: { full_slug: { regex: "/artwork/" } }
        sort: { fields: field_randSort_number, order: ASC }
      ) {
        edges {
          node {
            id
            content
            slug
          }
        }
      }
    }
  `)

  const [open, setOpen] = useState(false)
  const [artwork, setArtwork] = useState(null)
  const [filert, setFElements] = useState(null)

  function getArtworks() {
    let b = []
    data.allStoryblokEntry.edges.forEach(artwork => {
      const t = {
        content: { ...JSON.parse(artwork.node.content) },
      }
      t.id = artwork.node.id
      t.slug = artwork.node.slug
      b.push(getArtwork(t))
    })
    return b
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
        {!filter && (
          <Section>
            <h3>
              <Frida text={"NewArtists"} textColor="#F5C5D9"></Frida>
            </h3>
          </Section>
        )}
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
      {!filter && (
        <Section>
          <div
            style={{
              width: "fit-content",
              margin: "0 auto",
              padding: "30px 0",
            }}
          >
            <Button label={"mehr Kunst"} link={"/ausstellung/"}></Button>
          </div>
        </Section>
      )}
    </React.Fragment>
  )
}
