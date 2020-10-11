import React, { useEffect, useState } from "react"

export default function ArtworkImage({ src, alt, onLoad }) {
  const [hasMounted, setHasMounted] = useState(false)
  const [show, setShow] = useState(false)

  function transformImage(image, option) {
    var imageService = "https://img2.storyblok.com/"
    var path = image.replace("https://a.storyblok.com", "")
    return imageService + option + "/" + path
  }

  const resizeSrc = transformImage(src, "500x0")

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const handleLoad = () => {
    setShow(true)
  }

  return (
    hasMounted && (
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
        src={resizeSrc}
      ></img>
    )
  )
}
