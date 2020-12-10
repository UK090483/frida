import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { setMouse } from "../../Mouse/mouseRemote"
import useBodyScrollStop from "../../../helper/useBodyScrollStop"

const Routes = [
  { link: "/ausstellung/", label: "Online-Gallery" },
  { link: "/about/", label: "WER IST FRIDA?" },
  { link: "/teilnehmen/", label: "WERKE EINREICHEN" },
  { link: "/unterstützen/", label: "UNTERSTÜTZEN" },
  { link: "/shop/", label: "SHOP" },
  { link: "/kontakt/", label: "KONTAKT" },
]

function Links({ open }) {
  const { enableBodySroll } = useBodyScrollStop()
  return (
    <Root open={open}>
      {Routes.map((route, index) => (
        <StyledLink
          id={"navigation_link"}
          open={open}
          key={index}
          index={index}
          to={route.link}
          onMouseEnter={() => {
            setMouse("link", true)
          }}
          onMouseLeave={() => {
            setMouse("link", false)
          }}
          onClick={() => {
            enableBodySroll()
          }}
          activeClassName={"frida_nav_active"}
        >
          <h2>{route.label}</h2>
        </StyledLink>
      ))}
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  width: 100%;
  padding-top: 10vh;
  padding-left: 7%;
`

export default Links

const StyledLink = styled(Link)`
  /* h2 {
    margin: 0;
    line-height: 2.2rem;
  } */

  color: white;
  /* font-size: 2rem; */
  line-height: 5.2rem;
  text-decoration: none;
  font-weight: 800;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-color: white;
  -webkit-text-stroke-width: 0.1em;
  &:hover {
    -webkit-text-fill-color: white;
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: 0.1em;
  }
  &.frida_nav_active {
    -webkit-text-fill-color: white;
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: 0.1em;
  }
  h2 {
    margin-bottom: 15px;
    transform: ${({ open }) =>
      open ? "translate3d(0, 0, 0)" : "translate3d(100vw, 0, 0)"};

    transition: transform 0.5s ${({ index }) => `${index * 0.1 + 0.3}s`}
      cubic-bezier(0.47, 0.71, 0.42, 1.12);
  }
`
