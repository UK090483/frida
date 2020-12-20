import React, { useState } from "react"
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share"
import Icon from "~components/lib/Icon"
import { BiShareAlt } from "react-icons/bi"
import styled from "styled-components"
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaRegEnvelope,
} from "react-icons/fa"
import { isBrowser } from "react-device-detect"

export default function SozialShare({ url }) {
  const location = typeof window !== `undefined` ? window.location.href : ""
  const [open, setOpen] = useState(false)

  return (
    <Root
      onClick={() => {
        !isBrowser && setOpen(!open)
      }}
      onMouseEnter={() => {
        isBrowser && setOpen(true)
      }}
      onMouseLeave={() => {
        isBrowser && setOpen(false)
      }}
    >
      <ShareIcon
        as={FacebookShareButton}
        open={open}
        index={1}
        url={location}
        key={"facebook"}
      >
        <Icon icon={FaFacebook} size={"s"} />
      </ShareIcon>
      <ShareIcon
        as={WhatsappShareButton}
        open={open}
        index={2}
        url={location}
        key={"whatsapp"}
      >
        <Icon icon={FaWhatsapp} size={"s"} />
      </ShareIcon>
      <ShareIcon
        as={TwitterShareButton}
        open={open}
        index={3}
        url={location}
        key={"twitter"}
      >
        <Icon icon={FaTwitter} size={"s"} />
      </ShareIcon>
      <ShareIcon
        as={EmailShareButton}
        open={open}
        index={4}
        url={location}
        key={"mail"}
      >
        <Icon icon={FaRegEnvelope} size={"s"} />
      </ShareIcon>
      <MainIcon open={open} key={"main"}>
        <Icon icon={BiShareAlt} />
      </MainIcon>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  /* border: red solid 1px; */
  width: 280px;
  padding: 10px;
`

const ShareIcon = styled.div`
  position: absolute;
  bottom: 20%;
  transition: transform 0.3s cubic-bezier(0.41, 0.61, 0, 1.51),
    opacity 0.3s cubic-bezier(0, 1.13, 0, 1);

  transform: ${({ open, index }) =>
    open && `translate3d( ${index * 110}% ,10px, 0)`};
  opacity: ${({ open }) => (open ? 1 : 0)};
  left: ${({ open }) => (open ? "30px" : 0)};
  z-index: -1;
  z-index: ${({ open }) => (open ? 1 : -1)};
`

const MainIcon = styled.div`
  width: fit-content;
  transition: transform 0.3s;

  ${({ open }) => open && "transform: rotate(360deg) scale(1.1)"}
`
