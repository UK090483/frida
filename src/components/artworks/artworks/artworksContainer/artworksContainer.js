import React, { useEffect, useState, useRef } from "react"
import Artwork from "../../artwork/artwork"
import Masonry from "react-masonry-component"
import style from "./artworksContainer.module.scss"
import scrollTo from "gatsby-plugin-smoothscroll"
import ArrowUp from "../../../../assets/arrow_up.svg"

const masonryOptions = {
  transitionDuration: 0,
  gutter: 80,
  percentPosition: true,
}

export default function ArtworkContainer({
  artworks,
  handleClick,
  infinite = false,
}) {
  const gridRef = useRef(false)
  const scrollRef = useRef(false)

  const [showScrollup, setShowScrollup] = useState(false)

  const [postCount, setPostCount] = useState(9)
  useEffect(() => {
    if (infinite) {
      window.addEventListener("scroll", handleScroll)

      function handleScroll() {
        if (gridRef.current) {
          if (!showScrollup && window.scrollY > 1800) {
            setShowScrollup(true)
          } else if (showScrollup && window.scrollY < 1800) {
            setShowScrollup(false)
          }
          const clientRef = gridRef.current.getBoundingClientRect()
          if (clientRef.bottom - window.innerHeight < 10) {
            if (postCount < artworks.length && !scrollRef.current) {
              scrollRef.current = true
              const ADD = 9
              const nextPostcount =
                postCount + ADD > artworks.length
                  ? artworks.length
                  : postCount + ADD
              setPostCount(nextPostcount)
            }
          }
        }
      }
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [artworks.length, infinite, postCount, showScrollup])

  const handleLoaded = () => {
    scrollRef.current = false
  }

  const getArtworks = () => {
    const initPosts = [...artworks].slice(0, postCount)
    return initPosts.map((artwork, index) => (
      <Artwork
        key={artwork.id}
        artwork={artwork}
        handleLoaded={handleLoaded}
        handleClick={() => {
          handleClick(artwork)
        }}
        index={index}
      ></Artwork>
    ))
  }
  return (
    <React.Fragment>
      <ArrowUp
        className={`${style.scrollUp} ${
          showScrollup ? style.scrollUpActive : ""
        }`}
        onClick={() => scrollTo("#filter")}
      />

      <div ref={gridRef}>
        <CustMasonry
          artworks={[...artworks].slice(0, postCount)}
          handleLoaded={handleLoaded}
          handleClick={handleClick}
        ></CustMasonry>
        {/* <Masonry className={style.root} options={masonryOptions}>
          {getArtworks()}
        </Masonry> */}
      </div>
    </React.Fragment>
  )
}

const CustMasonry = props => {
  const maxWidth = 1600
  const [columns, setColumns] = useState(3)
  const { artworks = [], handleLoaded, handleClick } = props

  useEffect(() => {
    const handleSize = () => {
      console.log(window.innerWidth)
      if (window.innerWidth < 630) {
        setColumns(1)
      } else if (window.innerWidth < 1200) {
        setColumns(2)
      } else {
        setColumns(3)
      }
    }
    handleSize()
    window.addEventListener("resize", handleSize)
    return () => {
      window.removeEventListener("resize", handleSize)
    }
  })

  const getArtworks = artworks => {
    let col = []
    for (let i = 0; i < columns; i++) {
      col.push([])
    }
    return artworks.reduce((p, c, i) => {
      p[i % columns].push(
        <Artwork
          key={c.id}
          artwork={c}
          handleLoaded={handleLoaded}
          handleClick={() => {
            handleClick(c)
          }}
          index={i}
        ></Artwork>
      )
      return p
    }, col)
  }

  const col = getArtworks(artworks)

  return (
    <div style={{ display: "flex", maxWidth: maxWidth, margin: "0 auto" }}>
      {col.map((column, index) => {
        return (
          <div
            key={index}
            style={{
              width: `${100 / columns}%`,
              margin: "0 40px",
            }}
          >
            {column}
          </div>
        )
      })}
    </div>
  )
}
