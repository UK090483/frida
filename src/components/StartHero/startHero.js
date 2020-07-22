import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Frida from "../frida/frida"
import Stoerer from "../../assets/Störer_open_call.svg"
import style from "./startHero.module.scss"
import Button from "../buttons/button"
import { Link } from "gatsby"
import Section from "../container/section"
import useMouse from '../Mouse/hooks/useMouse';

export default function StartHero() {
  const data = useStaticQuery(graphql`
    query startHeroQuery {
      allFridaArtwork {
        edges {
          node {
            images {
              local {
                childImageSharp {
                  fluid(maxWidth: 150) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const allImages = data.allFridaArtwork.edges
  const [images, setImages] = useState([])

  const { setMouse } = useMouse()

  useEffect(() => {
    function getImageWithlocal() {
      let item = allImages[getRandomInt(0, allImages.length)].node.images
      return item[0].local.childImageSharp.fluid.src
    }
    const int = setTimeout(() => {
      const nextImages = [...images]
      if (nextImages.length > 10) {
        nextImages.shift()
      }

      let src = getImageWithlocal()

      const NextImage = {
        key: Date.now(),
        zIndex: getRandomInt(0, 2) > 0 ? 1 : 0,
        src: src,
        left: `${getRandomInt(0, 100)}vw`,
      }
      if (src) {
        nextImages.push(NextImage)
      }
      setImages(nextImages)
    }, 500)
    return () => {
      clearTimeout(int)
    }
  }, [allImages, images, setImages])

  return (
    <React.Fragment>
      <div className={style.root}>
        <div className={style.text}>
          <h4> Neue Werke, wechselnde Ausstellungsorte, 1 Plattform.</h4>
          <h1>
            <Frida></Frida>-Deutschlands größte Kunstschau digital und analog
          </h1>
          <Button label={"Mehr Erfahren"} link={"/unterstützen/"}></Button>
        </div>

        {images.map(image => {
          return (
            <img
              alt={"flying "}
              className={style.image}
              style={{ left: image.left, zIndex: image.zIndex }}
              key={image.key}
              src={image.src}
            ></img>
          )
        })}
      </div>

      {/* <div
        className={style.stoerer}
        onMouseEnter={() => { setMouse('link', true) }}
        onMouseLeave={() => { setMouse('link', false) }}
      >
        <Link to="/unterstützen/">
          <Stoerer></Stoerer>
        </Link>
      </div>

      <Section>
        <div className={style.stoererSpacer}></div>
      </Section> */}
    </React.Fragment>
  )
}
