import React, { useContext } from "react"
import UserContext from "../userContext/userContext"
import style from "./artworkList.module.scss"
import Section from "../../container/section"
import Button from "../components/Button"

export default function Artworklist({ type }) {
  const context = useContext(UserContext)
  const { setSlider, slider, options } = context
  const { artworks } = context

  const handleClick = (artwork, active) => {
    if (slider) {
      setSlider(null)
    } else {
      active
        ? setSlider({ action: "edit Artwork active", artwork: artwork })
        : setSlider({ action: "edit Artwork", artwork: artwork })
    }
  }

  const handleAddNewClick = () => {
    setSlider({ action: "add Artwork" })
  }

  const makeArtwork = (artwork, active) => {
    return (
      <div
        className={style.itemRoot}
        key={artwork.id}
        onClick={() => {
          handleClick(artwork, active)
        }}
      >
        {artwork.picture && <img src={artwork.picture.src}></img>}
        {artwork.title}
      </div>
    )
  }

  const getArtWorks = () => {
    const Eingereicht = []
    const Active = []
    if (artworks && options) {
      artworks.forEach(artwork => {
        if (
          options.ArtworksActive.find(a => {
            return a === artwork.id
          })
        ) {
          Active.push(makeArtwork(artwork, true))
        } else {
          Eingereicht.push(makeArtwork(artwork, false))
        }
      })
    }
    return (
      <Section backgroundColor={"lila"}>
        <div className={style.root}>
          <h4>Deine Eingereichten Werke</h4>
          <p>
            Hier siehst du alle eingereichten Werke. Die Kuratoren bemühen sich
            um eine schnelle Freigabe
          </p>
          <div className={style.noActive}>
            {Eingereicht}{" "}
            <Button onClick={handleAddNewClick} label={"add New"}></Button>
          </div>
          {Active.length > 0 && (
            <React.Fragment>
              <h4>Deine veröffentlichten Werke</h4>
              <p>Bäääm, du hast es geschafft! Diese Werke wurden freigegeben</p>
              <div className={style.active}>{Active}</div>
            </React.Fragment>
          )}
        </div>
      </Section>
    )
  }

  return <div>{getArtWorks()}</div>
}
