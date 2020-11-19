import React from "react"
import DefaultHero from "./../components/hero/hero"
import FlyningArtworkHero from "../components/StartHero/startHero"
import Components from "./components"

export default function Hero(props) {
  const { flyingArtworks, content, bgColor } = props

  const getContent = () => {
    return (
      content && (
        <React.Fragment>
          {content &&
            content.map(blok =>
              React.createElement(Components(blok._type), {
                ...blok,
                key: blok._key,
              })
            )}
        </React.Fragment>
      )
    )
  }

  return (
    <React.Fragment>
      {flyingArtworks ? (
        <FlyningArtworkHero backgroundColor={bgColor}>
          {getContent()}
        </FlyningArtworkHero>
      ) : (
        <DefaultHero backgroundColor={bgColor}>{getContent()}</DefaultHero>
      )}
    </React.Fragment>
  )
}
