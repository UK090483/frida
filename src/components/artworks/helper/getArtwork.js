export default function getArtwork(artwork) {
  //console.log(!!artwork.images[0].local)

  if (!!!artwork.images[0].local) {
    return null
  }

  return {
    id: artwork.id,
    artistName: artwork.artistName,
    artistEmail: artwork.artistEmail,
    artistDescription: artwork.artistDescription,
    artistWebLink: artwork.artistWebLink,
    artworkName: artwork.artworkName,
    artworkDescription: artwork.artworkDescription,
    availability: artwork.availability,
    images: {
      fluid: artwork.images[0].local.childImageSharp.fluid,
      src: artwork.images[0].local.childImageSharp.fluid.src,
      srcSet: artwork.images[0].local.childImageSharp.fluid.srcSet,
      width: artwork.images[0].local.childImageSharp.original.width,
      height: artwork.images[0].local.childImageSharp.original.height,
    },

    imageUrls: artwork.imageUrls,
    height: artwork.height,
    width: artwork.width,
    depth: artwork.depth,
    price: artwork.price,
    stil: artwork.stil,
    medium: artwork.medium,
    instagramLink: artwork.instagramLink,
  }
}
