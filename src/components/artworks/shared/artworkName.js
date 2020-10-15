import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

export default function ArtworkName({ availability, artworkName }) {
  const stringArray = [...artworkName.split(" ")]
  const firstWord = stringArray.shift()
  const rest = stringArray.join(" ")

  return (
    <Root>
      <Span sold={availability !== "availabil"}>{firstWord + " "}</Span>
      {rest}
    </Root>
  )
}

const Root = styled.div`
  /* font-size: 1em;
  font-weight: 800;
  line-height: 1.2em; */
  padding-top: 15px;

  width: fit-content;
  min-height: 10px;
  margin-left: 29px;
`

const Span = styled.span`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-30px);
    border-radius: 50%;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: ${({ theme, sold }) =>
      sold ? theme.colors.red : theme.colors.green};
  }
`
ArtworkName.defaultProps = {
  availability: "availabil",
  artworkName: "prop artworkName is missing",
  price: 0,
  // theme: {
  //   colors: {
  //     green: "green",
  //     red: "red",
  //   },
  // },
}

ArtworkName.propTypes = {
  availability: PropTypes.string,
  artworkName: PropTypes.string,
}
