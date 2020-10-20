import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { setMouse } from "../../Mouse/mouseRemote"

const Routes = [
  { link: "/ausstellung/", label: "AUSSTELLUNG" },
  { link: "/teilnehmen/", label: "TEILNEHMEN" },
  { link: "/unterstützen/", label: "UNTERSTÜTZEN" },
  { link: "/about/", label: "WER IST FRIDA?" },
  { link: "/kontakt/", label: "KONTAKT" },
]

function Links({ open }) {
  return (
    <Root open={open}>
      {Routes.map((route, index) => (
        <StyledLink
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
  padding-top: 20vh;
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
    transform: ${({ open }) =>
      open ? "translate3d(0, 0, 0)" : "translate3d(100vw, 0, 0)"};

    transition: transform 0.5s ${({ index }) => `${index * 0.1 + 0.3}s`}
      cubic-bezier(0.47, 0.71, 0.42, 1.12);
  }
`

// h2 {
//   ${({ animation, index, open }) => {
//     switch (animation) {
//       case "in":
//         return `transform: translate3d(0, 0, 0); transition: transform 0.5s ${
//           index * 0.1 + 0.3
//         }s cubic-bezier(0.47, 0.71, 0.42, 1.12)`
//       case "out":
//         return `transform: translate3d(100vw, 0, 0); transition: transform 0.5s ${
//           index * 0.1 + 0.3
//         }s cubic-bezier(0.47, 0.71, 0.42, 1.12)`

//       default:
//         return open
//           ? `transform: translate3d(0, 0, 0); transition: unset`
//           : `transform: translate3d(100vw, 0, 0); transition: unset`
//     }
//   }}
// }
