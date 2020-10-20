import { useState, useEffect } from "react"

export default function useInfenitScroll(
  gridRef,
  artworks,
  scrollRef,
  infinite,
  loadMore
) {
  const [postCount, setPostCount] = useState(30)
  const [showScrollup, setShowScrollup] = useState(false)
  const [loading, setloading] = useState(false)

  const _loader = e => {
    console.log(entries[0].isIntersecting)
  }
  useEffect(() => {
    console.log("init observer")

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    }

    const observer = new IntersectionObserver(_loader, options)

    // if (gridRef.current) {
    //   observer.observe(gridRef.current)
    // }

    // return () => {
    //   if (gridRef.current) {
    //     observer.unobserve(gridRef.current)
    //   }
    // }
  }, [gridRef])

  return { postCount, showScrollup, loading }
}
