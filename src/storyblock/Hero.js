import React from "react"
import DefaultHero from "./../components/hero/hero"
import StartHero from "../components/hero/StartHero/startHero"
import Components from "./components"

export default function Hero(props) {
  const { flyingArtworks, content, bgColor, bgImage } = props

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
        <StartHero backgroundColor={bgColor}>{getContent()}</StartHero>
      ) : (
        <DefaultHero backgroundColor={bgColor} bgImage={bgImage}>
          {getContent()}
        </DefaultHero>
      )}
    </React.Fragment>
  )
}
