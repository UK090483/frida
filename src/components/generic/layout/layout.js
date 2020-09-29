import React from "react"
import PropTypes from "prop-types"

import Header from "../header/header"
import "./layout.scss"
import "../theme.scss"

import { isBrowser } from "react-device-detect"

import Nav from "../nav/nav"
import Footer from "../Footer/footer"
import Mouse from "../Mouse/mouse"
import CookieConsent from "../../CookieConsent/CookieConsent"

import useMouse from "../Mouse/hooks/useMouse"

const Layout = ({ children, title, header = "default", color }) => {
  const { setMouse } = useMouse()

  return (
    <div
      onMouseMove={e => {
        setMouse("move", e)
      }}
    >
      {isBrowser && <Mouse></Mouse>}
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
          maxWidth: 2000,
        }}
      >
        <main>{children}</main>
        <CookieConsent />
        <Footer title={title}></Footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
