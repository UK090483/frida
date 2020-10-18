import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Frida from "../frida/frida"
import Button from "../buttons/button"
import styled, { keyframes } from "styled-components"
import axios from "axios"

export default function StartHero({ children }) {
  const data = useStaticQuery(graphql`
    query startHeroQuery {
      storyQL {
        ArtworkItems(per_page: 10) {
          items {
            content {
              Image {
                filename
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

  const allImages = data.storyQL.ArtworkItems.items
  const [images, setImages] = useState([])

  useEffect(() => {
    // axios
    //   .get(
    //     "https://api.storyblok.com/v1/cdn/stories?token=Hw2k511Rg3irS6QTDvxrewtt"
    //   )
    //   .then(function (response) {
    //     // handle success
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error)
    //   })
    //   .then(function () {
    //     // always executed
    //   })
  }, [])

  useEffect(() => {
    function transformImage(image, option) {
      var imageService = "https://img2.storyblok.com/"
      var path = image.replace("https://a.storyblok.com", "")
      return imageService + option + "/" + path
    }

    function getNext() {
      let item = allImages[getRandomInt(0, allImages.length)]
      return transformImage(
        item.content.Image.filename,
        "150x0/filters:quality(60)"
      )
    }

    const int = setTimeout(() => {
      const nextImages = [...images]
      if (nextImages.length > 10) {
        nextImages.shift()
      }

      let src = getNext()

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
    }, 800)

    return () => {
      clearTimeout(int)
    }
  }, [allImages, images, setImages])

  return (
    <React.Fragment>
      <Root>
        <Text>
          {children ? (
            children
          ) : (
            <React.Fragment>
              {" "}
              <h6>
                Neue Positionen kennenlernen, Kunst in ganz Deutschland sehen
                und dabei Kunstschaffende unterstützen.
                {/* Neue Werke, wechselnde Ausstellungsorte, 1 Plattform. */}
              </h6>
              <h1>
                <Frida /> – Deutschlands größte Outdoor- und Online-Gallery für
                junge Kunst
                {/* Deutschlandweite Kunstschau und Online-Galerie – <Frida></Frida> */}
              </h1>
              <Button
                label={"Mehr Erfahren"}
                link={"/ausstellung/"}
                backgroundColor={"lila"}
              />
            </React.Fragment>
          )}
        </Text>

        {images.map(image => {
          return (
            <Image
              alt={"flying "}
              //   className={style.image}
              style={{ left: image.left, zIndex: image.zIndex }}
              key={image.key}
              src={image.src}
            ></Image>
          )
        })}
      </Root>
    </React.Fragment>
  )
}

const Root = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pink};
`
const Text = styled.div`
  margin-top: 100px;
  z-index: 1;
  padding: 0 7%;
`

const drive = keyframes`
   0% {
    transform: translate3d(0, 100vh, 0);
  }
  5% {
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -100vh, 0);
  }
`

const Image = styled.img`
  position: absolute;
  width: 25vw;
  z-index: 0;
  animation-name: ${drive};
  animation-duration: 10s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  opacity: 0;
  @media ${({ theme }) => theme.device.tablet} {
    width: 9vw;
  }
`
