import React from "react"
import styled from "styled-components"
import {
  Wrap,
  ImageWrap,
  InfoWrap,
  LoupImage,
  PaymenInfo,
  BuyButton,
  BuyButtonWrap,
  ProductName,
  Price,
  ImagePreview,
  Options,
} from "~components/lib/ProductComponents"
import useShopify from "~components/hooks/useShopify"
import SozialShare from "../../SozialShare/SozialShare"

export default function SingleView({ data }) {
  const {
    variant,
    hasOptions,
    imagesArray,
    onImageClick,
    selectedOption,
    setOption,
    title,
    description,
    options,
    activeImage,
  } = useShopify(data)

  const {
    localFile: {
      childImageSharp: { smallImage, bigImage, sizes },
    },
  } = activeImage

  const { price, shopifyId } = variant

  return (
    <Wrap>
      <ImageWrap>
        <LoupImage
          smallImageSrc={smallImage.src}
          bigImageSrc={bigImage.src}
          aspectRatio={sizes.aspectRatio}
          alt={"bla"}
        />

        {imagesArray.length > 1 && (
          <ImagePreview images={imagesArray} handleClick={onImageClick} />
        )}
      </ImageWrap>
      <InfoWrap>
        <Groupe>
          <ProductName name={title} />
          <Price price={price} />
          <Description>{description}</Description>
          {hasOptions && (
            <Options
              options={options}
              setOption={setOption}
              selectedOption={selectedOption}
            />
          )}
          <SozialShare />
          <BuyButtonWrap>
            <BuyButton availability={true} shopifyId={shopifyId} />
          </BuyButtonWrap>
        </Groupe>
        <PaymenInfo />
      </InfoWrap>
    </Wrap>
  )
}

const Groupe = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Description = styled.p`
  font-size: 20px;
`
