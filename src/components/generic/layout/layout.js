import React from "react"
import PropTypes from "prop-types"
import Header from "../header/header"
import GlobalStyle from "../../../Styles/globalStyle"
// import NormalizeCss from "../../../Styles/normalize"
// import CheckOut from "../../shopcomponents/checkOut/checkOut"

import Nav from "../nav/nav"
import Footer from "../Footer/footer"
import Mouse from "../Mouse/mouse"
import CookieConsent from "../../CookieConsent/CookieConsent"

const Layout = props => {
  // console.log(props)
  const { children, title, header = "default", color } = props
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <div
        className={"page-layout"}
        style={{
          margin: `0 auto`,
          maxWidth: 2600,
          overflow: "hidden",
        }}
      >
        {header === "default" ? (
          <Header title={title} color={color}>
            <Nav></Nav>
          </Header>
        ) : (
          header
        )}
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 2600,
          }}
        >
          <main>{children}</main>
          <CookieConsent />
          <Footer title={title}></Footer>
        </div>
      </div>

      <Mouse></Mouse>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
