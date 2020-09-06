import React, { useEffect, useState } from "react"

export default function ArtworkImage({ src, alt, onLoad, width, height }) {
  // const [hasMounted, setHasMounted] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    // setHasMounted(true)
  }, [])

  const handleLoad = () => {
    setShow(true)
  }

  return (
    <img
      style={{
        marginBottom: 0,
        opacity: show ? 1 : 0,
        transition: "opacity 1s",
      }}
      alt={alt}
      onLoad={() => {
        onLoad()
        handleLoad()
      }}
      src={src}
    ></img>
  )
}
