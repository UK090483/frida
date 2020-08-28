import React, { useRef, useEffect } from "react"
import style from "./fridaImage.module.scss"

export default function FridaImage({ alt, width, height, src }) {
  const imageRef = useRef()
  const RootRef = useRef()

  useEffect(() => {
    const handleImageSizing = () => {
      if (imageRef.current && RootRef.current) {
        let rootClientRect = RootRef.current.getBoundingClientRect()
        let imageRatio = width / height

        if (rootClientRect.width > rootClientRect.height * imageRatio) {
          imageRef.current.style.width = "auto"
          imageRef.current.style.height = rootClientRect.height + "px"
        } else {
          imageRef.current.style.width = rootClientRect.width + "px"
          imageRef.current.style.height = "auto"
        }
      }
    }

    handleImageSizing()
    window.addEventListener("resize", handleImageSizing)

    return () => {
      window.removeEventListener("resize", handleImageSizing)
    }
  }, [height, imageRef, width])

  return (
    <div ref={RootRef} className={style.root}>
      <img
        className={`${style.image} ${
          width - 50 > height ? style.landscape : ""
        }`}
        // onLoad={() => { setLoaded(true) }}
        ref={imageRef}
        src={src}
        alt={alt}
      ></img>
    </div>
  )
}
