import React from "react"
import { Link } from "gatsby"
import style from "./button.module.scss"
import PropTypes from "prop-types"
import styled, { withTheme } from "styled-components"
import { setMouse } from "../generic/Mouse/mouseRemote"
function Button(props) {
  const {
    label,
    link,
    size = "default",
    type = "link",
    backgroundColor = "white",
    color = "black",
    onClick = () => {},
  } = props

  const inner = (
    <Inner
      bgColor={backgroundColor}
      color={color}
      onMouseEnter={() => {
        setMouse("link", true)
      }}
      onMouseLeave={() => {
        setMouse("link", false)
      }}
    >
      {label}
    </Inner>
  )

  return (
    <React.Fragment>
      {type === "link" && (
        <Link className={`${style.root} ${style[size]}`} to={link}>
          {inner}
        </Link>
      )}
      {type === "externalLink" && (
        <a
          className={`${style.root} ${style[size]}`}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {inner}
        </a>
      )}
      {type === "clickButton" && (
        <div
          className={style.root}
          onClick={onClick}
          onMouseEnter={() => {
            setMouse("link", true)
          }}
          onMouseLeave={() => {
            setMouse("link", false)
          }}
        >
          <div className={`${style.inner} ${style[backgroundColor]}`}>
            {label}
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

const Inner = styled.div`
  padding: 1.2rem 2rem;
  width: fit-content;
  border: ${({ theme }) => theme.colors.black + " solid " + theme.borderWidth};
  border-color: ${({ theme, color }) => getColor(theme, color)};
  color: ${({ theme, color }) => getColor(theme, color)};
  border-radius: 50px;
  transition: background-color 0.4s, color 0.4s;
  &:hover {
    background-color: ${({ theme, color }) => getColor(theme, color)};
    color: ${({ theme, bgColor }) => getColor(theme, bgColor)};
  }
`
const getColor = (theme, c) => {
  switch (c) {
    case "black":
      return theme.colors.black
    case "white":
      return theme.colors.white
    case "lila":
      return theme.colors.pink
    case "red":
      return theme.colors.red
    default:
      break
  }
}

Button.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
}
Button.defaultProps = {
  theme: {
    main: "palevioletred",
  },
}

export default withTheme(Button)
