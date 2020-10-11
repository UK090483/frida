export default function getArtwork(artwork) {
  const {
    Image: { filename: imageUrl },
    stil: { name: stil },
    medium: { name: medium },
    artist: {
      content: {
        anzeige_name: artistName,
        artist_instagram_link: instagramLink,
        description: artistDescription,
        email: artistEmail,
        web_link: artistWebLink,
      },
    },
    description: artworkDescription,
    name: artworkName,
    depth,
    width,
    height,
    price,
    availability,
  } = artwork.content
  return {
    slug: artwork.slug,
    id: artwork.id,
    artistName,
    artistEmail,
    artistDescription,
    artistWebLink,
    artworkName,
    artworkDescription,
    availability,
    images: {
      fluid: "",
      src: "",
      srcSet: "",
      width: "",
      height: "",
    },

    imageUrls: "artwork.imageUrls",
    imageUrl,
    height,
    width,
    depth,
    price,
    stil,
    medium,
    instagramLink,
  }
}
