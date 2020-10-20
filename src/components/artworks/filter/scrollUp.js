import React, { useEffect, useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import ArrowUp from "../../../assets/arrow_up.svg"
import styled from "styled-components"

export default function SrollUp({ targetRef }) {
  const [showScrollup, setShowScrollup] = useState(null)

  const handleScrollup = entries => {
    if (!entries[0].isIntersecting && entries[0].boundingClientRect.top < 0) {
      setShowScrollup(true)
    } else {
      !showScrollup && setShowScrollup(false)
    }
  }
  useEffect(() => {
    if (targetRef.current) {
      const gridObserver = new IntersectionObserver(handleScrollup, {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      })
      gridObserver.observe(targetRef.current)
      return () => {
        if (targetRef.current) {
          gridObserver.unobserve(targetRef.current)
        }
      }
    }
  }, [targetRef.current])

  return (
    <StyledArrow
      showScrollup={showScrollup}
      onClick={() => scrollTo("#filter")}
    >
      <ArrowUp />
    </StyledArrow>
  )
}

const StyledArrow = styled.div`
  box-shadow: 0px 0px 22px -2px rgba(71, 71, 71, 0.5);
  position: fixed;
  z-index: 50;
  bottom: 20px;
  right: ${({ showScrollup }) => (showScrollup ? "20px" : "-50px")};
  width: 30px;
  height: 30px;

  background-color: ${({ theme }) => theme.colors.pink};
  border-radius: 50%;
  transform: ${({ showScrollup }) => (showScrollup ? "scale(1)" : "scale(0)")};
  transition: right 0.5s, transform 0.5s, box-shadow 1s;
  box-shadow: 0px 0px 22px -2px rgba(71, 71, 71, 0.5);
  svg {
    width: 100%;
    height: 100%;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 50px;
    height: 50px;
  }
`
