import React, { useContext } from "react"
import styled from "styled-components"
import UiContext from "../../../../context/UiContext"

export default function Artikel({ artikel }) {
  const { imageUrl, artworkName, artistName, uuid, price } = artikel
  const { eraseItem } = useContext(UiContext)
  return (
    <Root
      onClick={() => {
        eraseItem(uuid)
      }}
    >
      <Image src={transformImage(imageUrl, "200x0")} />
      <InfoRoot>
        <Title>{artworkName + " / " + artistName}</Title>
        <Price>{price}€</Price>
      </InfoRoot>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  width: 100%;

  padding: 20px 0;
`
const Image = styled.img`
  width: 100px;
`
const Title = styled.h6`
  font-size: 20px;
`
const Price = styled.h6`
  font-size: 20px;
`
const InfoRoot = styled.div`
  padding-left: 10px;
  width: 100%;
`
function transformImage(image = "", option) {
  var imageService = "https://img2.storyblok.com/"
  var path = image.replace("https://a.storyblok.com", "")
  return imageService + option + "/" + path
}
