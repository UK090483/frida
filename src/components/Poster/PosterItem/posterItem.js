import React from "react"
import FridaImage from "../../image/FridaImage/fridaImage"
import PropTypes from "prop-types"
import styled from "styled-components"

function PosterItem({ poster }) {
  const { imageUrl, artistName, artworkName } = poster

  return (
    <Root>
      <ImageWrap>
        <FridaImage alt={"src"} imageUrl={imageUrl}></FridaImage>
      </ImageWrap>
      <InfoWrap>
        <h6>{artistName}</h6>
        <h6>{artworkName}</h6>
      </InfoWrap>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  margin: 0;
  margin-bottom: 60px;
  @media ${({ theme }) => theme.device.tablet} {
    width: calc(50% - 40px);
    margin: 0 20px;
  }
`

const ImageWrap = styled.div`
  width: 100%;
  height: 80vh;
  background-color: rgba(202, 202, 202, 0.363);
  border-radius: 3px;
  padding: 20px;

  img {
    border-radius: 3px;
    box-shadow: 0px 0px 22px -2px rgba(71, 71, 71, 0.5);
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media ${({ theme }) => theme.device.tablet} {
    height: 60vh;
  }
`

const InfoWrap = styled.div`
  padding: 20px;
  * {
    text-align: center;
    margin-bottom: 5px;
  }
`

PosterItem.propTypes = {
  poster: PropTypes.object,
}

export default PosterItem
