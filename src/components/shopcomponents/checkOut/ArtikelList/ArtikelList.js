import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Artikel from "./Artikel/Artikel"
import Summary from "../BillingPannel/Summary"

export default function ArtikelList({ artikel, nextStep }) {
  return (
    <Root>
      {artikel.map(item => (
        <Artikel key={item.uuid} artikel={item} />
      ))}
      <Summary artikel={artikel}></Summary>
    </Root>
  )
}

const Root = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
  padding-bottom: 100px;

  li {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border-bottom: black solid 1px;
  }
  li:last-child {
    border-bottom: none;
  }
`

ArtikelList.propTypes = {
  artikel: PropTypes.array,
}
