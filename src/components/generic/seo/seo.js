import React from "react"
import PropTypes from "prop-types"

import PageHelmet from "./pageHelmet"
import ProductHelmet from "./productHelmet"

function SEO({ title, path, artwork, product }) {
  if (product || artwork) {
    return (
      <ProductHelmet
        title={title}
        path={path}
        product={product}
        artwork={artwork}
      />
    )
  }
  return <PageHelmet title={title} path={path} />
}

SEO.defaultProps = {
  lang: `de`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default SEO
