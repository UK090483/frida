import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { getShopifyImage } from "../../../../helper/shopifyImage"

function ImagePreview({ images, handleClick }) {
  return (
    <Root>
      {images.map((image, index) => {
        return (
          <ImageWrap key={index} active={image.active}>
            <Image
              src={getShopifyImage(image.src, "200x200")}
              onClick={() => handleClick(image)}
            ></Image>
          </ImageWrap>
        )
      })}
    </Root>
  )
}

const Root = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  height: 100px;
  margin: 0;
  padding: 0;
`
const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  margin-right: 10px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.red};
  border-radius: 3px;
  border-width: ${({ active }) => (active ? "5px" : "0")};
  transition: border-width 0.3s;
`
ImagePreview.propTypes = {
  images: PropTypes.array,
  handleClick: PropTypes.func,
  currentIndex: PropTypes.number,
}

ImagePreview.defaultProps = {
  images: [],
  handleClick: () => {},
  currentIndex: 0,
}

export default ImagePreview
