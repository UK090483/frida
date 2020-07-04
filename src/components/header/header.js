
import PropTypes from "prop-types"
import React from "react"
import PageTitle from '../pageTitle/pageTitle'

import style from './header.module.scss';

const Header = ({ children, siteTitle, title, color = 'white' }) => (
  <header className={style.root}>
    <div className={style.inner}>

      {siteTitle && <PageTitle title={title} color={color}></PageTitle>}

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
