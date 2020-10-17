import React from "react"
import styled from "styled-components"
import Section from "../../../container/section"
import { Link } from "gatsby"
import { setMouse } from "../../Mouse/mouseRemote"

function Infos() {
  return (
    <Section backgroundColor="red">
      <Root>
        <a
          href="http://schwan-communications.com/"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => {
            setMouse("link", true)
          }}
          onMouseLeave={() => {
            setMouse("link", false)
          }}
        >
          <p>© 2020 Schwan Communications</p>
        </a>

        <Link
          to={"/impressum"}
          onMouseEnter={() => {
            setMouse("link", true)
          }}
          onMouseLeave={() => {
            setMouse("link", false)
          }}
        >
          <p>Impressum & Datenschutz</p>
        </Link>
        <Link
          to={"/agb"}
          onMouseEnter={() => {
            setMouse("link", true)
          }}
          onMouseLeave={() => {
            setMouse("link", false)
          }}
        >
          <p>AGB</p>
        </Link>
      </Root>
    </Section>
  )
}

const Root = styled.div`
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 200px;

  padding-top: 50px;
  padding-bottom: 50px;

  p {
    font-size: 1em;
    color: ${({ theme }) => theme.colors.white};
    width: 30%;
    margin: 0;
    padding: 0;
    text-decoration: none;
    cursor: none;
    white-space: nowrap;
  }

  @media ${({ theme }) => theme.device.laptop} {
    height: 100px;
    padding-top: 0;
    padding-bottom: 0;
    flex-direction: row;
    justify-content: space-between;
    p {
      font-size: 1.2em;
    }
  }
`

export default Infos
