import React from "react"
import styled from "styled-components"

import BigButton from "../../../buttons/bigButton/bigButton"

function BigButtons({ open }) {
  return (
    <Root open={open} style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <BigButton></BigButton>
    </Root>
  )
}

const Root = styled.div`
  position: "fixed";
  bottom: 0;
  width: 100%;
  transform: ${({ open }) =>
    open ? "translate3d(0, 0, 0)" : "translate3d(0, 100%, 0)"};
  transition: transform 0.3s ${({ index }) => `0.8s`}
    cubic-bezier(0.47, 0.71, 0.42, 1.12);
`

export default BigButtons
