
import PropTypes from "prop-types"
import React from "react"
import PageTitle from './pageTitle/pageTitle'


const Header = ({ children, siteTitle, title, color = 'white' }) => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,

    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 2000,
        width: '100%',
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-between',

      }}
    >
      {siteTitle && <PageTitle title={siteTitle} color={color}></PageTitle>}


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
