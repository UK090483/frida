
import PropTypes from "prop-types"
import React from "react"
import PageTitle from '../pageTitle/pageTitle'

import style from './header.module.scss';

const Header = ({ children, siteTitle, title = '', color = 'white', link = true }) => (
  <header className={style.root}>
    <div className={style.inner}>

      {title && <PageTitle title={title} color={color} link={link}></PageTitle>}

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
