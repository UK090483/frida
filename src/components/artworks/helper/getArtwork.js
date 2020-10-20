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

export function getArtworkApi(artwork) {
  const {
    content: {
      Image: { filename: imageUrl },
      description: artworkDescription,
      name: artworkName,
      depth,
      width,
      height,
      price,
      availability,
      stil: {
        content: { name: stil },
      },
      medium: {
        content: { name: medium },
      },
      artist: {
        content: {
          anzeige_name: artistName,
          artist_instagram_link: instagramLink,
          description: artistDescription,
          email: artistEmail,
          web_link: artistWebLink,
        },
      },
    },
  } = artwork

  const cleanAvailability =
    typeof availability === "object" ? availability[0] : availability

  return {
    slug: artwork.slug,
    id: artwork.id,
    artistName,
    artistEmail,
    artistDescription,
    artistWebLink,
    artworkName,
    artworkDescription,
    availability: cleanAvailability,
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
