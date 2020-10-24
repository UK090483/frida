import React, { useRef, useEffect } from "react"
import styled from "styled-components"

export default function FridaImage({ alt, imageUrl }) {
  const imageRef = useRef()
  const RootRef = useRef()

  function transformImage(image, option) {
    var imageService = "https://img2.storyblok.com/"
    var path = image.replace("https://a.storyblok.com", "")
    return imageService + option + "/" + path
  }

  const sizes = imageUrl.split("/")[5].split("x")
  const width = sizes[0]
  const height = sizes[1]

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
    <Root ref={RootRef}>
      <Image
        ref={imageRef}
        src={transformImage(imageUrl, "500x0")}
        alt={alt}
      ></Image>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Image = styled.img`
  transition: opacity 0.3s;
  margin: 0;
`
