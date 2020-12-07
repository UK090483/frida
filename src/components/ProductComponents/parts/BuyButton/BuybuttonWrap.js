import React from "react"
import { useIntersection } from "react-use"
import styled from "styled-components"

export default function BuyButtonWrap({ children }) {
  const intersectionRef = React.useRef(null)

  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px 0px 100% 0px",
    threshold: 0,
  })
  return (
    <Root>
      <div ref={intersectionRef} />
      <Inner isOut={intersection ? !intersection.isIntersecting : false}>
        {children}
      </Inner>
    </Root>
  )
}

const Inner = styled.div`
  ${({ isOut }) =>
    isOut &&
    "position: fixed; bottom: 10px;left:20px; width:calc(100vw - 40px);z-index:9999;"}
  

  @media ${({ theme }) => theme.device.laptopM} {
    position: relative;
    width: 500px;
    margin-left: auto;
    margin-right: 80px;
    ${({ isOut }) =>
      isOut &&
      "position: fixed; top: 10px;right:20px; width:500px; z-index:9999;"}
  }
`
const Root = styled.div`
  /* height: 80px; */
`
