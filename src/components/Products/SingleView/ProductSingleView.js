import React, { useState } from "react"
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
} from "~components/ProductComponents"

import SozialShare from "../../SozialShare/SozialShare"
import DropDown from "../../input/dropDown"

export default function SingleView({ data }) {
  const [variant, setVariant] = useState("")
  const { variants, title, options } = data

  const hasOptions = variants.length > 1

  const curentItem = variant
    ? variants.find(v => v.title === variant)
    : variants[0]

  const {
    price,
    shopifyId,
    image: {
      localFile: { childImageSharp },
    },
  } = curentItem

  const { smallImage, bigImage, sizes } = childImageSharp

  return (
    <Wrap>
      <ImageWrap>
        <LoupImage
          smallImageSrc={smallImage.src}
          bigImageSrc={bigImage.src}
          aspectRatio={sizes.aspectRatio}
          alt={"bla"}
        />
      </ImageWrap>
      <InfoWrap>
        <Groupe>
          <ProductName name={title} />
          <Price price={price} />
          {hasOptions && <Options options={options} setVariant={setVariant} />}
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

const Options = ({ options, setVariant }) => {
  const [state, setState] = React.useState("")
  return (
    <React.Fragment>
      {options &&
        options.map(option => {
          const { name, values } = option

          return (
            <DropDown
              key={name}
              filterName={name}
              label={name}
              options={values.map(item => ({ label: item, value: item }))}
              open={state === name}
              setOpen={e => {
                setState(e)
              }}
              setFilter={(fitername, b) => {
                setVariant(b)
              }}
            />
          )
        })}
    </React.Fragment>
  )
}
