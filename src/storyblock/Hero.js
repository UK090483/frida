import React from "react"
import SbEditable from "storyblok-react"
import DefaultHero from "./../components/hero/hero"
import FlyningArtworkHero from "../components/StartHero/startHero"
import Components from "./components"

export default function Hero(props) {
  console.log(props)
  const { flyingArtworks } = props.blok
  const getContent = () => {
    return (
      props.blok.body && (
        <React.Fragment>
          {props.blok.body.map(blok =>
            React.createElement(Components(blok.component), {
              key: blok._uid,
              blok: blok,
            })
          )}
        </React.Fragment>
      )
    )
  }

  return (
    <SbEditable content={props.blok}>
      {flyingArtworks ? (
        <FlyningArtworkHero backgroundColor={props.blok.color}>
          {getContent()}
        </FlyningArtworkHero>
      ) : (
        <DefaultHero backgroundColor={props.blok.color}>
          {getContent()}
        </DefaultHero>
      )}
    </SbEditable>
  )
}
