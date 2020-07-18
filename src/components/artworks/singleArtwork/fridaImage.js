import React, { useRef, useState } from "react"
import style from "./fridaImage.module.scss"

const SCALE = [2, 3]

export default function FridaImage({ artwork }) {
  const imageRef = useRef()
  const RootRef = useRef()
  const loupImageRef = useRef()
  // const [loaded, setLoaded] = useState(false);
  // const [resized, setResized] = useState(false);
  const [showGlass, setShowGlass] = useState(false)
  const [pos, setPos] = useState({ x: 50, y: 50, pageX: 0, pageY: 0 })
  const [scale, setScale] = useState(0)

  const { artworkName, artistName, images } = artwork
  const { width, height } = images

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
        }}
        onMouseLeave={() => {
          setShowGlass(false)
        }}
        onClick={handleclick}
        className={`${style.image} ${width > height ? style.landscape : ""}`}
        // onLoad={() => { setLoaded(true) }}
        ref={imageRef}
        srcSet={srcSet}
        src={src}
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
          src={src}
          alt={`Kunstwerk ${artworkName} von ${artistName}`}
        ></img>
      </div>
    </div>
  )
}
