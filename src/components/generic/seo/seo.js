import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
// import { GatsbySeo, ProductJsonLd } from "gatsby-plugin-next-seo"
import { getFluidImage, urlFor } from "~components/helper/sanityImage"

function SEO({
  description,
  lang,
  meta,
  title,
  path,
  image,
  artwork,
  product,
}) {
  const { site, fridalogo } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        fridalogo: file(relativePath: { eq: "meetfridaLogo.jpg" }) {
          size
          childImageSharp {
            original {
              src
              height
              width
            }
          }
        }
      }
    `
  )

  const { siteUrl } = site.siteMetadata

  const metaDescription = description || site.siteMetadata.description

  const getArtworkImage = artwork => {
    const {
      artworkName,
      artistName,
      // description,
      image: { imageAssetId },
      // price,
    } = artwork

    const fluidImg = urlFor(imageAssetId).width(1200).url()
    const aspectRatio = getFluidImage(imageAssetId, {}).aspectRatio

    const preparedImage = {
      url: fluidImg,
      width: 1200,
      height: 1200 / aspectRatio,
      alt: `Kunstwerk "${artworkName}" von ${artistName}`,
    }
    return preparedImage
  }

  const preparedImage = artwork
    ? getArtworkImage(artwork)
    : {
        url: siteUrl + fridalogo.childImageSharp.original.src,
        width: fridalogo.childImageSharp.original.width,
        height: fridalogo.childImageSharp.original.height,
        alt: "#meetFrida Logo",
      }

  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
      >
        <link rel="canonical" href={siteUrl + path} />
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="image" content={preparedImage.url} />
        <link rel="canonical" href={siteUrl + path} />
        {/* OpenGraph tags */}

        <meta property="og:url" content={siteUrl + path} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={preparedImage.url} />
        <meta property="og:image:width" content={preparedImage.width} />
        <meta property="og:image:height" content={preparedImage.height} />

        {artwork ? (
          <meta property="og:type" content="product" />
        ) : (
          <meta property="og:type" content="website" />
        )}

        {artwork && (
          <meta property="product:price:amount" content={artwork.price} />
        )}
        {artwork && <meta property="product:price:currency" content="EUR" />}
        {artwork && <meta property="product:availability" content="in stock" />}

        {/* <meta property="fb:app_id" content={seo.social.fbAppID} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:creator" content={seo.social.twitter} /> */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={preparedImage.url} />
      </Helmet>
    </React.Fragment>
  )
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
