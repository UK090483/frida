import React from "react"
import Header from "../../header/header"
import Kreutz from "../../../../assets/Menu_Kreutz.svg"
import { setMouse } from "../../Mouse/mouseRemote"
import styled from "styled-components"

export default function header({ onClick }) {
  return (
    <Header color="#F5C5D9">
      <div></div>{" "}
      <Icon onClick={onClick}>
        <Kreutz
          onMouseEnter={() => {
            setMouse("link", true)
          }}
          onMouseLeave={() => {
            setMouse("link", false)
          }}
        ></Kreutz>
      </Icon>
    </Header>
  )
}

const Icon = styled.a`
  width: 40px;
  pointer-events: all;
  transform: translateY(5px);
`
