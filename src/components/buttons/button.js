import React from "react"
import { Link } from "gatsby"
import style from "./button.module.scss"
import useMouse from "../generic/Mouse/hooks/useMouse"
import PropTypes from "prop-types"
import { withTheme } from "styled-components"

function Button(props) {
  const {
    label,
    link,
    size = "default",
    type = "link",
    backgroundColor = "white",
    onClick = () => {},
  } = props

  const { setMouse } = useMouse()
  const inner = (
    <div
      className={`${style.inner} ${style[backgroundColor]}`}
      onMouseEnter={() => {
        setMouse("link", true)
      }}
      onMouseLeave={() => {
        setMouse("link", false)
      }}
    >
      {label}
    </div>
  )

  return (
    <React.Fragment>
      {type === "link" && (
        <Link
          className={`${style.root} ${style[size]}`}
          to={link}
          style={style}
        >
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
