import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ children }) => (
  <Root>
    <Inner>{children}</Inner>
  </Root>
)

const Root = styled.header`
  background: transparent;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  padding-right: 20px;
  padding-left: 20px;
  pointer-events: none;
  height: 100px;
`
const Inner = styled.div`
  margin: 0 auto;
  max-width: 2000;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.device.tablet} {
    height: 100px;
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
