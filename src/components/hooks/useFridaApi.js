import axios from "axios"

export default function useFridaApi() {
  const FetchArtworks = async (page, filterQuery, artworks, reset) => {
    let url = `/fridaApi/artworks/${page}.json`
    const hasFilter = filterQuery ? Object.keys(filterQuery).length > 0 : false

    if (hasFilter) {
      const filtername = Object.keys(filterQuery)[0]
      const filtervalue = filterQuery[filtername]

      url = `/fridaApi/${filtername}/${filtervalue}/${page}.json`
    }

    try {
      const result = await axios.get(url)

      if (result.data.data) {
        const { data, hasMore } = result.data
        const nextArtworks = reset ? [...data] : [...artworks, ...data]
        const nextPage = page + 1

        return {
          nextArtworks,
          hasMore,
          nextPage,
        }
      } else {
        return {
          nextArtworks: [],
          hasMore: false,
          nextPage: 1,
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return { FetchArtworks }
}
