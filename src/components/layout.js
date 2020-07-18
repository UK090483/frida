/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"

import Header from "./header/header"
import "./layout.scss"
import "./theme.scss"
import UiContext from "../context/UiContext"

import Nav from "./nav/nav"
import Footer from "./Footer/footer"
import Mouse from "./Mouse/mouse"

const Layout = ({ children, title, color }) => {
  const Ui = useContext(UiContext)

  return (
    <div style={{}}>
      {Ui.isBrowser && <Mouse></Mouse>}
      <Header title={title}>
        <Nav></Nav>
      </Header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 2000,
        }}
      >
        <main>{children}</main>
        <Footer title={title}></Footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
