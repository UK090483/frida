import React, { useRef, useState, useEffect } from "react"
import style from "./fridaImage.module.scss"
import useMouse from "../../../Mouse/hooks/useMouse"
import { CDN } from "../../../../Constants"

const SCALE = [2, 3]

export default function FridaImage({ artwork }) {
  const imageRef = useRef()
  const RootRef = useRef()
  const loupImageRef = useRef()
  const { setMouse } = useMouse()

  const { artworkName, artistName, images, cdn } = artwork
  const { width, height } = cdn

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

  const srcSet = images.srcSet
  const src = images.src

  return (
    <div ref={RootRef} className={style.root}>
      <img
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
        className={`${style.image} ${
          width - 50 > height ? style.landscape : ""
        }`}
        // onLoad={() => { setLoaded(true) }}
        ref={imageRef}
        srcSet={srcSet}
        src={CDN ? `${cdn.url}?tr=w-600` : src}
        alt={`Kunstwerk ${artworkName} von ${artistName}`}
      ></img>
      <div
        className={`${style.magni} ${showGlass ? style.showGalss : ""}`}
        style={{ left: `${pos.pageX}px`, top: `${pos.pageY}px` }}
      >
        <img
          className={style.glassImg}
          ref={loupImageRef}
          srcSet={srcSet}
          style={{
            width: `${pos.width * SCALE[scale]}px`,
            height: `${pos.height * SCALE[scale]}px`,
            transform: ` translateX(${pos.x}%) translateY(${pos.y}%)`,
          }}
          src={CDN ? `${cdn.url}?tr=w-600` : src}
          alt={`Kunstwerk ${artworkName} von ${artistName}`}
        ></img>
      </div>
    </div>
  )
}
