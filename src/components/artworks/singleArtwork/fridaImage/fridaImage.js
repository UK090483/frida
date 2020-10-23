import React, { useRef, useState, useEffect } from "react"
import useMouse from "../../../generic/Mouse/hooks/useMouse"
import styled from "styled-components"
import { getFluidGatsbyImage } from "gatsby-storyblok-image"
import transformImage from "../../helper/transformImage"
import Img from "gatsby-image"

const SCALE = [2, 3]

export default function FridaImage({ artwork }) {
  const imageRef = useRef()
  const RootRef = useRef()
  const loupImageRef = useRef()
  const { setMouse } = useMouse()

  const { artworkName, artistName, imageUrl } = artwork
  // const { width, height } = images

  // const [loaded, setLoaded] = useState(false);
  // const [resized, setResized] = useState(false);

  function transformImage(image, option) {
    var imageService = "https://img2.storyblok.com/"
    var path = image.replace("https://a.storyblok.com", "")
    return imageService + option + "/" + path
  }

  const sizes = imageUrl.split("/")[5].split("x")
  const width = sizes[0]
  const height = sizes[1]
  // console.log(width)
  // console.log(height)

  // const fluidProps = getFluidGatsbyImage(src, {
  //   maxWidth: 400,
  //   quality: 60,
  //   smartCrop: false,
  //   base64: transformImage(src, "10x0/filters:quality(10)"),
  //   useBase64: true,
  // })

  useEffect(() => {
    const handleImageSizing = () => {
      if (imageRef.current && RootRef.current) {
        let rootClientRect = RootRef.current.getBoundingClientRect()
        let imageRatio = width / height

        if (window.innerWidth > 899) {
          if (rootClientRect.width > rootClientRect.height * imageRatio) {
            imageRef.current.style.width = "auto"
            imageRef.current.style.height = rootClientRect.height + "px"
          } else {
            imageRef.current.style.width = rootClientRect.width + "px"
            imageRef.current.style.height = "auto"
          }
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

  const [showGlass, setShowGlass] = useState(false)
  const [pos, setPos] = useState({ x: 50, y: 50, pageX: 0, pageY: 0 })
  const [scale, setScale] = useState(0)

  const handleclick = () => {
    setScale((scale + 1) % SCALE.length)
  }

  const handleMouseMove = e => {
    const imageClientRef = imageRef.current.getBoundingClientRect()
    let x = ((e.pageX - imageClientRef.left) / imageClientRef.width) * -100
    let y =
      ((e.pageY - window.scrollY - imageClientRef.top) /
        imageClientRef.height) *
      -100
    setPos({
      width: imageClientRef.width,
      height: imageClientRef.height,
      x: x,
      y: y,
      pageX: e.pageX,
      pageY: e.pageY - window.scrollY,
    })
  }

  // const srcSet = images.srcSet
  // const src = images.src

  return (
    <Root ref={RootRef}>
      <Image
        onMouseMove={e => {
          handleMouseMove(e)
        }}
        onMouseEnter={() => {
          setShowGlass(true)
          setMouse("hide", true)
        }}
        onMouseLeave={() => {
          setShowGlass(false)
          setMouse("hide", false)
        }}
        onClick={handleclick}
        ref={imageRef}
        src={transformImage(imageUrl, "500x0/filters:quality(80)")}
        alt={`Kunstwerk ${artworkName} von ${artistName}`}
      ></Image>
      <Magni
        show={showGlass}
        // className={`${style.magni} ${showGlass ? style.showGalss : ""}`}
        style={{ left: `${pos.pageX}px`, top: `${pos.pageY}px` }}
      >
        <GlassImg
          ref={loupImageRef}
          style={{
            width: `${pos.width * SCALE[scale]}px`,
            height: `${pos.height * SCALE[scale]}px`,
            transform: ` translateX(${pos.x}%) translateY(${pos.y}%)`,
          }}
          src={transformImage(imageUrl, "1000x0")}
          alt={`Kunstwerk ${artworkName} von ${artistName}`}
        ></GlassImg>
      </Magni>
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

const Magni = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ show }) => (show ? "200px" : "0")};
  height: ${({ show }) => (show ? "200px" : "0")};
  overflow: hidden;
  border-radius: 50%;
  pointer-events: none;
  transform: translateX(-100px) translateY(-100px);
  opacity: ${({ show }) => (show ? 1 : 0)};
  border: ${({ theme }) => theme.colors.red} solid 2px;
  transition: width 0.3s, height 0.3s;
`

const GlassImg = styled.img`
  max-width: 1000% !important;
  position: absolute;
  top: 98.5px;
  left: 98.5px;
  transition: width 0.3s, height 0.3s;
`
