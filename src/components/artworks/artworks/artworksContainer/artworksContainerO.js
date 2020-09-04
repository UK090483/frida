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
        <Masonry className={style.root} options={masonryOptions}>
          {getArtworks()}
        </Masonry>
      </div>
    </React.Fragment>
  )
}
