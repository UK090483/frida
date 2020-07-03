/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import './theme.scss'


import Nav from "./nav/nav"
import Footer from "./Footer/footer"
//import Mouse from "./Mouse/mouse"

const Layout = ({ children, title, color }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{}}>
      {/* <Mouse></Mouse> */}
      <Header siteTitle={data.site.siteMetadata.title} title={title}>
        <Nav></Nav>
      </Header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 2000,
        }}
      >
        <main>{children}</main>
        <Footer>

        </Footer>

      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
