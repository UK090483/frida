import React from "react"
import SbEditable from "storyblok-react"
import HandleFrida from "./handleFrida"
export default function Header(props) {
  const { text, variant } = props.blok

  const getContent = () => {
    switch (variant) {
      case "h1":
        return (
          <h1>
            <HandleFrida text={text} />
          </h1>
        )
      case "h2":
        return (
          <h2>
            <HandleFrida text={text} />
          </h2>
        )
      case "h3":
        return (
          <h3>
            <HandleFrida text={text} />
          </h3>
        )
      case "h4":
        return (
          <h4>
            <HandleFrida text={text} />
          </h4>
        )
      case "h5":
        return (
          <h5>
            <HandleFrida text={text} />
          </h5>
        )
      case "h6":
        return (
          <h6>
            <HandleFrida text={text} />
          </h6>
        )
      default:
        return (
          <h1>
            <HandleFrida text={text} />
          </h1>
        )
    }
  }

  return <SbEditable content={props.blok}>{getContent()}</SbEditable>
}
