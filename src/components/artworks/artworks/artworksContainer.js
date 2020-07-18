import React, { useEffect, useState, useRef, useCallback } from "react"
import Artwork from "../artwork/artwork"
import MagicGrid from "magic-grid"
import Masonry from 'react-masonry-component';
import style from './artworksContainer.module.scss';
import artworkStyle from '../artwork/artwork';


const masonryOptions = {
  transitionDuration: 100,
  gutter: 80,
  percentPosition: true

}
const imagesLoadedOptions = { background: '.my-bg-image-el' }

export default function ArtworkContainer({
  artworks,
  handleClick,
  infinite = false,
}) {

  const gridRef = useRef(false);
  const scrollRef = useRef(false);

  const [postCount, setPostCount] = useState(9);
  useEffect(() => {
    if (infinite) {
      window.addEventListener("scroll", handleScroll)

      function handleScroll() {

        if (gridRef.current) {
          const clientRef = gridRef.current.getBoundingClientRect()

          if (clientRef.bottom - window.innerHeight < 10) {
            if (postCount < artworks.length && !scrollRef.current) {

              console.log('load more')
              scrollRef.current = (true)
              const ADD = 9
              const summand =
                ((postCount + ADD) > artworks.length)
                  ? artworks.length
                  : postCount + ADD

              console.log(summand)
              const nextPostcount = summand

              console.log(nextPostcount)

              setPostCount(nextPostcount)

            }


          }
        }
      }
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [artworks.length, infinite, postCount])


  const handleLoaded = () => {

    scrollRef.current = (false)
  }

  const addMore = () => {
    setPostCount(postCount + 3)
  }




  const getArtworks = () => {
    const initPosts = [...artworks].slice(0, postCount)
    return initPosts.map((artwork, index) => (
      <Artwork
        key={artwork.id}
        artwork={artwork}
        handleLoaded={handleLoaded}
        handleClick={() => { handleClick(artwork) }}
        index={index}
      ></Artwork>
    ))
  }

  return (
    <React.Fragment>
      <div ref={gridRef}>
        <Masonry

          className={style.root} // default ''

          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
          {getArtworks()}
        </Masonry>

      </div>
    </React.Fragment>
  )
}
