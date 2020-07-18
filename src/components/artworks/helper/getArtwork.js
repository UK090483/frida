export default function getArtwork(artwork) {
  return {
    artistName: artwork.artistName,
    artistEmail: artwork.artistEmail,
    artistDescription: artwork.artistDescription,
    artworkName: artwork.artworkName,
    artworkDescription: artwork.artworkDescription,
    availability: artwork.availability,
    images: {
      src: artwork.images[0].local.childImageSharp.fluid.src,
      srcSet: artwork.images[0].local.childImageSharp.fluid.srcSet,
      width: artwork.images[0].local.childImageSharp.original.width,
      height: artwork.images[0].local.childImageSharp.original.height,
    },
    height: artwork.height,
    width: artwork.width,
    price: artwork.price,
    stil: artwork.stil,
    medium: artwork.medium,
    instagramLink: artwork.instagramLink,
  }
}
