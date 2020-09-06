import React, { useEffect, useState, useRef } from "react"
import Artwork from "../../artwork/artwork"
// import Masonry from "react-masonry-component"
import style from "./artworksContainer.module.scss"
import scrollTo from "gatsby-plugin-smoothscroll"
import ArrowUp from "../../../../assets/arrow_up.svg"

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
      </div>
    </React.Fragment>
  )
}

const CustMasonry = props => {
  const ContainerWidth = [500, 1000, 1600]

  const [columns, setColumns] = useState(3)
  const { artworks = [], handleLoaded, handleClick } = props

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth < 950) {
        columns !== 1 && setColumns(1)
      } else if (window.innerWidth < 1405) {
        columns !== 2 && setColumns(2)
      } else {
        columns !== 3 && setColumns(3)
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
          columns={columns}
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
    <div
      style={{
        display: "flex",
        maxWidth: ContainerWidth[columns - 1],
        margin: "0 auto",
      }}
    >
      {col.map((column, index) => {
        return (
          <div
            key={index}
            style={{
              width: `${100 / columns}%`,
              margin: `0 ${columns === 1 ? 20 : 40}px`,
            }}
          >
            {column}
          </div>
        )
      })}
    </div>
  )
}
