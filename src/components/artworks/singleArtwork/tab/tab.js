import React, { useState } from "react"
import xss from "xss"
import InstagramIcon from "../../../../assets/instagram_icon.svg"
import LinkIcon from "../../../../assets/link_icon.svg"
import useMouse from "../../../generic/Mouse/hooks/useMouse"
import styled, { keyframes } from "styled-components"

import NSwitch from "./switch"

import { Link } from "gatsby"
export default function Tab({
  text1,
  text2,
  instagramLink,
  artistWebLink,
  relatedArtworks,
  isModal,
}) {
  // const [active, setActive] = useState(true)
  const [curentActive, setCurentActive] = useState("more")

  const { setMouse } = useMouse()

  // const handleClick = () => {
  //   setActive(!active)
  // }

  const getItems = () => {
    const res = []
    if (relatedArtworks || true) {
      res.push({ label: "Weiter Bilder", name: "more" })
    }
    if (text1 || true) {
      res.push({ label: "Künstler Info", name: "künstler" })
    }
    if (text2 || true) {
      res.push({ label: "Kunstwer Info", name: "kunstwerk" })
    }

    return res
  }

  return (
    <div>
      <Controles>
        <NSwitch
          current={curentActive}
          items={getItems()}
          handleClick={name => setCurentActive(name)}
        ></NSwitch>

        <LinkIconWrap>
          {artistWebLink && (
            <Icon
              target="_blank"
              rel="noreferrer"
              href={artistWebLink}
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

      {curentActive === "künstler" && (
        <Text dangerouslySetInnerHTML={{ __html: xss(text1) }}></Text>
      )}
      {curentActive === "more" && (
        <Text>
          <RelativArtworkWrap>
            {relatedArtworks.map(item => {
              return (
                <Link
                  key={item.slug}
                  to={`/artwork/${item.slug}`}
                  state={{ modal: isModal }}
                >
                  <RelativArtworkImage
                    src={item.image.fluid100.src}
                  ></RelativArtworkImage>
                </Link>
              )
            })}
          </RelativArtworkWrap>
        </Text>
      )}
      {curentActive === "kunstwerk" && (
        <Text dangerouslySetInnerHTML={{ __html: xss(text2) }}></Text>
      )}
    </div>
  )
}

const RelativArtworkWrap = styled.div`
  overflow: hidden;
`
const RelativArtworkImage = styled.img`
  margin: 0 10px;
`

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

// const Switch = styled.div`
//   display: flex;
//   min-height: 50px;
//   margin: 20px auto;
//   width: fit-content;

//   @media ${({ theme }) => theme.device.tablet} {
//     margin: 0;
//     width: unset;
//   }

//   button {
//     padding: 0 20px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border: ${({ theme }) => theme.colors.pink} solid
//       ${({ theme }) => theme.borderWidth};
//     background-color: ${({ active, theme }) =>
//       !active ? theme.colors.pink : "transparent"};
//     color: ${({ active, theme }) =>
//       !active ? theme.colors.white : theme.colors.pink};
//     font-size: 0.8em;
//     text-align: center;
//     font-weight: 900;
//     border-radius: 0 30px 30px 0;
//     transition: background-color 0.6s, color 0.6s;

//     @media ${({ theme }) => theme.device.tablet} {
//       font-size: 1em;
//       text-align: center;
//     }
//     &:first-child {
//       border-radius: 30px 0 0 30px;
//       background-color: ${({ active, theme }) =>
//         active ? theme.colors.pink : "transparent"};
//       color: ${({ active, theme }) =>
//         active ? theme.colors.white : theme.colors.pink};
//     }
//   }
// `
