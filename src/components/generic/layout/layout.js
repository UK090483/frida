import React from "react"
import PropTypes from "prop-types"
import Header from "../header/header"
import GlobalStyle from "../../../Styles/globalStyle"
import Nav from "../nav/nav"
import Footer from "../Footer/footer"
import Mouse from "../Mouse/mouse"
import CookieConsent from "../../CookieConsent/CookieConsent"
import styled from "styled-components"
import { DefaultHeader } from "../header"

const Layout = props => {
  const { children, title, header = "default", initialColor } = props
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <PageWrap>
        {header === "default" ? (
          <DefaultHeader title={title} initialColor={initialColor} />
        ) : (
          header
        )}
        <main>{children}</main>
        <CookieConsent />
        <Footer title={title}></Footer>
      </PageWrap>
      <Mouse />
    </React.Fragment>
  )
}

const PageWrap = styled.div`
  margin: 0 auto;
  max-width: 2600;
  overflow: hidden;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
