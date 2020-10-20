import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import ArtworkName from "../../shared/artworkName"
const ArtworkInfo = ({ availability, artworkName, price }) => {
  return (
    <Root>
      <NamePriceWrap>
        <ArtworkName artworkName={artworkName} availability={availability} />
        <Price>{price}€</Price>
      </NamePriceWrap>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 1.35rem;

  font-weight: 500;
`

const NamePriceWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const Price = styled.div`
  padding-left: 10px;
  padding-top: 15px;
  margin-left: auto;
  width: fit-content;
  text-align: right;
`

ArtworkInfo.defaultProps = {
  availability: "availabil",
  artworkName: "prop artworkName is missing",
  price: 0,
  theme: {
    colors: {
      green: "green",
      red: "red",
    },
  },
}

ArtworkInfo.propTypes = {
  availability: PropTypes.string,
  artworkName: PropTypes.string,
  price: PropTypes.number,
}
export default React.memo(ArtworkInfo)
