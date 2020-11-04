import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Artikel from "../Artikel/Artikel"

export default function ArtikelList({ artikel }) {
  return (
    <Root>
      {artikel.map(item => (
        <Artikel key={item.uuid} artikel={item} />
      ))}
    </Root>
  )
}

const BillinPanel = styled.div``
const Root = styled.div`
  border: red solid 1px;
`

ArtikelList.propTypes = {
  artikel: PropTypes.array,
}
