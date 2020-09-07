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
import CookieConsent from "./CookieConsent/CookieConsent"
import useMouse from "./Mouse/hooks/useMouse"
import { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Layout = ({
  children,
  title,
  header = "default",
  backgroundColor = "#F5C5D9",
}) => {
  const { setMouse } = useMouse()

  return (
    <TransitionState>
      {({ transitionStatus, exit, entry, mount }) => {
        return (
          <div
            style={{ backgroundColor: backgroundColor }}
            onMouseMove={e => {
              setMouse("move", e)
            }}
          >
            {isBrowser && <Mouse></Mouse>}

            {header === "default" ? (
              <Header title={title}>
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
              <motion.main
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                {children}
              </motion.main>

              <CookieConsent />
              <Footer title={title}></Footer>
            </div>
          </div>
        )
      }}
    </TransitionState>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
