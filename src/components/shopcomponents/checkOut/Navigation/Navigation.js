import React from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

const Navi = styled.div`
  position: fixed;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.pink};
  height: 100px;
  bottom: 0;
  overflow: hidden;
  padding: 0 20px;
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 100px;
  }
`

const NavAnimationWrp = ({ children, show, name }) => {
  return (
    <AnimatePresence>
      {show && (
        <StyledNavWrap
          length={children.length}
          key={name}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
        >
          {children}
        </StyledNavWrap>
      )}
    </AnimatePresence>
  )
}
const StyledNavWrap = styled(motion.div)`
  width: calc(100vw - 40px);
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: ${({ length }) => {
    return length > 1 ? "space-between" : "flex-end"
  }};

  @media ${({ theme }) => theme.device.tablet} {
    width: calc(100vw - 200px);
  }
`

const StyledNavButton = styled.div`
  ${({ pos }) => {
    switch (pos) {
      case "right":
        return "margin-left:auto;"
      default:
        return "margin-rigth:auto;"
    }
  }};
`

export { StyledNavButton, Navi, NavAnimationWrp }
