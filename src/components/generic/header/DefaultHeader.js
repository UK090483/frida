import PropTypes from "prop-types"
import React from "react"
import PageTitle from "./parts/pageTitle"
import Header from "./parts/header"
import Nav from "../nav/nav"
import styled from "styled-components"

const DefaultHeader = ({ initialColor, title }) => (
  <Header>
    <PageTitle title={title} initialColor={initialColor} />
    <Nav />
  </Header>
)

DefaultHeader.propTypes = {
  title: PropTypes.string,
}

DefaultHeader.defaultProps = {
  initialColor: `white`,
  title: "Frida",
}

export default DefaultHeader
