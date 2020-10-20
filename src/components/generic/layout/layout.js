import React from "react"
import PropTypes from "prop-types"
import Header from "../header/header"
import styled from "styled-components"
import GlobalStyle from "../../../Styles/globalStyle"
// import NormalizeCss from "../../../Styles/normalize"

import Nav from "../nav/nav"
import Footer from "../Footer/footer"
import Mouse from "../Mouse/mouse"
import CookieConsent from "../../CookieConsent/CookieConsent"
import { setMouse } from "../Mouse/mouseRemote"
// import "../../../fonts/webfonts/styles.css"

const Layout = ({ children, title, header = "default", color }) => {
  return (
    <React.Fragment>
      {/* <NormalizeCss></NormalizeCss> */}
      <GlobalStyle></GlobalStyle>
      <PageLayout
        className={"page-layout"}
        onMouseMove={e => {
          setMouse("move", e)
        }}
        // style={{
        //   margin: `0 auto`,
        //   maxWidth: 2600,
        //   overflow: "hidden",
        // }}
      >
        {header === "default" ? (
          <Header title={title} color={color}>
            <Nav></Nav>
          </Header>
        ) : (
          header
        )}
        {/* <div
          style={{
            margin: `0 auto`,
            maxWidth: 2600,
          }}
        > */}
        <main>{children}</main>
        <CookieConsent />
        <Footer title={title}></Footer>
        {/* </div> */}
      </PageLayout>
      <Mouse></Mouse>
    </React.Fragment>
  )
}

const PageLayout = styled.div`
  margin: 0 auto;
  width: 100vw;
  max-width: ${({ theme }) => theme.pageWidth};
  overflow: hidden;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
