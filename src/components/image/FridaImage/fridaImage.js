import React, { useRef, useEffect } from "react"
import styled from "styled-components"

export default function FridaImage({ alt, image }) {
  const imageRef = useRef()
  const RootRef = useRef()

  const {
    localFile: {
      childImageSharp: {
        resize: { height, width, src },
      },
    },
  } = image

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
      <Image ref={imageRef} src={src} alt={alt}></Image>
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
