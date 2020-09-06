import PropTypes from "prop-types"
import React from "react"
import PageTitle from "../pageTitle/pageTitle"
import style from "./header.module.scss"

const Header = ({
  children,
  siteTitle,
  title = "",
  titleElement = false,
  color = "white",
  link = true,
}) => (
  <header className={style.root}>
    <div className={style.inner}>
      {title && !!!titleElement && (
        <PageTitle title={title} color={color} link={link}></PageTitle>
      )}
      {titleElement && titleElement}

      {children}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
