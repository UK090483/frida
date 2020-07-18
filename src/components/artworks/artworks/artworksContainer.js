import React, { useEffect, useState, useRef, useCallback } from "react"
import Artwork from "../artwork/artwork"
import MagicGrid from "magic-grid"

export default function ArtworkContainer({
  artworks,
  handleClick,
  infinite = false,
}) {
  const gridRef = useRef()
  const mgrid = useRef()
  const scrollRef = useRef(0)
  const [postCount, setPostCount] = useState(9)

  const setGrid = useCallback(number => {
    if (gridRef.current && artworks.length > 0) {
      console.log(number)
      mgrid.current = new MagicGrid({
        container: "#frida-grid",
        items: number + 1,
        animate: true,
        static: true,
        gutter: 80,
        maxColumns: 3,
      })
      mgrid.current.listen()
    }
  }, [artworks])


  useEffect(() => {
    if (infinite) {
      window.addEventListener("scroll", handleScroll)

      function handleScroll() {

        console.log(postCount);

        if (gridRef.current) {
          const clientRef = gridRef.current.getBoundingClientRect()

          if (clientRef.bottom - window.innerHeight < 1000) {
            // if (postCount < artworks.length && !scrollRef.current) {
            //   const ADD = 9
            //   const summand =
            //     postCount + ADD > artworks.length
            //       ? artworks.length - postCount
            //       : postCount + ADD
            //   const nextPostcount = postCount + summand
            //   setPostCount(nextPostcount)
            //   setGrid(nextPostcount)
            // }

            scrollRef.current = true
          }
        }
      }
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [artworks.length, infinite, postCount, setGrid])

  useEffect(() => {
    setGrid(postCount)
  }, [artworks, postCount, setGrid])

  const handleLoaded = () => {

    console.log('loaded')
    if (mgrid.current) {
      mgrid.current.positionItems()
    }
  }

  const addMore = () => {

    let nexPostcount = postCount + 2
    setPostCount(nexPostcount)
    setGrid(nexPostcount)

  }

  const getArtworks = () => {
    const initPosts = [...artworks].slice(0, postCount)
    return initPosts.map((artwork, index) => (
      <Artwork
        key={artwork.id}
        artwork={artwork}
        handleLoaded={handleLoaded}
        handleClick={handleClick}
        index={index}
      ></Artwork>
    ))
  }

  return (
    <React.Fragment>
      <div ref={gridRef} id="frida-grid">
        {getArtworks()}
      </div>
      <button onClick={() => { addMore() }}>load more</button>
    </React.Fragment>
  )
}
