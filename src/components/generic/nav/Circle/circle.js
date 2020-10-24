import React from "react"
import styled, { keyframes } from "styled-components"

export default function Circle({ open, initialRender, type }) {
  return (
    <React.Fragment>
      {type === "big" ? (
        <Root2 open={open} iR={initialRender} />
      ) : (
        <Root open={open} iR={initialRender} />
      )}
    </React.Fragment>
  )
}

const scaleUp = keyframes`
 from {
    top: 0;
    right: 0;
    width: 0vw;
    height: 0vh;
  }
  to {
    top: -50vw;
    right: -50vw;
    width: 200vw;
    height: 200vw;
  }
`
const scaleDown = keyframes`
  from {
    opacity: 1;
    top: -50vw;
    right: -50vw;
    width: 200vw;
    height: 200vw;
  }
  to {
    opacity: 0;
    top: 0;
    right: 0;
    width: 0vw;
    height: 0vh;
  }
`

const Root = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.black};
  right: 0;
  width: 0px;
  height: 0px;
  border-radius: 50%;
  animation-name: ${({ open, iR }) => (open ? scaleUp : !iR && scaleDown)};
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
`
const Root2 = styled.div`
  transform: scale(1.2) translateY(-50px);
  position: absolute;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.5;
  right: 0px;
  top: 0px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  animation-name: ${({ open, iR }) => (open ? scaleUp : !iR && scaleDown)};
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
`
