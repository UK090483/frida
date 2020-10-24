import React, { useState } from "react"
import xss from "xss"
import InstagramIcon from "../../../../assets/instagram_icon.svg"
import LinkIcon from "../../../../assets/link_icon.svg"
import useMouse from "../../../generic/Mouse/hooks/useMouse"
import styled, { keyframes } from "styled-components"

export default function Tab({ text1, text2, instagramLink, artistWebLink }) {
  const [active, setActive] = useState(true)

  const { setMouse } = useMouse()

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <div>
      <Controles
      //  className={style.controls}
      >
        <Switch
          active={active}
          // className={style.button}
          onClick={() => {
            handleClick()
          }}
          onMouseEnter={() => {
            setMouse("link", true)
          }}
          onMouseLeave={() => {
            setMouse("link", false)
          }}
        >
          <div>Künstler Info</div>
          <div>Kunstwerk Info</div>
        </Switch>
        <LinkIconWrap
        // className={style.linkIconWrap}
        >
          {artistWebLink && (
            <Icon
              target="_blank"
              rel="noreferrer"
              href={artistWebLink}
              // className={style.linkIcon}
              onMouseEnter={() => {
                setMouse("link", true)
              }}
              onMouseLeave={() => {
                setMouse("link", false)
              }}
            >
              <LinkIcon></LinkIcon>
            </Icon>
          )}
          {instagramLink && (
            <Icon
              target="_blank"
              rel="noreferrer"
              href={instagramLink}
              // className={style.linkIcon}
              onMouseEnter={() => {
                setMouse("link", true)
              }}
              onMouseLeave={() => {
                setMouse("link", false)
              }}
            >
              <InstagramIcon></InstagramIcon>
            </Icon>
          )}
        </LinkIconWrap>
      </Controles>

      {active && <Text dangerouslySetInnerHTML={{ __html: xss(text1) }}></Text>}
      {!active && (
        <Text dangerouslySetInnerHTML={{ __html: xss(text2) }}></Text>
      )}
    </div>
  )
}

const textIn = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Text = styled.div`
  max-height: unset;

  overflow: auto;
  margin-bottom: 20px;
  font-size: 1rem;
  font-weight: 400;
  @media ${({ theme }) => theme.device.tablet} {
    max-height: 300px;
  }
  p {
    font-weight: 400;
    font-size: 1rem;
  }
  animation-name: ${textIn};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`

const LinkIconWrap = styled.div`
  display: flex;
  align-items: center;
`
const Icon = styled.a`
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  padding: 2px;
  border-radius: 50%;
  border: ${({ theme }) => theme.colors.pink} solid
    ${({ theme }) => theme.borderWidth};
  margin: 10px;
  margin-right: 0;
  transition: background-color 0.6s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.pink};
    transform: scale(1.1);
    svg {
      path {
        fill: white;
      }
    }
  }
`

const Controles = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
`

const Switch = styled.div`
  display: flex;
  min-height: 50px;
  margin: 20px auto;
  width: fit-content;

  @media ${({ theme }) => theme.device.tablet} {
    margin: 0;
    width: unset;
  }

  div {
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${({ theme }) => theme.colors.pink} solid
      ${({ theme }) => theme.borderWidth};
    background-color: ${({ active, theme }) =>
      !active ? theme.colors.pink : "transparent"};
    color: ${({ active, theme }) =>
      !active ? theme.colors.white : theme.colors.pink};
    font-size: 0.8em;
    text-align: center;
    font-weight: 900;
    border-radius: 0 30px 30px 0;
    transition: background-color 0.6s, color 0.6s;

    @media ${({ theme }) => theme.device.tablet} {
      font-size: 1em;
      text-align: center;
    }
    &:first-child {
      border-radius: 30px 0 0 30px;
      background-color: ${({ active, theme }) =>
        active ? theme.colors.pink : "transparent"};
      color: ${({ active, theme }) =>
        active ? theme.colors.white : theme.colors.pink};
    }
  }
`
