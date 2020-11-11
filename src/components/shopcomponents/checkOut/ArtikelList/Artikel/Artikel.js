import React, { useContext } from "react"
import styled from "styled-components"
import UiContext from "~context/UiContext"
import EraseIcon from "../../../../../assets/erase.svg"

export default function Artikel({ artikel }) {
  const { imageUrl, artworkName, artistName, uuid, price } = artikel
  const { eraseItem } = useContext(UiContext)

  return (
    <Root>
      <Image src={transformImage(imageUrl, "200x0")} />
      <InfoRoot>
        <Title>{artworkName + " / " + artistName}</Title>
        <Price>{price}€</Price>
      </InfoRoot>
      <StyledEraseIcon
        onClick={() => {
          eraseItem(uuid)
        }}
      ></StyledEraseIcon>
    </Root>
  )
}

const StyledEraseIcon = styled(EraseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  max-width: 30px;
  path {
    fill: ${({ theme }) => theme.colors.red};
  }
`

const Root = styled.li`
  position: relative;
  width: 100%;

  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
  }
`
const Image = styled.img`
  width: 100px;
`
const Title = styled.h6`
  font-size: 20px;
  width: 100%;
`
const Price = styled.h6`
  font-size: 20px;
  align-self: flex-end;
  margin: 0;
  margin-left: auto;
  width: 100%;
  text-align: right;
  @media ${({ theme }) => theme.device.tablet} {
  }
`
const InfoRoot = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media ${({ theme }) => theme.device.tablet} {
    flex-wrap: nowrap;
    padding-left: 10px;
  }
`
function transformImage(image = "", option) {
  var imageService = "https://img2.storyblok.com/"
  var path = image.replace("https://a.storyblok.com", "")
  return imageService + option + "/" + path
}
