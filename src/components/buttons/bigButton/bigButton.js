import React from "react"
import { setMouse } from "../../generic/Mouse/mouseRemote"
import styled from "styled-components"

function BigButtons({ label, link }) {
  return (
    <Root
      onMouseEnter={() => {
        setMouse("link", true)
      }}
      onMouseLeave={() => {
        setMouse("link", false)
      }}
    >
      <BigButton
        label={"Instagram"}
        link={"https://www.instagram.com/meetfrida.art/"}
      ></BigButton>
      <BigButton
        label={"Facebook"}
        link={"https://www.facebook.com/meetfrida.art"}
      ></BigButton>
    </Root>
  )
}

function BigButton({ label, link }) {
  return (
    <Button target="_blank" rel="noopener noreferrer" href={link}>
      {label}
    </Button>
  )
}

const Root = styled.div`
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.red};
  transition: background-color 0.3s;
  @media ${({ theme }) => theme.device.tablet} {
    flex-wrap: nowrap;
  }
`
const Button = styled.a`
  height: 140px;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  font-weight: 800;
  text-decoration: none;
  cursor: none;

  :hover {
    transition: background-color 0.3s;
    background-color: ${({ theme }) => theme.colors.pink};
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-color: ${({ theme }) => theme.colors.black};
    -webkit-text-stroke-width: 0.03em;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 4rem;
    width: 50%;
    height: 160px;
  }
`
export default BigButtons
