import React from "react"
import transformImage from "../../helper/transformImage"
import styled from "styled-components"
import PropTypes from "prop-types"
const ArtworkImage = ({ src, alt, onLoad }) => {
  const [loaded, setLoaded] = useState(false)
  const resizeSrc = transformImage(src, "500x0")

  const sizes = src.split("/")[5].split("x")
  const width = sizes[0]
  const height = sizes[1]
  const ratio = height / width

  return (
    <Root
      ratio={ratio}
      loaded={true}
      alt={alt}
      onLoad={() => {
        onLoad()
        setLoaded(true)
      }}
      src={resizeSrc}
    ></Root>
  )
}

const Root = styled.img`
  margin-bottom: 0;
  transition: opacity 1s;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};

  &::before {
    content: "";
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: ${({ ratio }) => ratio * 100 + "%"};
  }
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`
ArtworkImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onLoad: PropTypes.func,
}

export default ArtworkImage
