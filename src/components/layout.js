/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header/header"
import "./layout.scss"
import "./theme.scss"

import { isBrowser } from "react-device-detect"

import Nav from "./nav/nav"
import Footer from "./Footer/footer"
import Mouse from "./Mouse/mouse"

import useMouse from './Mouse/hooks/useMouse';

const Layout = ({ children, title }) => {

  const { setMouse } = useMouse()


  return (
    <div style={{}} onMouseMove={(e) => { setMouse('move', e) }} >
      {isBrowser && <Mouse></Mouse>}
      <Header title={title}  >
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
